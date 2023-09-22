import React from 'react'
import { useSidebarContext } from '../context/sidebar_context';
import styled from 'styled-components'

const Test2 = () => {
    const  {isSidebarOpen} = useSidebarContext();
    return (
        <Container className = {isSidebarOpen ? "blue" : "red" }  >
            <div>
            {isSidebarOpen ? <>TRUE</> : <>FALSE</> } 
            </div>
    
        </Container>
      )
    }
    
    
    const Container = styled.div`
        
        width:100px;
        height:100px;
        display: flex;
        align-items:center;
        justify-content:center;
        border: 1px solid red;
    
        &.red{
            background-color:red;
        }
    
        &.blue{
            background-color: #2d69fd;
        }
    
    `;

export default Test2