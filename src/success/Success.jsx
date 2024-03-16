import React from "react";
import successimg1 from '../assets/succ1.png'
import successimg2 from '../assets/succ2.png'
import successimg3 from '../assets/succ3.png'
import successimg4 from '../assets/succ4.png'

const Success = () => {
  return (
    <>
      <section id="success" className="pt-10 pb-10">
        <div className="container mx-auto max-w-[1296px]">
          <h2 className="text-[44px] font-bold
           leading-[54px] text-center mb-2">Success Stories</h2>
          <p className="text-[16px] font-normal text-[#605F62] text-center leading-[26px]">
            The presence of our students in the ever expanding IT industry
            motivates us, drives us to guide more <br /> people towards a sustainable
            future.
          </p>
          <div className=" grid grid-cols-12 mt-[48px]">
            <div className=" col-span-6">
                <img className=" rounded-[25px]" src= {successimg1} alt="img" />
            </div>
            <div className=" col-span-6">
                <img className=" rounded-[25px]" src= {successimg2} alt="img" />
            </div>
          </div>
          <div className=" grid grid-cols-12">
            <div className="col-span-6">
                <img className=" rounded-[25px]" src= {successimg3} alt="img" />
            </div>
            <div className="col-span-6">
                <img className=" rounded-[25px]" src= {successimg4} alt="img" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Success;
