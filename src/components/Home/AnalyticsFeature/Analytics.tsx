import React from "react";
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";

const Analytics = () => {
  return (
    <div className="pt-16 pb-12">
      <div className="w-[95%] sm:w-[80%] mx-auto flex flex-col-reverse lg:grid lg:grid-cols-2 gap-10 items-center" data-aos="fade-up" data-aos-anchor-placement="top-center">
        {/** Text content */}
        <div className="p-4 sm:p-6">
          <h1 className="text-base font-semibold text-orange-500">
            Audience Tracking and Insights
          </h1>
          <h1 className="mt-4 text-lg sm:text-2xl md:text-3xl font-bold text-gray-900">
            Powerful analytics tools put you in control and are fully customizable
          </h1>
          <p className="mt-4 text-gray-600 text-sm sm:text-base font-medium leading-[1.8rem]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quos
            inventore facere alias iure recusandae magni maxime sint error
            possimus expedita dolorem obcaecati, delectus beatae hic,
            necessitatibus iusto mollitia. Quibusdam!
          </p>
          <ul className="mt-6 space-y-2 text-gray-800">
            <li className="flex items-center font-bold">
              <FaCheckCircle className="text-green-500 mr-2" />
              Real-time user engagement tracking
            </li>
            <li className="flex items-center font-bold">
              <FaCheckCircle className="text-green-500 mr-2" />
              Customizable reporting and dashboards
            </li>
            <li className="flex items-center font-bold">
              <FaCheckCircle className="text-green-500 mr-2" />
              AI-powered insights and predictions
            </li>
          </ul>
          <button className="mt-8 w-full sm:w-auto px-6 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-800 transition-all duration-200">
            Explore More &rarr;
          </button>
        </div>

        {/** Image */}
        <div className="flex justify-center">
          <Image
            src="/images/pn2.png"
            alt="Analytics Dashboard Image"
            width={800}
            height={800}
            className="w-full max-w-[400px] h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Analytics;
