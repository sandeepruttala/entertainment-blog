import React, { useState } from "react";
import CustomInput from "../components/CustomInput";
import logo from "../assets/logo.png";
import "../styles/header.css";

const Header = () => {
  const [searchValue, setSearchValue] = useState("");
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleCategoryClick = (e) => {
    e.stopPropagation();
    setIsCategoryOpen(!isCategoryOpen);
    setIsProfileOpen(false);
  };

  const handleProfileClick = (e) => {
    e.stopPropagation();
    setIsProfileOpen(!isProfileOpen);
    setIsCategoryOpen(false);
  };

  React.useEffect(() => {
    const closeDropdowns = (e) => {
      if (!e.target.closest(".dropdown-container")) {
        setIsCategoryOpen(false);
        setIsProfileOpen(false);
      }
    };

    document.addEventListener("click", closeDropdowns);
    return () => document.removeEventListener("click", closeDropdowns);
  }, []);

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" />
        </div>

        {/* <div className="mobile-nav">
          <div className="search-container">
            <i className="fa-solid fa-search search-icon"></i>
            <CustomInput
              type="text"
              name="search"
              placeholder="Search for entertainment"
              value={searchValue}
              onChange={handleSearchChange}
              className="search-input"
            />
          </div>
          
          <div className="category-trending">
            <button className="nav-link mobile" onClick={handleCategoryClick}>
              Category
              <i className={`fa-solid fa-chevron-down dropdown-icon ${
                isCategoryOpen ? "rotate" : ""
              }`}></i>
            </button>
            <a href="/trending" className="nav-link mobile">
              <i className="fa-solid fa-chart-line me-2"></i>
              Trending
            </a>
          </div>
        </div> */}
        <div className="header-left">
          <nav className="nav-menu">
            <a href="/" className="nav-link ">
              Home
            </a>
            <div className="dropdown-container">
              <button
                className="nav-link dropdown-trigger"
                onClick={handleCategoryClick}
              >
                <span>Categories</span>
                <i
                  className={`fa-solid fa-chevron-down dropdown-icon ${
                    isCategoryOpen ? "rotate" : ""
                  }`}
                ></i>
              </button>

              {isCategoryOpen && (
                <div className="dropdown-menu">
                  <a href="/movies" className="dropdown-item">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-film me-2"
                    >
                      <rect
                        x="2"
                        y="2"
                        width="20"
                        height="20"
                        rx="2.18"
                        ry="2.18"
                      ></rect>
                      <line x1="7" y1="2" x2="7" y2="22"></line>
                      <line x1="17" y1="2" x2="17" y2="22"></line>
                      <line x1="2" y1="12" x2="22" y2="12"></line>
                      <line x1="2" y1="7" x2="7" y2="7"></line>
                      <line x1="2" y1="17" x2="7" y2="17"></line>
                      <line x1="17" y1="17" x2="22" y2="17"></line>
                      <line x1="17" y1="7" x2="22" y2="7"></line>
                    </svg>
                    Movies
                  </a>
                  <a href="/tv-shows" className="dropdown-item">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-tv me-2"
                    >
                      <rect
                        x="2"
                        y="7"
                        width="20"
                        height="15"
                        rx="2"
                        ry="2"
                      ></rect>
                      <polyline points="17 2 12 7 7 2"></polyline>
                    </svg>
                    TV Shows
                  </a>
                  <a href="/music" className="dropdown-item">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-music me-2"
                    >
                      <path d="M9 18V5l12-2v13"></path>
                      <circle cx="6" cy="18" r="3"></circle>
                      <circle cx="18" cy="16" r="3"></circle>
                    </svg>
                    Music
                  </a>
                  <a href="/other" className="dropdown-item">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-more-horizontal me-2"
                    >
                      <circle cx="12" cy="12" r="1"></circle>
                      <circle cx="19" cy="12" r="1"></circle>
                      <circle cx="5" cy="12" r="1"></circle>
                    </svg>
                    Other
                  </a>
                </div>
              )}
            </div>
            <a href="/trending" className="nav-link">
              Trending
            </a>
            <div className="search-container">
              <i className="fa-solid fa-search search-icon"></i>
              <CustomInput
                type="text"
                name="search"
                placeholder="Search for entertainment"
                value={searchValue}
                onChange={handleSearchChange}
                className="search-input"
              />
            </div>
          </nav>
        </div>

        <div className="header-right">
          <button className="write-button">
            <i className="fa-regular fa-pen-to-square"></i>
            <span>Write</span>
          </button>

          <div className="dropdown-container">
            <button className="profile-trigger" onClick={handleProfileClick}>
              <div className="profile-icon-container">
                <i className="fa-solid fa-user profile-icon"></i>
              </div>
              <div className="profile-name">Jayanth paladugu</div>
            </button>

            {isProfileOpen && (
              <div className="dropdown-menu profile-dropdown">
                <a href="/profile" className="dropdown-item">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-user me-2"
                  >
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                  Profile
                </a>
                <a href="/login" className="dropdown-item">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-log-out me-2"
                  >
                    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                    <polyline points="16 17 21 12 16 7"></polyline>
                    <line x1="21" y1="12" x2="9" y2="12"></line>
                  </svg>
                  Logout
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
