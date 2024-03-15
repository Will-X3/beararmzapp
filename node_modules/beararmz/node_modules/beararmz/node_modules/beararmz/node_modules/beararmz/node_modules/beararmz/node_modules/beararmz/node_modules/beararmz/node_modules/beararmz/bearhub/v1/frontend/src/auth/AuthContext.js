import React, { createContext, useState, useContext } from "react";
import mongoose from "mongoose";

// Create the context
export const AuthContext = createContext();

// Custom hook to use the auth context
export const useAuth = () => useContext(AuthContext);

// Auth provider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (userData) => {
    console.log("Received userData:", userData);
    console.log("Type of userId:", typeof userData.userId);
    // Convert userId to ObjectId format
    userData.userId = mongoose.Types.ObjectId(userData.userId);
    setUser(userData);
  };

  // Logout function
  const logout = () => {
    setUser(null);
  };

  // Value object for the context provider
  const value = {
    user,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
