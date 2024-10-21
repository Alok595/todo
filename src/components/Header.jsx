import React from "react";
import { BsJournalArrowDown } from "react-icons/bs";
const Header = () => {
  return (
    <header className="w-full h-[100%] flex border-b-4 border-white justify-around items-center">
     
      <div className="">
        <div className="logo w-full h-[100%] flex items-center pl-6 ">
          <span className="text-5xl text-white  ">
            <BsJournalArrowDown />
          </span>
          <div className="">
            <h1 className="text-white font-bold   ">YADi</h1>
          </div>
        </div>
      </div>

      <div className=" ">
        <button className="bg-white px-3 py-2 rounded-xl font-bold ">SIGN-IN</button>
      </div>
    </header>
  );
};

export default Header;
