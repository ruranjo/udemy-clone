import React from 'react'
import styled from 'styled-components'
import Tab from './Tab'
import { useCoursesContext } from '../context/courses_context'

const CoursesList = () => {
    const {courses} = useCoursesContext();
  return (
    <CoursesListWrapper>
        <div className='container'>
          <div className='courses-list-top'>
                <h2> Un Amplia Selecion de cursos para ti</h2>
                <p> escoje desde 200.000 cursos online con nuevas actualizaciones mensuales</p>
            </div>

            <Tab courses = {courses} />
        </div>
    </CoursesListWrapper>
    
  )
}

export default CoursesList

const CoursesListWrapper = styled.div`
    padding: 40px 0;
  .courses-list-top p{
    font-size: 1.8rem;
  }

`


/*
import React from 'react';
import styled from "styled-components";
import Tabs from "./Tabs";
import { useCoursesContext } from '../context/courses_context';

const CourseList = () => {
  const {courses} = useCoursesContext();

  return (
    <CoursesListWrapper>
      <div className='container'>
        <div className='courses-list-top'>
          <h2>A broad selection of courses</h2>
          <p>Choose from 204,000 online video courses with new additions publihsed every month</p>
        </div>

        <Tabs courses = {courses} />
      </div>
    </CoursesListWrapper>
  )
}

const CoursesListWrapper = styled.div`
  padding: 40px 0;
  .courses-list-top p{
    font-size: 1.8rem;
  }
`;

export default CourseList
*/