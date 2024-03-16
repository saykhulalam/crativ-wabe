import React from "react";
import logo from "../assets/logo.png";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const Navigation = () => {
  return (
    <>
      <nav className="h-[78px] shadow-lg  w-full fixed bg-[#ffffff] z-50 ">
        <div className="container mx-auto max-w-[1296px] flex justify-between">
          <div className="">
            <img className="w-full" src={logo} alt="logo" />
          </div>
          <div>
            <ul className="pl-[300px] flex items-center gap-[39px] mt-7">
              <li className=" text-[18px] leading-[14px] text-[#1F1E1E] font-semibold">
                Home
              </li>
              <li className=" text-[18px] leading-[14px] text-[#1F1E1E] font-semibold ">
                About us
              </li>
              <li className=" text-[18px] leading-[14px] text-[#1F1E1E] font-semibold ">
                Success story
              </li>
              <li className=" text-[18px] leading-[14px] text-[#1F1E1E]  font-semibold">
                Freelancing
              </li>
              <li className=" text-[18px] leading-[14px] text-[#1F1E1E font-semibold">
                Contact
              </li>
            </ul>
          </div>
          <div className="">
            <button className="w-[222px] h-[53px] bg-[#d8150b] text-[#ffffff] font-semibold text-[18px] mt-3 rounded-[10px] flex items-center justify-center gap-[7px]">
              Browse Course
              <MdOutlineKeyboardArrowDown />
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;

