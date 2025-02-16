
import React, { useRef } from "react";
import dropdown from "../assets/images/dropdown.svg";
import Polygon from "../assets/images/Polygon 2.svg";
import user from "../assets/images/userimage.svg";
import "../assets/css/nav.css";
import { Link } from "react-router-dom";


function Nav(props) {
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    if (dropdownRef.current) {
      dropdownRef.current.classList.toggle("show");
    }
  };

  return (
    <div>
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
          <div id="useer">
            <div id="imge-div">
              <img src={user} alt="user" />
            </div>
            <p id="lina">Lina</p>
            <img
              src={dropdown}
              alt="dropdown"
              onClick={toggleDropdown}
              id="imgclick"
            />
            <div ref={dropdownRef} className="dropdown">
              <a href="#gg">Profile</a>
              <a href="#bb">News</a>
              <a href="#cnb">Sign out</a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
