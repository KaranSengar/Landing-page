import React from 'react'

const Offer = () => {
  return (
    <div className='flex items-center justify-center pt-24 pb-24 mb-20 bg-black' data-aos="fade-up" data-aos-anchor-placement="top-center">
        <div className='text-center px-6 '>
            <h2 className='text-white text-2xl md:text-3xl font-semibold mb-4'>
                Explore ultimate feature with primium
            </h2>
            <p className='text-gray-400 mb-8'>
                Tell us your Apple ID email address so we could send you a TestFlight invitation directly
            </p>
            <button className='bg-blue-500 text-white py-3 px-8 rounded-full text-lg font-medium mb-4 hover:bg-blue-600'>
                Start 14 Days Free Trails
            </button>
            <p className='text-white'>No credit Card Required</p>
        </div>
    </div>
  )
}

export default Offer