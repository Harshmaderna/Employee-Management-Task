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
  // useEffect(() => {
  //   if (AuthData) {
  //     const loggedInUser = localStorage.getItem("loggedinuser");
  //     if(loggedInUser) {
  //       setuser(loggedInUser.role)
  //     }
  //   }
  // }, [AuthData]);

  const handleLogin = (email, password) => {
    if (email == "admin@me.com" && password == "123") {
      setUser('admin');
      setLoggedInUserData("admin")
      localStorage.setItem("loggedInUser", JSON.stringify({role: 'admin'}));
    } else if ( AuthData) {
      const employee = AuthData.employees.find((e) => email == e.email && password == e.password)
      if(employee){
          setUser('employee');
          setLoggedInUserData(employee)
          localStorage.setItem("loggedInUser", JSON.stringify({role: 'employees'}));
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
