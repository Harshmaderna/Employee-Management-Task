import { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import Admin from "./components/dashboard/Admin";
import Employee from "./components/dashboard/Employee";
import { getLocalStorage, setLocalStorage } from "./utils/LocalStorage";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [user, setUser] = useState(null);

  const handleLogin = (email, password) => {
    if (email == "admin@example.com" && password == "123") {
      setUser("admin");
      console.log(user);
    } else if (email == "employee5@example.com" && password == "123") {
      setUser("employee");
    } else {
      alert("invalid credential");
    }
  };

  const data = useContext(AuthContext);
  console.log(data);  

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user == "admin" ? (
        <Admin />
      ) : "" || user == "employee" ? (
        <Employee />
      ) : (
        ""
      )}
    </>
  );
};

export default App;
