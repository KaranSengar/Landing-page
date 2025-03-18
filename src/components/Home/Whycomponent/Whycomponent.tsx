import React from 'react'
import Whycard from './Whycard'

const Whycomponent = () => {
    const cardData = [
        {
          id: 1,
          title: "Modern UI Design",
          description: "Learn to build beautiful user interfaces.",
          imageUrl: "/images/download1.jpg",
          start:"Learning face the"
        },
        {
          id: 2,
          title: "Full-Stack Development",
          description: "Master the art of MERN stack development.",
          imageUrl: "/images/fullstack.jpg",
          start:"Learning face the "
        },
        {
          id: 3,
          title: "Next.js for Beginners",
          description: "A complete guide to Next.js development.",
          imageUrl: "/images/nextjs.jpg",
          start:"Learning face the "
        },
        {
          id: 4,
          title: "React Native Development",
          description: "Build cross-platform mobile apps.",
          imageUrl: "/images/react-native.png",
          start:"Learning face the "
        },
      ];
  return (
    <div className='pt-16 pb-16'>
        <h1 className='mt-6 text-2xl md:text-3xl capitalize font-bold text-center'>Why you choose this application</h1>
        <div className='mt-20 grid w-[82%] mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12' data-aos="fade-right" data-aos-anchor-placement="top-center">
      
            {/*  */}
             {cardData.map((item) => (
         <Whycard key={item.id}
            title={item.title}
            description={item.description}
            imageUrl={item.imageUrl}
            start={item.start}

          />
        ))}

            
           </div>
        </div>
  
  )
}

export default Whycomponent