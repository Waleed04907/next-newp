"use client"
import HeroSection from "../components/HeroSection";
import Whychooseus from "../components/whychooseus";
import FeaturedWebinars from "../components/FeaturedWebinars"
import FeaturedCourses from "../components/FeaturedCourses";
import react from "react"

const page = () => {
  return (
    <div>
     <HeroSection/>
     <FeaturedCourses/>
  <Whychooseus/>
  <FeaturedWebinars/>
 
    </div>
  )
}

export default page;

