// userSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  avatarURL: null, // Add avatarURL in the initial state
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
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setAvatarURL: (state, action) => {
      state.avatarURL = action.payload;
    },
  },
});

export const { loginUser, logoutUser, setLoading, setAvatarURL } = userSlice.actions;
