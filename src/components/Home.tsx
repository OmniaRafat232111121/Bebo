import React from 'react';
import Carousel from './carousel/Carousel';
import CarouselMobile from './carousel/CarouselMobile'
import cImage from "../../public/images/c1.png";
import ccImage from "../../public/images/c2.png";
import mImage from "../../public/images/l1.png";
import mmImage from "../../public/images/l2.png";
import xImage from "../../public/images/slide.webp";
import xxImage from "../../public/images/slide.webp";
import Image from "next/image";

const Home = () => {
  const slides = [
    cImage,
    ccImage,
  ];

  const slides1 = [
    xImage,
    xxImage,
  ];

  return (
    <div className='bg-[#ffff] shadow-md
     flex flex-wrap   lg:mt-[8%]  sm:mt-[23%] 
     sm:mt-28  pr-8 pl-8 min-w-7xl'>
            <div className="lg:w-[25%] sm:mx-auto sm:mt-[10px]  flex flex-col gap-[28px]">
                <Image className="max-w-[95%]  
                hidden lg:block" src={mImage} alt="seasonal-capsule-w17" priority/>
                <Image className="max-w-[95%]  hidden lg:block" src={mmImage} alt="seasonal-capsule-w17" />
                </div>
          <Carousel
          
           slides={slides}  controls indicators />
          <CarouselMobile slides={slides1} controls indicators/>
        

            
          
         </div>
  
  );
};

export default Home;



