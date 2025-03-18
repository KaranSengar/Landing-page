import React from "react";
import { FaCheck } from "react-icons/fa";

type Props = {
  price: number;
  plan: string;
};

const features = [
  "Unlimited Connection",
  "24/7 Support",
  "Customizable Features",
  "Unlimited Users", "Priority Support", "Custom Integrations", "Dedicated Account Manager"
];

const PriceCard = ({ price, plan }: Props) => {
  return (
    <div className="bg-white p-12 rounded-lg shadow-lg">
      <p className="mt-8 text-xl font-semibold text-blue-600 text-center">{plan}</p>
      <div className="font-medium text-3xl mt-4 text-center">
        $ <span className="text-5xl font-bold">{price}</span>/mo
      </div>
      <p className="mt-2 text-gray-500 text-center">Per user</p>

      {/* Features List */}
      <div className="mt-10 space-y-4">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
              <FaCheck className="text-green-500" />
            </div>
            <p className="text-gray-700">{feature}</p>
          </div>
        ))}
        <div className="mt-8">
            <button className="block w-full p-4 text-base md:text-lg text-white font-bold hover:bg-blue-950 transition-all duration-300 bg-blue-900">
                Start 14 days free  trails
            </button>
        </div>
      </div>
    </div>
  );
};

export default PriceCard;
