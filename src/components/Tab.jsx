import React, { useState } from 'react'
import {ALL,AWS,DATA_SCIENCE,DESIGN,MARKETING,PYTHON } from '../utils/constants'
import styled from 'styled-components';
import Course from './Course';

const Tab = ({courses}) => {
    const [activeTab, setActiveTab] = useState(ALL);
    const tabHandler = (category) =>{
        setActiveTab(category)    
    }

    
  return (
    <TabsWrapper>
        <div className='tabs'>
            <ul className='flex flex-wrap'>
                <li className='tabs-head-item'>
                    <button type = "button" className={`tab-btn ${activeTab === ALL ? "active" : ""}`} onClick = {() => tabHandler(ALL)}>All Categories</button>
                </li>

                <li className='tabs-head-item'>
                    <button type = "button" className={`tab-btn ${activeTab === PYTHON ? "active" : ""}`} onClick = {() => tabHandler(PYTHON)}>Python</button>
                </li>

                <li className='tabs-head-item'>
                    <button type = "button" className={`tab-btn ${activeTab === AWS ? "active" : ""}`} onClick = {() => tabHandler(AWS)}>AWS Certification</button>
                </li>

                <li className='tabs-head-item'>
                    <button type = "button" className={`tab-btn ${activeTab === DATA_SCIENCE ? "active" : ""}`} onClick = {() => tabHandler(DATA_SCIENCE)}>Data Science</button>
                </li>

                <li className='tabs-head-item'>
                    <button type = "button" className={`tab-btn ${activeTab === DESIGN ? "active" : ""}`} onClick = {() => tabHandler(DESIGN)}>Desing</button>
                </li>

                <li className='tabs-head-item'>
                    <button type = "button" className={`tab-btn ${activeTab === MARKETING ? "active" : ""}`} onClick = {() => tabHandler(MARKETING)}>Marketing</button>
                </li>

            </ul>
            <div className='tabs-body'>
                {
                  
                    courses.filter(course => (activeTab === ALL || course.category === activeTab)).map((course) => {
                      
                      return <Course key = {course.id} {...course} />;
                    }
                        
                        
                    )
                }
            </div>
        </div>
    </TabsWrapper>
  )
}

export default Tab

const TabsWrapper = styled.div`
  border: 1px solid red;
  padding:20px;
  margin-top: 16px;
  .tabs{
    .tabs-head-item button{
      border-radius:20px;
      border: 1px solid rgba(0, 0, 0, 0.7);
      padding: 10px 13px;
      margin-right: 6px;
      transition: var(--transition);
      font-weight: 500;
      font-size: 15px;
      margin-bottom: 10px;

      &:hover{
        background-color: var(--clr-orange);
        color: white;
      }
    }
    
    .active{
      background-color: var(--clr-black);
      color: white;
    }
  }

  .tabs-body{
    margin-top: 32px;
  }

  @media screen and (min-width: 600px){
    .tabs-body{
      display: grid;
      gap: 26px;
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media screen and (min-width: 992px){
    .tabs-body{
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media screen and (min-width: 1400px){
    .tabs-body{
      grid-template-columns: repeat(4, 1fr);
    }
  }
}
`
