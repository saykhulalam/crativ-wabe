import React from "react";
import { PiShieldCheckFill } from "react-icons/pi";
import { BiBookReader } from "react-icons/bi";
import banner from "../assets/banner.png";
import iso from "../assets/iso.png";
import slideimg1 from "../assets/slideimg1.png";
import slideimg2 from "../assets/slideimg2.png";
import slideimg3 from "../assets/slideimg3.png";
import slideimg4 from "../assets/slideimg4.png";
import slideimg5 from "../assets/slideimg5.png";

const Banner = () => {
  return (
    <>
      <section className=" bg-[#ff1e1e17] pt-[150px] pb-[200px] relative" id="banner">
        <div className="container mx-auto max-w-[1296px]">
          <div className=" grid grid-cols-2">
            <div className="">
              <h3 className="flex gap-[10px] text-[#212529] text-[17px] leading-[20px] font-bold mb-[19px]">
                <PiShieldCheckFill className="text-[20px] text-[#FF1E1E]" />
                Unleash Your Potential
              </h3>
              <h1 className="text-[43px] font-bold leading-[51px] text-[#212529] mb-[18px]">
                Become an IT Pro & <br /> Rule the
                <span className="text-[43px] leading-[51px] font-bold text-[#FF1E1E]">
                  Digital World
                </span>
              </h1>
              <p className="text-[16px] leading-[26px] text-[#212529] text-justify mb-[22px]">
                With a vision to turn manpower into assets, Creative IT <br />
                Institute is ready to enhance your learning experience with
                <br />
                skilled mentors and updated curriculum. Pick your desired <br />
                course from more than 30 trendy options.
              </p>
              <div className="flex gap-[22px]">
                <button className=" group w-[189px] h-[50px] bg-[#d11006e3] rounded-[10px] text-[#ffffff] text-[16px] font-normal leading-[24px] flex gap-[9px] items-center justify-center hover:bg-transparent hover:border-solid border-[1px] hover:border-[#000000] hover:text-[#000000] ">
                  <BiBookReader className=" text-[22px] text-[#ffffff] group-hover:text-[#000000]" />
                  Browse Course
                </button>
                <button className=" group w-[189px] h-[50px] bg-[#d11006e3] rounded-[10px] text-[#ffffff] text-[16px] font-normal leading-[24px] flex gap-[9px] items-center justify-center hover:bg-transparent hover:border-solid border-[1px] hover:border-[#000000] hover:text-[#000000] ">
                  <BiBookReader className=" group-hover:text-[#000000] text-[22px] text-[#ffffff]" />
                  Join free seminar
                </button>
              </div>
              <div className=" flex items-center gap-[10px] mt-[38px]">
                <img src={iso} alt="img" />
                <h5 className="text-[#342B27] text-[16x] leading-[26px]">
                  One of the best ISO certified IT <br /> Training Institutes in
                  Bangladesh
                </h5>
              </div>
            </div>
            <div className="">
              <img src={banner} alt="banner-img" />
            </div>
          </div>
          <div className=" grid grid-cols-10 absolute bottom-[-100px] gap-20">
          <div className="w-[192px] h-[157px] rounded-[20px] shadow-xl bg-white pt-[40px] pl-[46px] pb-[23px] pr-[46px] col-span-2">
            <img className="mb-[16px] ml-8" src={slideimg1} alt="img" />
            <h2 className=" text-[18px] leading-[23px] font-bold text-[#1F1E1E]">
              Graphic & <br /> Multimedia
            </h2>
          </div>
          <div className="w-[192px] h-[157px] rounded-[20px] shadow-xl bg-white pt-[40px] pl-[46px] pb-[23px] pr-[46px] col-span-2">
            <img className="mb-[16px] ml-8" src={slideimg2} alt="img" />
            <h2 className=" text-[18px] leading-[23px] font-bold text-[#1F1E1E] ">
              Graphic & <br /> Multimedia
            </h2>
          </div>
          <div className="w-[192px] h-[157px] rounded-[20px] shadow-xl bg-white pt-[40px] pl-[46px] pb-[23px] pr-[46px] col-span-2">
            <img className="mb-[16px] ml-8" src={slideimg3} alt="img" />
            <h2 className=" text-[18px] leading-[23px] font-bold text-[#1F1E1E]">
              Graphic & <br /> Multimedia
            </h2>
          </div>
          <div className="w-[192px] h-[157px] rounded-[20px] shadow-xl bg-white pt-[40px] pl-[46px] pb-[23px] pr-[46px] col-span-2">
            <img className="mb-[16px] ml-8" src={slideimg4} alt="img" />
            <h2 className=" text-[18px] leading-[23px] font-bold text-[#1F1E1E]">
              Graphic & <br /> Multimedia
            </h2>
          </div>
          <div className="w-[192px] h-[157px] rounded-[20px] shadow-xl bg-white pt-[40px] pl-[46px] pb-[23px] pr-[46px] col-span-2">
            <img className="mb-[16px] ml-8" src={slideimg5} alt="img" />
            <h2 className=" text-[18px] leading-[23px] font-bold text-[#1F1E1E]">
              Graphic & <br /> Multimedia
            </h2>
          </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
