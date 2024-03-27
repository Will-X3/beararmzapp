import React, { createContext, useState, useContext } from "react";
import { useDispatch } from "react-redux";
import { setUser, logout } from "../slices/authSlice";
import mongoose from "mongoose";

// Create the context
export const AuthContext = createContext();

// Custom hook to use the auth context
export const useAuth = () => useContext(AuthContext);

// Auth provider component
export const AuthProvider = ({ children }) => {
  const [user, setUserState] = useState(null);
  const dispatch = useDispatch();

  const login = (userData) => {
    console.log("Received userData:", userData);
    console.log("Type of userId:", typeof userData.userId);
    // Convert userId to ObjectId format
    userData.userId = mongoose.Types.ObjectId(userData.userId);
    setUserState(userData);
    dispatch(setUser(userData));
  };

  // Logout function
  const logoutUser = () => {
    setUserState(null);
    dispatch(logout());
  };

  // Value object for the context provider
  const value = {
    user,
    login,
    logout: logoutUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
