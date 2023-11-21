// userSlice.js
import { createSlice } from "@reduxjs/toolkit";

const storedAvatarURL = localStorage.getItem("avatarURL");

const initialState = {
  user: null,
  avatarURL: storedAvatarURL || null, // Use the stored avatarURL if available
  isLoading: true,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      state.user = action.payload;
    },
    logoutUser: (state) => {
      state.user = null;
      state.avatarURL = null; // Clear avatarURL on logout
      localStorage.removeItem("avatarURL"); // Remove from local storage on logout
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setAvatarURL: (state, action) => {
      state.avatarURL = action.payload;
      // Store in local storage
      localStorage.setItem("avatarURL", action.payload);
    },
  },
});

export const { loginUser, logoutUser, setLoading, setAvatarURL } = userSlice.actions;
