import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/css/login.css";
import eye from "../assets/images/eye.svg";
import invisible from "../assets/images/invisible 1 copy.svg";

function Register(props) {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  return (
    <div>
      <div className="login">
        <div id="back-image-reg">
          <div>
            <p className="paragraph">
              Lorem Ipsum is simply <br /> <span>Lorem Ipsum is simply </span>{" "}
            </p>
          </div>
        </div>
        <div className="form">
          <form action="" method="post">
            <p className="lorem">Welcome to lorem..!</p>
            <div className="link">
              <Link to="/login" className="registar ">
                Login
              </Link>
              <Link to="#" className="registar main-register">
                Register
              </Link>
            </div>
            <p className="dummy">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              required
              placeholder="Enter your email"
            />

            <label htmlFor="username">User name</label>
            <input
              type="text"
              name="username"
              id="username"
              required
              placeholder="Enter your User name"
            />

            <label htmlFor="password">Password</label>
            <div id="password">
              <input
                type={passwordVisible ? "text" : "password"}
                name="password"
                id="none"
                placeholder="Enter your Password"
                required
              />
              <img
                src={passwordVisible ? eye : invisible}
                alt="Toggle visibility"
                id="eye"
                onClick={togglePasswordVisibility}
                style={{ cursor: "pointer" }}
              />{" "}
            </div>

            <div className="check">
              <section>
                <input type="checkbox" name="remember" id="remember" />
                <p>Remember me</p>
              </section>
              <Link to="/"> Forgot Password?</Link>
            </div>
            <button type="submit" className="button">
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
