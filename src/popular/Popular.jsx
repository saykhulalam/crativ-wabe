import React from "react";
import popularimg1 from "../assets/graphic.png";
import popularimg2 from "../assets/motion.png";
import popularimg3 from "../assets/uxui.png";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";

const Popular = () => {
  return (
    <>
      <section id="popular" className="pt-[207px] pb-[50px] bg-[#FAF9FD]">
        <div className="container mx-auto max-w-[1296px]">
          <div className="">
            <h2 className=" text-[#1F1E1E] text-[44px] font-bold leading-[54px] text-center mb-3">
              Popular Courses
            </h2>
            <p className="text-[16px] font-normal leading-[26px] text-center text-[#605F62]">
              We have designed our courses with the most demanding professional
              skills. The knowledge, experience, and <br /> expertise gained
              through the program will ensure your desired job in the global
              market. From the list <br /> below you can enroll to any online or
              offline courses at any time.
            </p>
          </div>
          <ul className="flex gap-[109px] justify-center mt-[58px] mb-[33px]">
            <li className="text-[#1F1E1E] font-bold leading-[20px]">
              All Course
            </li>
            <li className="text-[#1F1E1E] font-bold leading-[20px]">
              Graphic & Multimedia
            </li>
            <li className="text-[#1F1E1E] font-bold leading-[20px]">
              Web & Software
            </li>
            <li className="text-[#1F1E1E] font-bold leading-[20px]">
              Digital Marketing
            </li>
            <li className="text-[#1F1E1E] font-bold leading-[20px]">
              3D Animation & Visualization
            </li>
          </ul>
          <div className=" grid grid-cols-12 gap-10">
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
          <div className=" grid grid-cols-12 pt-[70px] gap-10">
            <div className=" rounded-[35px] col-span-4 w-[396px] h-[390px] bg-[#F7FCE7] pt-[58px] pr-[80px] pb-[43px] pl-[35px]">
              <h2 className="text-[#66902B] leading-[48px] text-[40px] font-bold mb-[16px]">
                70000+
              </h2>
              <h4 className="text-[#1F1E1E] text-[20px] font-bold leading-[26px] mb-[16px]">
                Students Choose Creative IT
              </h4>
              <p className="text-[16px] text-[#605F62] leading-[26px] text-justify">
                Creative IT has become a trusted training institute for not only
                Bangladeshi residents but also those living abroad. More than
                70,000 passionate learners are working in different markets
                after completing courses from our institute.
              </p>
            </div>
            <div className=" rounded-[35px] col-span-4 w-[396px] h-[390px] bg-[#FFF7EB] pt-[58px] pr-[80px] pb-[43px] pl-[35px]">
              <h2 className="text-[#66902B] leading-[48px] text-[40px] font-bold mb-[16px]">
                20000+
              </h2>
              <h4 className="text-[#1F1E1E] text-[20px] font-bold leading-[26px] mb-[16px]">
                Got Career Placement.
              </h4>
              <p className="text-[16px] text-[#605F62] leading-[26px] text-justify">
                Our job placement department has helped more than 20,000 skilled
                students find jobs in competitive global markets. Promising a
                better future, we have successfully raised the job placement
                rate to 67% by providing continuous career support to the
                learners.
              </p>
            </div>
            <div className=" rounded-[35px] col-span-4 w-[396px] h-[390px] bg-[#E9F9FC] pt-[58px] pr-[80px] pb-[43px] pl-[35px]">
              <h2 className="text-[#66902B] leading-[48px] text-[40px] font-bold mb-[16px]">
                91%
              </h2>
              <h4 className="text-[#1F1E1E] text-[20px] font-bold leading-[26px] mb-[16px]">
                Success Ratio
              </h4>
              <p className="text-[16px] text-[#605F62] leading-[26px] text-justify">
                Excelling at work needs hands-on experience. The practical
                approach towards problems puts our students ahead of any other
                competitors in global job markets. All the courses are
                structured considering the job prospects to make you well
                prepared for a bright career.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Popular;
