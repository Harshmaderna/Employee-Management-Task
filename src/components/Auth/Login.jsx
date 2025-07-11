import React, { useState } from "react";

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
  const Submithandler = (e) => {
    e.preventDefault()
    console.log(email)
    console.log(password)
   setEmail("")
   setPassword("")
  };
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="border-2 border-emerald-600 p-20 rounded-md">
        <form
          onSubmit={(e) => {
            Submithandler(e)
          }}
          className="flex flex-col text-white items-center justify-center"
        >
          <input  value={email}
          onChange={(e) => {
            setEmail(e.target.value)
          }}
            className="border-2 border-emerald-600 py-4  outline-none bg-transparent px-5 text-xl rounded-full placeholder:text-white"
            type="email"
            placeholder="enter your email"
          />
          <input value={password}
          onChange={(e) => {
            setPassword(e.target.value)
          }}
            className="border-2 border-emerald-600 py-4  outline-none bg-transparent px-5 text-xl rounded-full placeholder:text-white mt-4"
            type="password"
            placeholder="enter your password"
          />
          <button className=" bg-emerald-600 py-4  outline-none  px-5 text-xl rounded-full placeholder:text-white cursor-pointer mt-4">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
