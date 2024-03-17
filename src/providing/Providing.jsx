import React from "react";
import provimg from "../assets/prov.png";

const Providing = () => {
  return (
    <>
      <section id="providing" className="bg-[#F6F5FB] pt-[42px] pb-[42px]">
        <div className="container mx-auto max-w-[1296px]">
          <div className=" grid grid-cols-12 items-center">
            <div className=" col-span-6">
              <img src={provimg} alt="" />
            </div>
            <div className=" col-span-6">
              <h2 className="text-[#1F1E1E] text-[32px] font-bold leading-[38px] mb-[16px]">
                Providing project-based classes <br /> is our specialty
              </h2>
              <p className="text-[16px] text-[#605F62] leading-[26px] text-justify">
                We believe in skills gained through practical projects. A great
                number of people struggle to start their career in the tech
                field for only having conceptual knowledge. Creative IT makes
                sure to provide hands-on training to prepare you for job
                markets. Our course module contains projects that are designed
                to track your progress. During the course, you will be able to
                make a portfolio yourself to showcase your practical skills to
                the potential employers.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Providing;
