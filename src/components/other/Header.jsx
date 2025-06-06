import React from "react";

const Header = () => {
  return (
    <div className="flex items-end justify-between">
      <h1 className="text-2xl text-white">
        Hello <br /> <span className="text-3xl font-semibold text-white">Harsh 👋</span> 
      </h1>
      <button className="bg-red-500 text-lg font-medium text-white px-3 py-2 rounded-sm cursor-pointer">Log Out</button>
    </div>
  );
};

export default Header;
