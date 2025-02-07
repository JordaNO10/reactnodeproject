import React from "react";
import { NavLink } from "react-router-dom";
import logo from "./assets/IsraHand.jpg";

const Header = () => {
  return (
    <>
      <h1>IsraHand</h1>
      <nav>
        <div className="navigation-container">
          {/* Replace the "Navigation" text with the hoverable button */}
          <button className="btn">
            <span className="icon">☰</span> {/* Hamburger icon */}
            <span className="text">תפריט</span>
          </button>

          {/* Navigation links */}
          <ul className="navigation-menu">
            <img src={logo} alt="Logo" height="35" width="auto" />
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "menu-item active" : "menu-item"
                }
              >
                דף הבית
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/signup"
                className={({ isActive }) =>
                  isActive ? "menu-item active" : "menu-item"
                }
              >
                הרשמה
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "menu-item active" : "menu-item"
                }
              >
                אודות
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/donations/"
                className={({ isActive }) =>
                  isActive ? "menu-item active" : "menu-item"
                }
              >
                תרומות
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "menu-item active" : "menu-item"
                }
              >
                יצירת קשר
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
