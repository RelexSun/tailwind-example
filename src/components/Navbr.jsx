import React from "react";
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbr = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
      <h1 className="w-full text-3xl font-bold text-[#00df9a]">SUN</h1>
      <ul className="hidden md:flex">
        <li className="p-4">Home</li>
        <li className="p-4">Skill</li>
        <li className="p-4">Education</li>
        <li className="p-4">About</li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {!nav ? (
          <AiOutlineClose className="item-center" />
        ) : (
          <AiOutlineMenu size={20} />
        )}
      </div>
      <div
        className={
          !nav
            ? "fixed left-0 top-0 w-[60%] border-r border-r-gray-900  bg-[#000300] ease-in-out duration-500"
            : "fixed left-[-100%] top-0 ease-in-out duration-500"
        }
      >
        <div className="md:hidden">
          <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4 py-3.5 ">
            SUN
          </h1>
          <ul className="uppercase p-4">
            <li className="p-4 border-b border-gray-600">Home</li>
            <li className="p-4 border-b border-gray-600">Skill</li>
            <li className="p-4 border-b border-gray-600">Education</li>
            <li className="p-4">About</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbr;
