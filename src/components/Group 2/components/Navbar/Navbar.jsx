import { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoNotificationsOutline } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import { IoSearchOutline, IoCloseOutline } from "react-icons/io5";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
import useTheme from "../../context/useTheme";
import styles from "./Navbar.module.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import { MdOutlineClose } from "react-icons/md";

import { IoSearchSharp } from "react-icons/io5";

function Navbar() {
  const [showSearch, setShowSearch] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [showMenuHamburger, setShowMenuHamburger] = useState(false);
  //  const isSearchMode = showSearch;

  // Get the current theme and the toggle function from context
  const { theme, toggleTheme } = useTheme();

  function handleSearchClick() {
    setShowSearch(!showSearch);
    if (showSearch) setSearchValue("");
  }

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className={styles.navbar}>

      
      <div className={styles.logo}>The Commons</div>

      <ul className={`${styles.navLinks}`}>
        <li>
          <NavLink
            to="/feed"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Feeds
          </NavLink>
        </li>
        <li
          className={showSearch ? styles.active : ""}
          onClick={handleSearchClick}
        >
          Search
        </li>
        <li>
          <NavLink
            to="/profile"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Profile
          </NavLink>
        </li>
      </ul>

      <div className="ml-35  lg:hidden">
        {showMenuHamburger ? (
          <MdOutlineClose
            className="text-[30px] cursor-pointer  "
            onClick={() => setShowMenuHamburger(!showMenuHamburger)}
          />
        ) : (
          <IoMdMenu
            className="text-[30px] cursor-pointer "
            onClick={() => setShowMenuHamburger(!showMenuHamburger)}
          />
        )}

        <div className="ml-">
          {showMenuHamburger && (
            <div className="w-full flex flex-col px-5 absolute mt-5 right-0 border text-white text-center py-5  bg-[#284643] rounded-lg cursor-pointer lg:hidden">
              <ul className="">
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive ? styles.active : ""
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/feed"
                    className={({ isActive }) =>
                      isActive ? styles.active : ""
                    }
                  >
                    Feeds
                  </NavLink>
                </li>
                <li
                  className={showSearch ? styles.active : ""}
                  onClick={handleSearchClick}
                >
                  Search
                </li>
                <li>
                  <NavLink
                    to="/profile"
                    className={({ isActive }) =>
                      isActive ? styles.active : ""
                    }
                  >
                    Profile
                  </NavLink>
                </li>
              </ul>

              <div className={`${styles.rightSection}flex items-center mt-5`}>
                <button className={`${styles.createBtn} `}>Create Post</button>
                <IoNotificationsOutline className={styles.iconBtn} size={22} />
                <FaRegUserCircle className={styles.iconBtn} size={22} />
                {/* Theme toggle — shows sun in dark mode, moon in light mode */}
                <button
                  className={styles.themeBtn}
                  onClick={toggleTheme}
                  aria-label="Toggle theme"
                >
                  {theme === "light" ? (
                    <MdOutlineDarkMode size={20} />
                  ) : (
                    <MdOutlineLightMode size={20} />
                  )}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {showSearch && (
        <div className={styles.searchBar}>
          <IoSearchOutline size={18} className={styles.searchIcon} />
          <input
            type="text"
            placeholder="Search the community..."
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            className={styles.searchInput}
            autoFocus
          />
          <IoCloseOutline
            size={20}
            className={styles.searchClose}
            onClick={handleSearchClick}
          />
        </div>
      )}

      <div className={styles.rightSection}>
        <button className={`hidden lg:block ${styles.createBtn}  `}>
          Create Post
        </button>
        <IoNotificationsOutline className={styles.iconBtn} size={22} />
        <FaRegUserCircle className={styles.iconBtn} size={22} />
        {/* Theme toggle — shows sun in dark mode, moon in light mode */}
        <button
          className={styles.themeBtn}
          onClick={toggleTheme}
          aria-label="Toggle theme"
        >
          {theme === "light" ? (
            <MdOutlineDarkMode size={20} />
          ) : (
            <MdOutlineLightMode size={20} />
          )}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
