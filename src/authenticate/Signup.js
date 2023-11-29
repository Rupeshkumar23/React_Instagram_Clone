// Signup.js
import React, { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { auth, db } from "../firebase";
import { useDispatch } from "react-redux";
import { loginUser, setLoading } from "../features/userSlice";
import GetappSignIn from "./GetappSignIn";
import { setAvatarURL } from "../features/userSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { storage } from "../firebase";
import { doc, setDoc } from "firebase/firestore";
import './Signup.css'
import { useNavigate } from "react-router-dom";

function Signup() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [avatar, setAvatar] = useState(null);
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
        const storageRef = ref(storage, `avatars/${email}_${avatar.name + Date.now()}`);
        await uploadBytes(storageRef, avatar);
        avatarURL = await getDownloadURL(storageRef);
      }

      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      await updateProfile(user, {
        displayName: username,
        photoURL: avatarURL,
      });

      // Store user data in firestore database
      await setDoc(doc(db, 'users', user.uid), {
        uid: user.uid,
        displayName: username,
        email,
        photoURL: avatarURL,
      });

      setLoading(false);
      toast.success("User signed up successfully");

      dispatch(loginUser({ uid: user.uid, email, username, avatarURL }));
      dispatch(setAvatarURL(avatarURL));
      navigate("/authenticate"); // Use the navigate function


    } catch (err) {
      setLoading(false);
      if (err.code === "auth/invalid-email") {
        toast.error("Invalid email address. Please enter a valid email.");
      } else if (err.code === "auth/weak-password") {
        toast.error("Weak password. Please use a stronger password.");
      } else {
        toast.error("Signup failed. Please check your information and try again.");
      }
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
