import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../firebase";
import fb from "../Imgs/fb.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fieldErrors, setFieldErrors] = useState({
    email: false,
    password: false,
  });

  const validateInputs = () => {
    const errors = {
      email: email.trim() === "",
      password: password.trim() === "",
    };

    setFieldErrors(errors);

    return Object.values(errors).some((value) => value);
  };

  const handleLogin = async () => {
    if (validateInputs()) {
      toast.error("Please fill in all required fields.");
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("Login successful!");
    } catch (error) {
      // Handle specific errors
      if (error.code === "auth/invalid-email") {
        toast.error("Invalid email address");
      } else if (error.code === "auth/user-not-found") {
        toast.error("User not found. Please check your email or sign up.");
      } else if (error.code === "auth/wrong-password") {
        toast.error("Incorrect password. Please try again.");
      } else {
        toast.error("Login failed. Please check your credentials.");
      }
    }
  };

  return (
    <>
      <div className="login">
        <img
          src="https://www.pngkey.com/png/full/828-8286178_mackeys-work-needs-no-elaborate-presentation-or-distracting.png"
          alt="Instagram"
        />
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email"
          required
          className={fieldErrors.email ? "error" : ""}
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
          required
          className={fieldErrors.password ? "error" : ""}
        />
        <button onClick={handleLogin}>Log in</button>

        <div>
          <div className="login_ordiv">
            <div className="login_dividor"></div>
            <div className="login_or">OR</div>
            <div className="login_dividor"></div>
          </div>

          <div className="login_fb">
            <img src={fb} width="15px" alt="meta" style={{ marginRight: "5px" }} />
            Log in with Facebook
          </div>
          <div className="login_forgot"> Forgot password?</div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default Login;
