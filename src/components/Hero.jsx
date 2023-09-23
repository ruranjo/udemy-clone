import React from 'react'
import styled from 'styled-components'
import {other_images } from '../utils/images'

const Hero = () => {

  console.log(other_images.hero_img)
  return (
    <HeroWrapper className='bg-black'>
        <div className='container h-100'>

          <div className='hero-content'>
            <h1>Aprender en Grande</h1>
            <p>Compre nuestra gran oferta de cursos desde $9,99. Si quieres aprenderlo, es probable que lo tengamos.</p>
          </div>
          
        </div>
    </HeroWrapper>
  )
}

export default Hero


const HeroWrapper = styled.div`
  background: url(${other_images.hero_img}) center/cover no-repeat;
  height:300px;

  .container{
    .hero-content{
      background-color: var(--clr-white);
      max-width: 400px;
      width:100%;
      margin-left 0;
      padding:20px;
    }

    h1{
      font-size: 50px;
      margin-bottom: 5px;
    }

    p{
      font-size: 15px;
    }
  }
`;
