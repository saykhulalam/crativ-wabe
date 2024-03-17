import React from "react";
import { IoLocation } from "react-icons/io5";
import { BiSolidPhoneCall } from "react-icons/bi";
import { IoMail } from "react-icons/io5";

const Bottom = () => {
  return (
    <>
      <section id="bottom" className="bg-[#403532] pt-[83px] pb-[83px]">
        <div className="container mx-auto max-w-[1296px]">
          <h2 className="text-[#ffffff] text-[40px] leading-[54px] font-bold text-center mb-1">
            Admission Is Going on
          </h2>
          <h5 className="text-[#ffffff] font-normal text-[19px] leading-[26px] text-center">
            Enroll to any online or offline course now, take one step <br />{" "}
            ahead towards a competent career
          </h5>
          <div className="flex gap-[20px] ml-[460px] mt-[39px] mb-[96px]">
            <button className="w-[177px] h-[56px] border-[1px] border-[#ffffff] rounded-[6px] text-[17px] text-[#ffffff] font-semibold">
              Join Free Seminar
            </button>
            <button className="w-[177px] h-[56px] border-[1px] border-[#ffffff] rounded-[6px] text-[17px] text-[#ffffff] font-semibold">
              Browse Course
            </button>
          </div>
          <div className=" grid grid-cols-12">
            <div className=" col-span-3">
              <div className="mb-[26px]">
                <h2 className="text-[21px] text-[#ffffff] font-bold leading-[33px] mb-[22px]">
                  Contact
                </h2>
                <div className="flex gap-[12px]">
                  <div className=" w-[31px] h-[31px] bg-[#695C49] rounded-full flex items-center justify-center">
                    <IoLocation className=" text-[#ffffff] w-10" />
                  </div>
                  <h5 className="w-[191px] text-[#ffffff] font-normal text-[16px]">
                    {" "}
                    Head Office: Momtaz Plaza (4th Floor) House # 07 , Road # 04
                    Dhanmondi, Dhaka- 1205
                  </h5>
                </div>
                <div className="flex gap-[12px] mt-[26px]">
                  <div className=" w-[31px] h-[31px] bg-[#695C49] rounded-full flex items-center justify-center">
                    <BiSolidPhoneCall className=" text-[#ffffff] w-10" />
                  </div>
                  <ul>
                    <li className=" text-[#ffffff] leading-[24px] font-normal text-[16px]">
                      +880 1777308777
                    </li>
                    <li className=" text-[#ffffff] leading-[24px] font-normal text-[16px]">
                      +880 1624666000
                    </li>
                    <li className=" text-[#ffffff] leading-[24px] font-normal text-[16px]">
                      +880 1624888444
                    </li>
                    <li className=" text-[#ffffff] leading-[24px] font-normal text-[16px]">
                      +880 1966177177
                    </li>
                    <li className=" text-[#ffffff] leading-[24px] font-normal text-[16px]">
                      +880 1625555444
                    </li>
                    <li className=" text-[#ffffff] leading-[24px] font-normal text-[16px]">
                      +880 1990779900
                    </li>
                  </ul>
                </div>
                <div className="flex items-center gap-[12px] mt-[34px]">
                  <div className=" w-[31px] h-[31px] bg-[#695C49] rounded-full flex items-center justify-center">
                    <IoMail className=" text-[#ffffff] w-10" />
                  </div>
                  <h3 className="text-[#ffffff] font-normal text-[14px]">
                    info@creativeitinstitute.com
                  </h3>
                </div>
              </div>
            </div>
            <div className=" col-span-3">
              <h2 className="text-[21px] text-[#ffffff] font-bold leading-[33px] mb-[22px]">
                Quick Links
              </h2>
              <ul>
                <li  className=" text-[#ffffff] leading-[24px] font-normal text-[16px] mb-[30px]">Free Seminar Schedule</li>
                <li className=" text-[#ffffff] leading-[24px] font-normal text-[16px] mb-[30px]">Mentors</li>
                <li className=" text-[#ffffff] leading-[24px] font-normal text-[16px] mb-[30px]">Success Story</li>
                <li className=" text-[#ffffff] leading-[24px] font-normal text-[16px] mb-[30px]">Our Gallery</li>
                <li className=" text-[#ffffff] leading-[24px] font-normal text-[16px] mb-[30px]">FAQ</li>
                <li className=" text-[#ffffff] leading-[24px] font-normal text-[16px] mb-[30px]">Blog</li>
                <li className=" text-[#ffffff] leading-[24px] font-normal text-[16px] mb-[30px]">Privacy Policy</li>
              </ul>
            </div>
            <div className=" col-span-3">
              <h2 className="text-[21px] text-[#ffffff] font-bold leading-[33px] mb-[22px]">
              Popular Courses
              </h2>
              <ul>
                <li  className=" text-[#ffffff] leading-[24px] font-normal text-[16px] mb-[30px]">Web Development</li>
                <li className=" text-[#ffffff] leading-[24px] font-normal text-[16px] mb-[30px]">Professional Graphic Design</li>
                <li className=" text-[#ffffff] leading-[24px] font-normal text-[16px] mb-[30px]">Mern Stack Development</li>
                <li className=" text-[#ffffff] leading-[24px] font-normal text-[16px] mb-[30px]">Motion Graphics</li>
                <li className=" text-[#ffffff] leading-[24px] font-normal text-[16px] mb-[30px]">Professional 3D Animation</li>
                <li className=" text-[#ffffff] leading-[24px] font-normal text-[16px] mb-[30px]">Content Writing</li>
                <li className=" text-[#ffffff] leading-[24px] font-normal text-[16px] mb-[30px]">Content Writing</li>
              </ul>
            </div>
            <div className=" col-span-3">
              <h2 className="text-[21px] text-[#ffffff] font-bold leading-[33px] mb-[22px]">
              Others
              </h2>
              <ul>
                <li  className=" text-[#ffffff] leading-[24px] font-normal text-[16px] mb-[30px]">About Us</li>
                <li className=" text-[#ffffff] leading-[24px] font-normal text-[16px] mb-[30px]">Our Facility</li>
                <li className=" text-[#ffffff] leading-[24px] font-normal text-[16px] mb-[30px]">Our Achievement</li>
                <li className=" text-[#ffffff] leading-[24px] font-normal text-[16px] mb-[30px]">Career Placement</li>
                <li className=" text-[#ffffff] leading-[24px] font-normal text-[16px] mb-[30px]">Students Feedback</li>
                <li className=" text-[#ffffff] leading-[24px] font-normal text-[16px] mb-[30px]">Contact</li>
                <li className=" text-[#ffffff] leading-[24px] font-normal text-[16px] mb-[30px]">Privacy Policy</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Bottom;
