import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../firebase";
import "./Login.css";
import fb from "../Imgs/fb.png";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      // Handle specific errors
      if (error.code === "auth/invalid-email") {
        setError("Invalid email address");
      } else if (error.code === "auth/user-not-found") {
        setError("User not found. Please check your email or sign up.");
      } else if (error.code === "auth/wrong-password") {
        setError("Incorrect password. Please try again.");
      } else {
        setError("Login failed. Please check your credentials.");
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
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
          required
        />
        <button onClick={handleLogin}>Log in</button>

        {/* Display error message if there's an error */}
        {error && <p className="error-message">{error}</p>}

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
    </>
  );
}

export default Login;
