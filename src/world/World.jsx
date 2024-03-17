import React from "react";
import worldimg from '../assets/expert.png'

const World = () => {
  return (
    <>
      <section id="world" className="pt-[90px] pb-[125px]">
        <div className="container mx-auto max-w-[1296px]">
          <div className=" grid grid-cols-12 gap-10">
            <div className=" col-span-6">
              <h4 className="text-[#FB312E] font-bold leading-[32px] text-[18px] mb-2">Successfully 14 Year's</h4>
              <h2 className="text-[#1F1E1E] text-[45px] font-bold leading-[54px] mb-[20px]">World-Renowned IT Expert Making Organization</h2>
              <p className="text-[#605F62] text-[16px] leading-[26px] text-justify mb-[30px]">
                Creative IT has been working with a vision to create IT experts
                for the past 14 years. In a fast pacing world, where every
                sector relies on technology, you need to develop IT skills to
                secure a better future. With the utmost dedication, we have been
                able to make more than 50,000 IT experts who are currently
                working in different sectors.
              </p>
              <div className=" flex gap-[14px]">
                <button className="bg-[#ea1207] w-[256px] h-[55px] rounded-[10px] text-[#FFFFFF] font-normal">Browse Course</button>
                <button className="bg-[#ea1207] w-[256px] h-[55px] rounded-[10px] text-[#FFFFFF] font-normal">Learn More</button>
              </div>
            </div>
            <div className=" col-span-6">
                <img src= {worldimg} alt="img" />
            </div>
          </div>
          <div className=" grid grid-cols-12 gap-5 mt-[46px]">
            <div className=" col-span-2">
                <div className="bg-[#FAF9FD] w-[196px] h-[131px] rounded-[15px] pt-[29px] ">
                    <h2 className="text-[#CF0000] text-[30px] font-bold leading-[45px] text-center">41612+</h2>
                    <h4 className="text-[#1F1E1E] text-[16px] leading-[26px] font-bold text-center">Successful Students</h4>
                </div>
            </div>
            <div className=" col-span-2">
                <div className="bg-[#FAF9FD] w-[196px] h-[131px] rounded-[15px] pt-[29px] ">
                    <h2 className="text-[#CF0000] text-[30px] font-bold leading-[45px] text-center">19597+</h2>
                    <h4 className="text-[#1F1E1E] text-[16px] leading-[26px] font-bold text-center">Expert Freelancers</h4>
                </div>
            </div>
            <div className=" col-span-2">
                <div className="bg-[#FAF9FD] w-[196px] h-[131px] rounded-[15px] pt-[29px] ">
                    <h2 className="text-[#CF0000] text-[30px] font-bold leading-[45px] text-center">13065+</h2>
                    <h4 className="text-[#1F1E1E] text-[16px] leading-[26px] font-bold text-center">Skilled Job Holders</h4>
                </div>
            </div>
            <div className=" col-span-2">
                <div className="bg-[#FAF9FD] w-[196px] h-[131px] rounded-[15px] pt-[29px] ">
                    <h2 className="text-[#CF0000] text-[30px] font-bold leading-[45px] text-center">391+</h2>
                    <h4 className="text-[#1F1E1E] text-[16px] leading-[26px] font-bold text-center">Industry Expert</h4>
                </div>
            </div>
            <div className=" col-span-2">
                <div className="bg-[#FAF9FD] w-[196px] h-[131px] rounded-[15px] pt-[29px] ">
                    <h2 className="text-[#CF0000] text-[30px] font-bold leading-[45px] text-center">59%</h2>
                    <h4 className="text-[#1F1E1E] text-[16px] leading-[26px] font-bold text-center">Success Ratio</h4>
                </div>
            </div>
            <div className=" col-span-2">
                <div className="bg-[#FAF9FD] w-[196px] h-[131px] rounded-[15px] pt-[29px] ">
                    <h2 className="text-[#CF0000] text-[30px] font-bold leading-[45px] text-center">457+</h2>
                    <h4 className="text-[#1F1E1E] text-[16px] leading-[26px] font-bold text-center">Companies</h4>
                </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default World;
