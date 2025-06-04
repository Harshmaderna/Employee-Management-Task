import { useState } from "react";

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div className="border-1 border-emerald-600 p-10 rounded-xl">
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="flex flex-col items-center justify-center gap-2px"
        >
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
            className="border-2 border-emerald-600 py-3 px-5 text-xl rounded-full outline-none bg-transparent placeholder: text-white"
            type="email"
            placeholder="enter your email"
          />
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
            className="mt-3 border-2 border-emerald-600 py-3 px-5 text-xl rounded-full outline-none bg-transparent placeholder: text-white"
            type="password"
            placeholder="enter your password"
          />
          <button className="border-2 border-emerald-600 bg-emerald-600 py-3 px-5 text-xl text-white mt-5 rounded-full outline-none cursor-pointer">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
