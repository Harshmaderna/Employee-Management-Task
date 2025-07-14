import React, { createContext, useEffect, useState } from "react";
import { getLocalStorage, setLocalsStorage } from "../utils/LocalStorage";

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    setLocalsStorage()
    const { employees, admin } = getLocalStorage();
    setUserData({ employees, admin });
  }, []);
  return (
    <div>
      <AuthContext.Provider value={userData}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
