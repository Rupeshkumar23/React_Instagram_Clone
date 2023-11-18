// Signup.js
import React, { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import {auth} from "../firebase";
import { useDispatch } from "react-redux";
import { loginUser } from "../features/userSlice";
import { setAvatarURL } from "../features/userSlice"; // Add this import
import GetappSignIn from "./GetappSignIn";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { storage } from "../firebase";
import './Signup.css'

function Signup() {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [avatar, setAvatar] = useState(null);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");
  const [fieldErrors, setFieldErrors] = useState({
    email: false,
    username: false,
    password: false,
  });

  const validateInputs = () => {
    const errors = {
      email: email.trim() === "",
      username: username.trim() === "",
      password: password.trim() === "",
    };

    setFieldErrors(errors);

    return Object.values(errors).some((value) => value);
  };

  const handleSignUp = async (event) => {
    event.preventDefault();

    if (validateInputs()) {
      toast.error("Please fill in all required fields.");
      return;
    }

    try {
      let avatarURL = "";
      if (avatar) {
        const storageRef = ref(storage, `avatars/${email}_${avatar.name}`);
        await uploadBytes(storageRef, avatar);
        avatarURL = await getDownloadURL(storageRef);
      }

      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      await updateProfile(user, {
        displayName: username,
        photoURL: avatarURL,
      });

      dispatch(loginUser({ uid: user.uid, email, username, avatarURL }));
      dispatch(setAvatarURL(avatarURL));

      setError(null);
      setSuccessMessage("User signed up successfully");
      toast.success(successMessage);
    } catch (err) {
      if (err.code === "auth/invalid-email") {
        setError("Invalid email address. Please enter a valid email.");
      } else if (err.code === "auth/weak-password") {
        setError("Weak password. Please use a stronger password.");
      } else {
        setError("Signup failed. Please check your information and try again.");
      }
      toast.error(error || "An error occurred");
    }
  };

  return (
    <>
      <div className="signup">
        <img
          src="https://www.pngkey.com/png/full/828-8286178_mackeys-work-needs-no-elaborate-presentation-or-distracting.png"
          alt=""
        />
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email"
          value={email}
          required
          className={fieldErrors.email ? "error" : ""}
        />
        <input
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          placeholder="Username"
          value={username}
          required
          className={fieldErrors.username ? "error" : ""}
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
          value={password}
          required
          className={fieldErrors.password ? "error" : ""}
        />
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setAvatar(e.target.files[0])}
        />
        <button onClick={handleSignUp}>Sign up</button>
        <ToastContainer />
      </div>
      <GetappSignIn />
    </>
  );
}

export default Signup;
