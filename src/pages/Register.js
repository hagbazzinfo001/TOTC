import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { doc, setDoc } from "firebase/firestore";
import { db, auth } from "../firebaseConfig"; // Import Firestore instance
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";

import "../assets/css/login.css";
import eye from "../assets/images/eye.svg";
import invisible from "../assets/images/invisible 1 copy.svg";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import ModalAlert from "../components/AlertModal"; // Import ModalAlert component

function Register() {
  const [modal, setModal] = useState({ type: "", message: "" });

  useEffect(() => {
    if (modal.message) {
      const timer = setTimeout(() => {
        setModal({ type: "", message: "" });
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [modal.message]);

  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  const [isLoading, setIsLoading] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  const isStrongPassword = (password) =>
    /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,}$/.test(
      password
    );

  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
    remember: false,
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!isStrongPassword(formData.password)) {
      setModal({
        type: "error",
        message:
          "Password must include uppercase, number, and special character.",
      });
      return;
    }

    setIsLoading(true);

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      const user = userCredential.user;

      await setDoc(doc(db, "users", user.uid), {
        username: formData.username,
        email: formData.email,
        createdAt: new Date().toISOString(),
      });

      await sendEmailVerification(user);

      setFormData({
        username: "",
        password: "",
        email: "",
        remember: false,
      });

      // ✅ Set success modal and stop loading
      setModal({
        type: "success",
        message:
          "Registration successful! Please check your email to verify your account, then proceed to login.",
      });

      setIsLoading(false); // ✅ Allow modal and button to update

      // ✅ Delay navigation to allow modal to display clearly
      setTimeout(() => {
        setModal({ type: "", message: "" });
        navigate("/login");
      }, 4000); // Increased to 4s for better visibility
    } catch (err) {
      setIsLoading(false);
      setModal({ type: "error", message: err.message });
      console.error("Registration failed:", err.message);
    }
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
          <form action="" method="post" onSubmit={handleRegister}>
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
              value={formData.email}
              onChange={handleChange}
            />

            <label htmlFor="username">User name</label>
            <input
              type="text"
              name="username"
              id="username"
              required
              placeholder="Enter your User name"
              value={formData.username}
              onChange={handleChange}
            />

            <label htmlFor="password">Password</label>
            <div id="password">
              <input
                type={passwordVisible ? "text" : "password"}
                name="password"
                id="none"
                placeholder="Enter your Password"
                value={formData.password}
                onChange={handleChange}
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
                <input
                  type="checkbox"
                  name="remember"
                  id="remember"
                  checked={formData.remember}
                  onChange={(e) =>
                    setFormData({ ...formData, remember: e.target.checked })
                  }
                />
                <p>Remember me</p>
              </section>
            </div>

            <button
              type="submit"
              className="button"
              disabled={
                isLoading ||
                !formData.email.trim() ||
                !formData.username.trim() ||
                !formData.password.trim() ||
                !isStrongPassword(formData.password) //
              }
            >
              {isLoading ? "Registering..." : "Register"}
            </button>
            {/* Show success alert */}

            {modal.message && (
              <ModalAlert
                type={modal.type}
                message={modal.message}
                onClose={() => setModal({ type: "", message: "" })}
              />
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;

// This code defines a Register component that allows users to register with an email and password.
// It uses Firebase Authentication to create a new user and Firestore to store additional user details.
