import React from "react";
import seminarimg from '../assets/saminar.png'
import joindot from '../assets/seminar-dot.png'

const Saminars = () => {
  return (
    <>
      <section id="seminar" className="bg-[#FDF2F2] pt-[68px] pb-[68px]">
        <div className="container mx-auto max-w-[1296px]">
          <div className="grid grid-cols-12 items-center">
            <div className=" col-span-6">
              <div className="text-areya relative">
                <h2 className="text-[45px] font-bold leading-[54px] text-[#1F1E1E] mb-[18px]">
                  Join Our Free Seminars
                </h2>
                <p className="text-[#605F62] leading-[26px] text-[16px] mb-[18px]">
                  Need guidelines to choose a suitable course? Join our free
                  seminars to consult with our experts, they will guide you to
                  pick the course that matches your interest and discuss the
                  career prospects.
                </p>
                <div className="w-[600px] h-[97px] bg-[#ff7d312c] rounded-[23px] pt-[16px] pl-[16px] mt-[18px] mb-[31px]">
                  <h3 className="text-[27px] font-bold leading-[32px] text-[#000000] relative">
                    09
                  </h3>
                  <h4 className="text-[#FF7E31] font-normal text-[20px] leading-[32px]">
                    Mar , 24
                  </h4>
                  <div className="w-[492px] h-[90px] bg-white rounded-[21px] absolute top-[171px] left-[108px]">
                    <div className="flex justify-between items-center">
                      <div className="pt-[15px] pl-[8px]">
                        <h2 className="text-[#1F1E1E] text-[18px] font-bold leading-[32px]">
                          Networking Technology
                        </h2>
                        <h4 className="text-[#605F62] leading-[29px] font-bold">
                          Online , Time: Online 08 : 00 PM
                        </h4>
                      </div>
                      <div className="pr-[8px] pt-[20px]">
                        <button className="w-[80px] h-[34px] border-[1px] border-[#CF0000] rounded-[10px] text-[#CF0000]">
                          Join
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <button className="text-[14px] font-semibold text-[#ffffff] w-[191px] h-[44px] bg-[#e31106] rounded-[10px]">Free Seminar Schedule</button>
              </div>
            </div>
            <div className=" col-span-6">
                <div className=" relative">
                <img src= {seminarimg} alt="img" />
                <img className=" absolute right-0 bottom-0" src= {joindot} alt="img" />
                </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Saminars;
