import React from "react";
import PriceCard from "./PriceCard";

const Price = () => {
  return (
    <div className="pt-16 pb-16 bg-[#edfbff]" data-aos="fade-up" data-aos-anchor-placement="top-center">
      <h2 className="mt-6 text-2xl md:text-3xl capitalize font-bold text-center">
        Meet exciting Pricing Plans
      </h2>

      {/* Cards container */}
      <div className="w-[100%] md:w-[80%] mt-20 mx-auto flex flex-wrap justify-center gap-10">
        <PriceCard price={15} plan="Starter" />
        <PriceCard price={25} plan="Pro" />
      </div>
    </div>
  );
};

export default Price;
