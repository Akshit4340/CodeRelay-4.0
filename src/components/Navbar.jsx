import React from "react";

const Navbar = () => {
  return (
    <nav
      className="sticky left-0 top-0 bg-blue-900 w-full flex items-center justify-between backdrop-filter bg-opacity-90
 backdrop-blur-sm p-4 text-white"
    >
      {/* Navbar content goes here */}

      <div className="">Logo</div>
      <div className="flex items-center gap-4">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
