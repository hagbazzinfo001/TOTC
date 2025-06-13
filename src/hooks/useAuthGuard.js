import { useEffect } from "react";
import { auth } from "../firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export function useAuthGuard() {
  const navigate = useNavigate();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate("/login");
      } else if (!user.emailVerified) {
        alert("Please verify your email before accessing this page.");
        navigate("/login");
      }
    });

    return () => unsub();
  }, [navigate]);
}
