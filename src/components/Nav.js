import React, { useRef, useEffect, useState } from "react";
import dropdown from "../assets/images/dropdown.svg";
import Polygon from "../assets/images/Polygon 2.svg";
import user from "../assets/images/userimage.svg";
import "../assets/css/nav.css";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebaseConfig";
function Nav(props) {
  const desktopDropdownRef = useRef(null);
  const mobileDropdownRef = useRef(null);
  const mobileNavRef = useRef(null);
  const desktopIconRef = useRef(null);
  const mobileIconRef = useRef(null);
  const navigate = useNavigate(); // Initialize useNavigate for navigation
  const handleSignOut = async () => {
    try {
      await signOut(auth);
      console.log("User logged out successfully!");
      navigate("/login"); // Redirect to login page after logout
      localStorage.removeItem("username");
    } catch (error) {
      console.error("Logout failed:", error.message);
    }
  };

  const toggleDropdown = (ref, iconRef) => {
    if (ref.current) {
      ref.current.classList.toggle("show");
    }
    if (iconRef.current) {
      iconRef.current.classList.toggle("rotate");
    }
  };

  const toggleMobileNav = () => {
    if (mobileNavRef.current) {
      mobileNavRef.current.classList.toggle("show");
    }
  };
  const [username, setUsername] = useState("");

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);
  return (
    <>
      <nav>
        <div id="first-nav-div">
          <img src={Polygon} alt="logo" />
          <p>TOTC</p>
        </div>
        <div id="second-nav-div">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Courses">Courses</Link>
            </li>
            <li>
              <Link to="/career">Careers</Link>
            </li>
            <li>
              <Link to="/Blog">Blog</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
          </ul>
          <div id="user">
            <div id="image-div">
              <img src={user} alt="user" />
            </div>
            <p id="lina">{username || "Lina"}</p>
            <img
              src={dropdown}
              alt="dropdown"
              onClick={() => toggleDropdown(desktopDropdownRef, desktopIconRef)}
              id="imgclick"
              ref={desktopIconRef} // ✅ Assign the ref here
            />
            <div ref={desktopDropdownRef} className="dropdown">
              <a href="#gg">Profile</a>
              <a href="#bb">News</a>
              <a href="#cnb" onClick={handleSignOut}>
                Sign out
              </a>
            </div>
          </div>
        </div>

        {/* Mobile nav */}
        <div id="mobile-nav" ref={mobileNavRef}>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/course">Courses</Link>
            </li>
            <li>
              <Link to="/career">Careers</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
          </ul>

          <div id="user">
            <div id="user-div">
              <div id="image-div">
                <img src={user} alt="user" />
              </div>
              <p id="lina">{username || "Lina"}</p>
              <img
                src={dropdown}
                alt="dropdown"
                onClick={() => toggleDropdown(mobileDropdownRef, mobileIconRef)}
                id="imgclick"
                ref={mobileIconRef}
              />
            </div>
            <div ref={mobileDropdownRef} className="dropdown">
              <a href="#gg">Profile</a>
              <a href="#bb">News</a>
              <a href="#cnb" onClick={handleSignOut}>
                Sign out
              </a>
            </div>
          </div>
        </div>

        <button id="mobile-nav-toggle" onClick={toggleMobileNav}>
          ☰ Menu
        </button>
      </nav>
    </>
  );
}

export default Nav;
