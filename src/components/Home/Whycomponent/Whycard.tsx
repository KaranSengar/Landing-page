import Image from 'next/image';
import React from 'react'
import { FaArrowRight } from "react-icons/fa";
type CardProps = {
    title: string;
    description: string;
    imageUrl: string;
    start:string
  };
const Whycard = ({title,description,imageUrl,start}:CardProps) => {

      
  return (
    <div className="bg-white  shadow-md rounded-xl overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-lg ">
    {/* Card Image */}
    <Image
      src={imageUrl}
      alt={title}
      width={400}
      height={250}
      className="w-full h-56 object-cover"
    />

    {/* Card Content */}
    <div className="p-5 text-center">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-600">{description}</p>
      <div className='flex  gap-2 bg-green-400 items-center mt-3 p-2 rounded-full text-white w-[200px]'>
    <p className='p-3'>{start}   </p>
    <FaArrowRight />
    </div>

    </div>
  </div>
  )
}

export default Whycard