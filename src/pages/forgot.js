// src/pages/ForgotPassword.js
import { useState } from "react";
import { auth } from "../firebaseConfig";
import { sendPasswordResetEmail } from "firebase/auth";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  const handleReset = async (e) => {
    e.preventDefault();
    try {
      await sendPasswordResetEmail(auth, email);
      setMsg("Password reset link sent to your email.");
      setEmail(""); // Clear the email input after successful submission
    } catch (error) {
      setMsg(error.message);
      setEmail(""); // Optionally clear the input after error as well
    }
  };

  return (
    <form onSubmit={handleReset}>
      <input
        type="email"
        placeholder="Enter your email"
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button type="submit">Reset Password</button>
      <p>{msg}</p>
    </form>
  );
}
