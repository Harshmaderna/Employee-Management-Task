import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import Employeedashboard from "./components/dashboard/Employeedashboard";
import Admindashboard from "./components/dashboard/Admindashboard";
import { getLocalStorage, setLocalsStorage } from "./utils/LocalStorage";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const AuthData = useContext(AuthContext);
  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser")
    if(loggedInUser){
     const userData = JSON.parse(loggedInUser)
     setUser(userData.role)
     setLoggedInUserData(userData.data)
    }
  },[])
  const handleLogin = (email, password) => {
    const admin = {
      email: "admin@me.com",
      password: "123"
    }
    if (email == "admin@me.com" && password == "123") {
      setUser('admin');
      setLoggedInUserData(admin)
      localStorage.setItem("loggedInUser", JSON.stringify({role: 'admin', data: admin}));
    } else if ( AuthData) {
      const employee = AuthData.employees.find((e) => email == e.email && password == e.password)
      if(employee){
          setUser('employee');
          setLoggedInUserData(employee)
          localStorage.setItem("loggedInUser", JSON.stringify({role: 'employee', data:employee}));
      }
    } else {
      alert("invalid credentials");
    }
  };

  return (
    <>
      <div>
        {!user ? <Login handleLogin={handleLogin} /> : ''}
      {user == "admin" ? <Admindashboard /> : (user == 'employee' ? <Employeedashboard data={loggedInUserData}/> : null)}
      </div>
    </>
  );
};

export default App;
