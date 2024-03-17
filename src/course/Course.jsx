import React from "react";
import popularimg1 from "../assets/graphic.png";
import popularimg2 from "../assets/motion.png";
import popularimg3 from "../assets/uxui.png";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import wab1 from "../assets/wab1.png";
import wab2 from "../assets/wab2.png";
import wab3 from "../assets/wab3.png";
import digital1 from "../assets/digital1.png";
import digital2 from "../assets/digital2.png";
import digital3 from "../assets/digital3.png";

const Course = () => {
  return (
    <>
      <section id="allcourse" className="pb-10">
        <div className="container mx-auto max-w-[1296px]">
          <div className="grapic">
            <h4 className=" text-[32px] font-bold leading-[38px] text-[#1F1E1E] mb-[26px] ">
              Graphic & Multimedia
            </h4>
            <div className=" grid grid-cols-12">
              <div className=" w-[382px] h-[397px] lg:col-span-4 md:col-span-12 shadow-lg rounded-[25px]">
                <img src={popularimg1} className="rounded-t-[25px]" alt="img" />
                <div className="px-[18px]">
                  <h5 className="text-[#DF6812] font-bold leading-[23px] text-[14px] mt-[18px] mb-1">
                    All Course
                  </h5>
                  <h3 className="text-[20px] font-bold leading-[32px] text-[#1F1E1E] mb-2">
                    Professional Graphic Design
                  </h3>
                  <div className="flex justify-between">
                    <div className="flex gap-[3px]">
                      <FaStar className="text-[15px] text-[#FFAE4F] " />
                      <FaStar className="text-[15px] text-[#FFAE4F] " />
                      <FaStar className="text-[15px] text-[#FFAE4F] " />
                      <FaStar className="text-[15px] text-[#FFAE4F] " />
                      <FaStarHalfAlt className="text-[15px] text-[#FFAE4F] " />
                      <h4 className="text-[14px] font-normal text-[#787A82] leading-[17px]">
                        {" "}
                        14,400 Review
                      </h4>
                    </div>
                    <h5 className="text-[14px] font-normal text-[#787A82] leading-[17px]">
                      18,000 Student
                    </h5>
                  </div>
                  <div className="flex justify-between mt-[20px]">
                    <h3 className="text-[#434242] text-[16px] leading-[30px] font-bold">
                      Course Fee 50,000 BDT
                    </h3>
                    <button className="w-[134px] h-[38px] border-[1px] border-[#FF7E31] rounded-[8px] text-[14px] text-[#8C0000] font-bold">
                      Click for discount
                    </button>
                  </div>
                </div>
              </div>
              <div className=" w-[382px] h-[397px] lg:col-span-4 md:col-span-12 shadow-lg rounded-[25px]">
                <img src={popularimg2} className="rounded-t-[25px]" alt="img" />
                <div className="px-[18px]">
                  <h5 className="text-[#DF6812] font-bold leading-[23px] text-[14px] mt-[18px] mb-1">
                    All Course
                  </h5>
                  <h3 className="text-[20px] font-bold leading-[32px] text-[#1F1E1E] mb-2">
                    Motion Graphics
                  </h3>
                  <div className="flex justify-between">
                    <div className="flex gap-[3px]">
                      <FaStar className="text-[15px] text-[#FFAE4F] " />
                      <FaStar className="text-[15px] text-[#FFAE4F] " />
                      <FaStar className="text-[15px] text-[#FFAE4F] " />
                      <FaStar className="text-[15px] text-[#FFAE4F] " />
                      <FaStarHalfAlt className="text-[15px] text-[#FFAE4F] " />
                      <h4 className="text-[14px] font-normal text-[#787A82] leading-[17px]">
                        {" "}
                        4,160 Review
                      </h4>
                    </div>
                    <h5 className="text-[14px] font-normal text-[#787A82] leading-[17px]">
                      5,200 Student
                    </h5>
                  </div>
                  <div className="flex justify-between mt-[20px]">
                    <h3 className="text-[#434242] text-[16px] leading-[30px] font-bold">
                      Course Fee 50,000 BDT
                    </h3>
                    <button className="w-[134px] h-[38px] border-[1px] border-[#FF7E31] rounded-[8px] text-[14px] text-[#8C0000] font-bold">
                      Click for discount
                    </button>
                  </div>
                </div>
              </div>
              <div className=" w-[382px] h-[397px] lg:col-span-4 md:col-span-12 shadow-lg rounded-[25px]">
                <img src={popularimg3} className="rounded-t-[25px]" alt="img" />
                <div className="px-[18px]">
                  <h5 className="text-[#DF6812] font-bold leading-[23px] text-[14px] mt-[18px] mb-1">
                    All Course
                  </h5>
                  <h3 className="text-[20px] font-bold leading-[32px] text-[#1F1E1E] mb-2">
                    UX/UI Design
                  </h3>
                  <div className="flex justify-between">
                    <div className="flex gap-[3px]">
                      <FaStar className="text-[15px] text-[#FFAE4F] " />
                      <FaStar className="text-[15px] text-[#FFAE4F] " />
                      <FaStar className="text-[15px] text-[#FFAE4F] " />
                      <FaStar className="text-[15px] text-[#FFAE4F] " />
                      <FaStarHalfAlt className="text-[15px] text-[#FFAE4F] " />
                      <h4 className="text-[14px] font-normal text-[#787A82] leading-[17px]">
                        {" "}
                        2,800 Review
                      </h4>
                    </div>
                    <h5 className="text-[14px] font-normal text-[#787A82] leading-[17px]">
                      3,500 Student
                    </h5>
                  </div>
                  <div className="flex justify-between mt-[20px]">
                    <h3 className="text-[#434242] text-[16px] leading-[30px] font-bold">
                      Course Fee 50,000 BDT
                    </h3>
                    <button className="w-[134px] h-[38px] border-[1px] border-[#FF7E31] rounded-[8px] text-[14px] text-[#8C0000] font-bold">
                      Click for discount
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="wabe mt-[59px]">
            <h4 className=" text-[32px] font-bold leading-[38px] text-[#1F1E1E] mb-[26px] ">
              Web & Software
            </h4>
            <div className=" grid grid-cols-12">
              <div className=" w-[382px] h-[397px] lg:col-span-4 md:col-span-12 shadow-lg rounded-[25px]">
                <img src={wab1} className="rounded-t-[25px]" alt="img" />
                <div className="px-[18px]">
                  <h5 className="text-[#DF6812] font-bold leading-[23px] text-[14px] mt-[18px] mb-1">
                    All Course
                  </h5>
                  <h3 className="text-[20px] font-bold leading-[32px] text-[#1F1E1E] mb-2">
                    Web Development
                  </h3>
                  <div className="flex justify-between">
                    <div className="flex gap-[3px]">
                      <FaStar className="text-[15px] text-[#FFAE4F] " />
                      <FaStar className="text-[15px] text-[#FFAE4F] " />
                      <FaStar className="text-[15px] text-[#FFAE4F] " />
                      <FaStar className="text-[15px] text-[#FFAE4F] " />
                      <FaStarHalfAlt className="text-[15px] text-[#FFAE4F] " />
                      <h4 className="text-[14px] font-normal text-[#787A82] leading-[17px]">
                        {" "}
                        1,520 Review
                      </h4>
                    </div>
                    <h5 className="text-[14px] font-normal text-[#787A82] leading-[17px]">
                      1,900 Student
                    </h5>
                  </div>
                  <div className="flex justify-between mt-[20px]">
                    <h3 className="text-[#434242] text-[16px] leading-[30px] font-bold">
                      Course Fee 50,000 BDT
                    </h3>
                    <button className="w-[134px] h-[38px] border-[1px] border-[#FF7E31] rounded-[8px] text-[14px] text-[#8C0000] font-bold">
                      Click for discount
                    </button>
                  </div>
                </div>
              </div>
              <div className=" w-[382px] h-[397px] lg:col-span-4 md:col-span-12 shadow-lg rounded-[25px]">
                <img src={wab2} className="rounded-t-[25px]" alt="img" />
                <div className="px-[18px]">
                  <h5 className="text-[#DF6812] font-bold leading-[23px] text-[14px] mt-[18px] mb-1">
                    All Course
                  </h5>
                  <h3 className="text-[20px] font-bold leading-[32px] text-[#1F1E1E] mb-2">
                    MERN Stack Development
                  </h3>
                  <div className="flex justify-between">
                    <div className="flex gap-[3px]">
                      <FaStar className="text-[15px] text-[#FFAE4F] " />
                      <FaStar className="text-[15px] text-[#FFAE4F] " />
                      <FaStar className="text-[15px] text-[#FFAE4F] " />
                      <FaStar className="text-[15px] text-[#FFAE4F] " />
                      <FaStarHalfAlt className="text-[15px] text-[#FFAE4F] " />
                      <h4 className="text-[14px] font-normal text-[#787A82] leading-[17px]">
                        {" "}
                        680 Review
                      </h4>
                    </div>
                    <h5 className="text-[14px] font-normal text-[#787A82] leading-[17px]">
                      850 Student
                    </h5>
                  </div>
                  <div className="flex justify-between mt-[20px]">
                    <h3 className="text-[#434242] text-[16px] leading-[30px] font-bold">
                      Course Fee 95,000 BDT
                    </h3>
                    <button className="w-[134px] h-[38px] border-[1px] border-[#FF7E31] rounded-[8px] text-[14px] text-[#8C0000] font-bold">
                      Click for discount
                    </button>
                  </div>
                </div>
              </div>
              <div className=" w-[382px] h-[397px] lg:col-span-4 md:col-span-12 shadow-lg rounded-[25px]">
                <img src={wab3} className="rounded-t-[25px]" alt="img" />
                <div className="px-[18px]">
                  <h5 className="text-[#DF6812] font-bold leading-[23px] text-[14px] mt-[18px] mb-1">
                    All Course
                  </h5>
                  <h3 className="text-[20px] font-bold leading-[32px] text-[#1F1E1E] mb-2">
                    App Development With Kotlin
                  </h3>
                  <div className="flex justify-between">
                    <div className="flex gap-[3px]">
                      <FaStar className="text-[15px] text-[#FFAE4F] " />
                      <FaStar className="text-[15px] text-[#FFAE4F] " />
                      <FaStar className="text-[15px] text-[#FFAE4F] " />
                      <FaStar className="text-[15px] text-[#FFAE4F] " />
                      <FaStarHalfAlt className="text-[15px] text-[#FFAE4F] " />
                      <h4 className="text-[14px] font-normal text-[#787A82] leading-[17px]">
                        {" "}
                        1,220 Review
                      </h4>
                    </div>
                    <h5 className="text-[14px] font-normal text-[#787A82] leading-[17px]">
                      2,400 Student
                    </h5>
                  </div>
                  <div className="flex justify-between mt-[20px]">
                    <h3 className="text-[#434242] text-[16px] leading-[30px] font-bold">
                      Course Fee 50,000 BDT
                    </h3>
                    <button className="w-[134px] h-[38px] border-[1px] border-[#FF7E31] rounded-[8px] text-[14px] text-[#8C0000] font-bold">
                      Click for discount
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="digital mt-[59px]">
            <h4 className=" text-[32px] font-bold leading-[38px] text-[#1F1E1E] mb-[26px] ">
              Digital Marketing
            </h4>
            <div className=" grid grid-cols-12">
              <div className=" w-[382px] h-[397px] lg:col-span-4 md:col-span-12 shadow-lg rounded-[25px]">
                <img src={wab1} className="rounded-t-[25px]" alt="img" />
                <div className="px-[18px]">
                  <h5 className="text-[#DF6812] font-bold leading-[23px] text-[14px] mt-[18px] mb-1">
                    All Course
                  </h5>
                  <h3 className="text-[20px] font-bold leading-[32px] text-[#1F1E1E] mb-2">
                    Digital Marketing Course
                  </h3>
                  <div className="flex justify-between">
                    <div className="flex gap-[3px]">
                      <FaStar className="text-[15px] text-[#FFAE4F] " />
                      <FaStar className="text-[15px] text-[#FFAE4F] " />
                      <FaStar className="text-[15px] text-[#FFAE4F] " />
                      <FaStar className="text-[15px] text-[#FFAE4F] " />
                      <FaStarHalfAlt className="text-[15px] text-[#FFAE4F] " />
                      <h4 className="text-[14px] font-normal text-[#787A82] leading-[17px]">
                        {" "}
                        6,800 Review
                      </h4>
                    </div>
                    <h5 className="text-[14px] font-normal text-[#787A82] leading-[17px]">
                      8,500 Student
                    </h5>
                  </div>
                  <div className="flex justify-between mt-[20px]">
                    <h3 className="text-[#434242] text-[16px] leading-[30px] font-bold">
                      Course Fee 50,000 BDT{" "}
                    </h3>
                    <button className="w-[134px] h-[38px] border-[1px] border-[#FF7E31] rounded-[8px] text-[14px] text-[#8C0000] font-bold">
                      Click for discount
                    </button>
                  </div>
                </div>
              </div>
              <div className=" w-[382px] h-[397px] lg:col-span-4 md:col-span-12 shadow-lg rounded-[25px]">
                <img src={wab2} className="rounded-t-[25px]" alt="img" />
                <div className="px-[18px]">
                  <h5 className="text-[#DF6812] font-bold leading-[23px] text-[14px] mt-[18px] mb-1">
                    All Course
                  </h5>
                  <h3 className="text-[20px] font-bold leading-[32px] text-[#1F1E1E] mb-2">
                    Affiliate Marketing
                  </h3>
                  <div className="flex justify-between">
                    <div className="flex gap-[3px]">
                      <FaStar className="text-[15px] text-[#FFAE4F] " />
                      <FaStar className="text-[15px] text-[#FFAE4F] " />
                      <FaStar className="text-[15px] text-[#FFAE4F] " />
                      <FaStar className="text-[15px] text-[#FFAE4F] " />
                      <FaStarHalfAlt className="text-[15px] text-[#FFAE4F] " />
                      <h4 className="text-[14px] font-normal text-[#787A82] leading-[17px]">
                        {" "}
                        168 Review
                      </h4>
                    </div>
                    <h5 className="text-[14px] font-normal text-[#787A82] leading-[17px]">
                      210 Student
                    </h5>
                  </div>
                  <div className="flex justify-between mt-[20px]">
                    <h3 className="text-[#434242] text-[16px] leading-[30px] font-bold">
                      Course Fee 25,000 BDT
                    </h3>
                    <button className="w-[134px] h-[38px] border-[1px] border-[#FF7E31] rounded-[8px] text-[14px] text-[#8C0000] font-bold">
                      Click for discount
                    </button>
                  </div>
                </div>
              </div>
              <div className=" w-[382px] h-[397px] lg:col-span-4 md:col-span-12 shadow-lg rounded-[25px]">
                <img src={wab3} className="rounded-t-[25px]" alt="img" />
                <div className="px-[18px]">
                  <h5 className="text-[#DF6812] font-bold leading-[23px] text-[14px] mt-[18px] mb-1">
                    All Course
                  </h5>
                  <h3 className="text-[20px] font-bold leading-[32px] text-[#1F1E1E] mb-2">
                    Google AdSense
                  </h3>
                  <div className="flex justify-between">
                    <div className="flex gap-[3px]">
                      <FaStar className="text-[15px] text-[#FFAE4F] " />
                      <FaStar className="text-[15px] text-[#FFAE4F] " />
                      <FaStar className="text-[15px] text-[#FFAE4F] " />
                      <FaStar className="text-[15px] text-[#FFAE4F] " />
                      <FaStarHalfAlt className="text-[15px] text-[#FFAE4F] " />
                      <h4 className="text-[14px] font-normal text-[#787A82] leading-[17px]">
                        {" "}
                        176 Review
                      </h4>
                    </div>
                    <h5 className="text-[14px] font-normal text-[#787A82] leading-[17px]">
                      220 Student{" "}
                    </h5>
                  </div>
                  <div className="flex justify-between mt-[20px]">
                    <h3 className="text-[#434242] text-[16px] leading-[30px] font-bold">
                      Course Fee 25,000 BDT
                    </h3>
                    <button className="w-[134px] h-[38px] border-[1px] border-[#FF7E31] rounded-[8px] text-[14px] text-[#8C0000] font-bold">
                      Click for discount
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className="w-[145px] h-[44px] bg-[#ee160a] text-[#ffffff] text-[14px] font-semibold leading-[24px] rounded-[5px] ml-[560px] mt-10 ">All Course</button>
        </div>
      </section>
    </>
  );
};

export default Course;
