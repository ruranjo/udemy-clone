import React from 'react'
import Hero from '../components/Hero'
import CoursesList from '../components/CoursesList'
const HomePage = () => {
  return (
    <div className='holder'>
      <Hero/>
      <CoursesList/>
    </div>
  )
}

export default HomePage


/*
import React from 'react';
import Hero from "../components/Hero";
import CoursesList from "../components/CourseList";
import CategoriesList from "../components/CategoriesList";

const HomePage = () => {
  return (
    <div className='holder'>
      <Hero />
      <CoursesList />
      <CategoriesList />
    </div>
  )
}

export default HomePage

*/