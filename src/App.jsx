import { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import Admin from "./components/dashboard/Admin";
import Employee from "./components/dashboard/Employee";
import { getLocalStorage, setLocalStorage } from "./utils/LocalStorage";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const authData = useContext(AuthContext);
 
  // useEffect(() => {
  //   if(authData){
  //     const loggedInUser = localStorage.getItem("loggedInUser")

  //   }
  // },[])

  const handleLogin = (email, password) => {
    if (email == "admin@example.com" && password == "123") {
      setUser('admin');
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
      
    } else if (authData) {
      const employees = authData.employees.find((e) => email == e.email && e.password == password)
      if(employees){
        setUser('employees')
        setLoggedInUserData('employees')
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "employees" })
        );
      }
    } else {
      alert("invalid credential");
    }
  };

  // const data = useContext(AuthContext);
  // console.log(data);

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {/* {user == "admin" ? ( <Admin /> ) : "" || user == "employees" ? ( <Employee data={loggedInUserData}/>) : (
        "" )} */}
        {user == 'admin' ? <Admin /> : (user == 'employees' ? <Employee data={loggedInUserData}/> : null)}
    </>
  );
};

export default App;
