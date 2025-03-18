"use client";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ReviewCard from "./ReviewCard";
const Review = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="pt-16 pb-16 bg-[#fcf6fa]">
      <h1 className="mt-6 text-2xl md:text-2xl capitalize font-bold text-center">
        What client say about us
      </h1>
      <div className="mt-20 w-[90%] md:w-[80%] mx-auto">
        <Carousel
          responsive={responsive}
          arrows={true}
          autoPlay={true}
          autoPlaySpeed={5000}
          infinite
          showDots
        >
          <ReviewCard name="karan" image="/images/jr1.jpg" />
          <ReviewCard name="karan" image="/images/jr1.jpg" />
          <ReviewCard name="karan" image="/images/jr1.jpg" />
          <ReviewCard name="karan" image="/images/jr1.jpg" />
        
        </Carousel>
        ;
      </div>
    </div>
  );
};

export default Review;
