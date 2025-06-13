import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../assets/css/login.css";
import eye from "../assets/images/eye.svg";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore"; // Import Firestore functions
import { db, auth } from "../firebaseConfig"; // Import db and auth from your Firebase config
import {
  setPersistence,
  browserLocalPersistence,
  browserSessionPersistence,
} from "firebase/auth";

import invisible from "../assets/images/invisible 1 copy.svg";
import {
  signInWithEmailAndPassword,
  // onAuthStateChanged,
  // fetchSignInMethodsForEmail,
  sendEmailVerification,
} from "firebase/auth";
// import { setPersistence, browserLocalPersistence, browserSessionPersistence } from "firebase/auth";
import AlertModal from "../components/AlertModal";

function Login() {
  const [modal, setModal] = useState({ type: "", message: "" });

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      // Check if user is new, then create Firestore doc if needed
      const userRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(userRef);
      if (!docSnap.exists()) {
        await setDoc(userRef, {
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
          photoURL: user.photoURL,
          createdAt: new Date().toISOString(),
        });
      }

      navigate("/home", { state: { showAlert: true } });
    } catch (error) {}
  };
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
  });
  const [loading, setLoading] = useState(false); // Define the loading state
  const navigate = useNavigate(); // Initialize useNavigate
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleResendVerification = async () => {
    if (auth.currentUser && !auth.currentUser.emailVerified) {
      try {
        await sendEmailVerification(auth.currentUser);
        setModal({
          type: "success",
          message: "Verification email resent! Check your inbox.",
        });
      } catch (error) {
        setModal({ type: "error", message: error.message });
      }
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    console.log("Form Data Submitted:", formData); // Log the form data to the console
    setLoading(true);

    // Reset the form fields

    try {
      const persistence = formData.remember
        ? browserLocalPersistence
        : browserSessionPersistence;

      await setPersistence(auth, persistence);

      // const persistence = formData.remember ? browserLocalPersistence : browserSessionPersistence;
      // await setPersistence(auth, persistence);

      const userCred = await signInWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );

      if (!userCred.user.emailVerified) {
        setModal({
          type: "error",
          message: "Please verify your email before logging in.",
        });
        return;
      }
      // Fetch username from Firestore
      const userRef = doc(db, "users", userCred.user.uid);
      const userSnap = await getDoc(userRef);
      if (userSnap.exists()) {
        const userData = userSnap.data();
        localStorage.setItem("username", userData.username); // Save to localStorage
      }

      setFormData({
        email: "",
        password: "",
        remember: false,
      });
      setModal({ type: "success", message: "Login successful!" });

      setTimeout(() => {
        navigate("/home", { state: { showAlert: true } });
      }, 3000);
    } catch (err) {
      setModal({
        type: "error",
        message: "Invalid email or password. Please try again.",
      });

      console.error("Authentication failed:", err.message);
    } finally {
      setLoading(false); // Hide the spinner
    }
  };
  return (
    <div>
      <div className={`ui-container ${loading ? "loading-overlay" : ""}`}>
        <div className="login">
          <div id="back-image">
            <div>
              <p className="paragraph">
                Lorem Ipsum is simply <br /> <span>Lorem Ipsum is simply </span>{" "}
              </p>
            </div>
          </div>
          <div className="form">
            <form action="" method="post" onSubmit={handleSubmit}>
              <p className="lorem">Welcome to lorem..!</p>
              <div className="link">
                <Link to="#" className="registar main-login">
                  Login
                </Link>
                <Link to="/register" className="registar  ">
                  Register
                </Link>
              </div>
              <p className="dummy">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              <label htmlFor="email">email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                value={formData.email}
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
                <Link to="/forgot"> Forgot Password?</Link>
              </div>
              <button type="button" onClick={handleGoogleSignIn}>
                Sign in with Google
              </button>
              <button type="submit" className="button">
                Login
              </button>
              {auth.currentUser && !auth.currentUser.emailVerified && (
                <button onClick={handleResendVerification}>
                  Resend Verification Email
                </button>
              )}
            </form>
          </div>
        </div>
      </div>

      {/* Loading Spinner */}
      {loading && (
        <div className="loading-spinner">
          <div className="spinner"></div>
        </div>
      )}

      {modal.message && (
        <AlertModal
          type={modal.type}
          message={modal.message}
          onClose={() => setModal({ type: "", message: "" })}
        />
      )}
    </div>
  );
}

export default Login;
