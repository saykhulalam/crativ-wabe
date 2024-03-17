import React from "react";
import ex1 from "../assets/ex1.png";
import ex2 from "../assets/ex2.png";
import ex3 from "../assets/ex3.png";
import look from '../assets/look.png'

const Solution = () => {
  return (
    <>
      <section id="solution">
        <div className="container mx-auto max-w-[1296px]">
          <div className="grid grid-cols-12 gap-5">
            <div className=" grid col-span-4 bg-[#F7FCE7] pt-[65px] pr-[76px] pb-[73px] pl-[35px] rounded-[33px]">
              <img className="mb-[15px]" src={ex1} alt="img" />
              <h3 className=" text-[22px] font-bold leading-[33px] text-[#1F1E1E] mb-[15px]">
                Lifetime Support
              </h3>
              <p className="text-[#605F62] leading-[24px] text-[16px] text-justify">
                Creative IT and its students share a lifetime bond. We
                strengthen our bond with you by providing lifelong support that
                helps you overcome any problem in your career path even after
                completing your course. Our expert support team ensures 24 hours
                service to all of our students. The personalized feedback that
                you receive from us, helps you grow, every day.
              </p>
            </div>
            <div className=" grid col-span-4 bg-[#F7FCE7] pt-[65px] pr-[76px] pb-[73px] pl-[35px] rounded-[33px]">
              <img className="mb-[15px]" src={ex2} alt="img" />
              <h3 className=" text-[22px] font-bold leading-[33px] text-[#1F1E1E] mb-[15px]">
                Career Placement Support
              </h3>
              <p className="text-[#605F62] leading-[24px] text-[16px] text-justify">
                Our career placement department is ready to help you find a
                lucrative job. We ensure your resume gets into the hands of the
                right hiring manager.  So far this department has helped more
                than 16000 students to find jobs in competitive global
                platforms. Promising a better future, we have successfully
                raised the job placement rate to 66% in 2023.
              </p>
            </div>
            <div className=" grid col-span-4 bg-[#F7FCE7] pt-[65px] pr-[76px] pb-[73px] pl-[35px] rounded-[33px]">
              <img className="mb-[15px]" src={ex3} alt="img" />
              <h3 className=" text-[22px] font-bold leading-[33px] text-[#1F1E1E] mb-[15px]">
                Class Videos
              </h3>
              <p className="text-[#605F62] leading-[24px] text-[16px] text-justify">
                No need to worry if you miss a topic in the class. We record
                most of our classes so that students who miss a session can
                still get the information they need. They can watch the videos
                again and again until they understand the topic thoroughly. Our
                motto is to provide you a flexible learning experience to
                gradually improve your competence.
              </p>
            </div>
          </div>
          <button className="w-[145px] h-[44px] bg-[#ee160a] text-[#ffffff] text-[14px] font-semibold leading-[24px] rounded-[5px] ml-[560px] mt-10 ">Our Facility</button>
          <img className="mt-[46px] mb-[77px]" src= {look} alt="img" />
        </div>
      </section>
    </>
  );
};

export default Solution;
