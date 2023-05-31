import React, { useState } from 'react'
import SliderContent from './components/SliderContent'
import Arrows from '../Carousel/components/Arrows'
import './Slider.scss'
//import { RECOMMENDATION_DATA } from './recommendation_data'

const Slider = ({ productData }) => {
  const lastIndex = productData.length - 1
  const [firstSlide, setFirstSlide] = useState(0)
  return (
    <div className="sliderContainer">
      <SliderContent firstSlide={firstSlide} recommendationData={productData} />
      <Arrows
        prev={() =>
          setFirstSlide(firstSlide < 1 ? lastIndex - 2 : firstSlide - 3)
        }
        next={() =>
          setFirstSlide(firstSlide === lastIndex - 2 ? 0 : firstSlide + 3)
        }
      />
    </div>
  )
}

export default Slider
