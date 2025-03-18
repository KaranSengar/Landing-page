'use client'
import Analytics from '@/components/Home/AnalyticsFeature/Analytics'
import Feature from '@/components/Home/Feature/Feature'
import Hero from '@/components/Home/Hero/Hero'
import Offer from '@/components/Home/Offer/Offer'
import Price from '@/components/Home/Price/Price'
import Review from '@/components/Home/Review/Review'
import Whycomponent from '@/components/Home/Whycomponent/Whycomponent'
import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
const HomePage = () => {
  
useEffect(()=>{
  const initAos = async()=>{
    await import("aos");
    Aos.init({
      duration:1000,
      easing:"ease",
      once:true,
      anchorPlacement:"top-bottom"
    })
  }
  initAos()
} ,[])
  return (
    <div>
      <Hero />
      <Whycomponent />
      <Analytics />
      <Feature />
      <Review />
      <Price  />
      <Offer />
    </div>
  )
}

export default HomePage