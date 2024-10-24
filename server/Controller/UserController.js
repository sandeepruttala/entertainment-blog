const express = require("express");
const helper = require("../Helper/Helper");
const multer = require("multer");
const User = require("../Model/UserSchema");

const router = express.Router();

// get profile
router.get("/profile/:username", async (req, res) => {
    try {
        const { username } = req.params
        const user = await User.findOne({ username: username }).select("-password -__v -_id -age")
        if (user) {
            return res.status(200).send(user)
        }
        res.status(404).send("User Not Found")
    } catch (e) {
        console.log(e)
        res.status(500).json({ message: e })
    }
})

// user avatar
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./public/images/avatar");
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    },
});

const upload = multer({ storage: storage });

router.post("/avatar", upload.single("avatar"), async (req, res) => {
    try {
        const { username } = req.body
        const user = await User.findOne({ username: username })
        if (user) {
            user.avatar = req.file.filename;
            await user.save()
            return res.status(200).send(user)
        }
        res.status(404).send("User Not Found")
    } catch (e) {
        console.log(e)
        res.status(500).json({ message: e })
    }
})

module.exports = router;