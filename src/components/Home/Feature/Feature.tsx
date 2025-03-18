import React from 'react'
import { FaLayerGroup } from 'react-icons/fa'

const Feature = () => {
    const features = [
        {
            icon:<FaLayerGroup  className='text-red-500'/>,
            text:"50% Unique Design Block"
        }, {
            icon:<FaLayerGroup  className='text-red-500'/>,
            text:"50% Unique Design Block"
        }, {
            icon:<FaLayerGroup  className='text-red-500'/>,
            text:"50% Unique Design Block"
        }, {
            icon:<FaLayerGroup  className='text-red-500'/>,
            text:"50% Unique Design Block"
        },  {
            icon:<FaLayerGroup  className='text-red-500'/>,
            text:"50% Unique Design Block"
        }, {
            icon:<FaLayerGroup  className='text-red-500'/>,
            text:"50% Unique Design Block"
        }, {
            icon:<FaLayerGroup  className='text-red-500'/>,
            text:"50% Unique Design Block"
        }, {
            icon:<FaLayerGroup  className='text-red-500'/>,
            text:"50% Unique Design Block"
        },
    ]
  return (
    <div className='bg-pink-50 pt-20 pb-20' >
        <div className='w-[80%] mx-auto text-center'>
            <h1 className='mt-6 text-2xl md:text-3xl capitalize font-bold text-center'>
                Its Everything you will ever need 
            </h1>
            <div className='grid mt-16 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'> 
              {
                features.map((item,index)=>(
                    <div key={index} 
                    data-aos="fade-up" data-aos-anchor-placement="top-center"
                    data-aos-delay={`${index *100}`}
                    className='flex items-center justify-center p-4 bg-white rounded-lg shadow-md space-x-3'>
                  <div className='text-3xl  w-14 h-14 bg-gray-800 bg-opacity-10  flex items-center justify-center flex-col rounded-full'>
                    <span>{item.icon}
                    </span>
                  </div>
                  <span>{item.text}
                  </span>
                    </div>
                ))
              }
            </div>
        </div>
    </div>
  )
}

export default Feature