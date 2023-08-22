import React, { useState } from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import "./Slider.scss"
const Slider = () => {
    const[currentSlide,setCurrentSlide]=useState(0)

        const previasSlide=()=>{
           return setCurrentSlide(currentSlide === 0?2:(prev)=>prev-1)
        }
        const nextSlide=()=>{
          return   setCurrentSlide(currentSlide===2?0:(prev)=>prev+1)
        }
  return (
      <div className='slider'>
        <div className='container' style={{transform:`translateX(-${currentSlide *100}vw)`}} >
            <img src='/img/w1.jpg'/>
            <img src='/img/w4.jpg'/>
            <img src='/img/w6.jpg'/>
        </div>
        <div className='icons'>
            <div className='icon' onClick={previasSlide}>
                <ArrowBackIcon/>
            </div>
            <div className='icon' onClick={nextSlide}>
                <ArrowForwardIcon/>
            </div>
        </div>
      </div>
  )
}

export default Slider