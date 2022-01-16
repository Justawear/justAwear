import React from 'react';
import {Carousel} from 'antd';

import mainOne from '../../assets/main.jpeg';
import mainTwo from '../../assets/main2.webp';
import mainThree from '../../assets/main3.jpeg';


const Slider = () => {
  return (
    <div style={{padding: "50px 0"}}>
      <Carousel autoplay>
    <div>
      <img style={{width: "90%", margin: "0 auto"}} src={mainOne} alt="Slider Image One" />
    </div>
    <div>
      <img style={{width: "90%", margin: "0 auto"}} src={mainTwo} alt="Slider Image One" />
    </div>
    <div>
      <img style={{width: "90%", margin: "0 auto"}} src={mainThree} alt="Slider Image One" />
    </div>
  </Carousel>
    </div>
  )
}

export default Slider;
