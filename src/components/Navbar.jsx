// Navbar.js
import React from "react";

const Navbar = () => {
  return (
    <div>
      <div className="flex justify-between">
        <h2 className="text-offwhite font-semibold font-ITC text-xl">
          XERO<span className="text-orng font-semibold font-ITC">TODO</span>
        </h2>
        <img src="/assets/Logout.png" alt="" className="w-5 h-5" />
      </div>
    </div>
  );
};

export default Navbar;
