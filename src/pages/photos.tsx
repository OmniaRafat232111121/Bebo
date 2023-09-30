import React from 'react';
import Image from 'next/image';
import blackk from '../../public/images/s/blackk.jpg';
import numbertwo from '../../public/images/s/white.jpg';
import numberthree from '../../public/images/s/black3.jpg';
import numberfive from '../../public/images/s/white2.jpg';
import yellow1 from '../../public/images/s/yellow1.jpg';
import yellow2 from '../../public/images/s/yellow2.jpg';

import brown1 from '../../public/images/s/brown.jpg';
import brown2 from '../../public/images/s/brown2.jpg';


import st1 from '../../public/images/s/stylish.jpg';
import st2 from '../../public/images/s/stylish2.jpg';

import mint from '../../public/images/s/mint.jpg';
import mint2 from '../../public/images/s/mint.jpg';

import smallgreen from '../../public/images/s/smallgreen.jpg';
import smallgreen2 from '../../public/images/s/smallgreen2.jpg';

import smallblack from '../../public/images/s/smallblack.jpg';
import smallblack2 from '../../public/images/s/smallblack2.jpg';



import lemon from '../../public/images/s/greenlemon.jpg';
import lemon2 from '../../public/images/s/lemon2.jpg';

import blue from '../../public/images/s/blue.jpg';
import blue2 from '../../public/images/s/blue2.jpg';
const Photos = () => {
  return (
    <div dir="rtl" className=" ">
      <h2 className="text-2xl  mt-[130px] text-center flex items-center
       justify-center ">معرض الصور</h2>
  
<div className="grid 2xl:grid-cols-4 xl:grid-cols-3  md:grid-cols-2 sm:grid-cols-1 gap-4   ">
    
        <div   className="relative group mt-16 "
        >
          <Image
            src={blackk}
            alt="numberone"
            width={" "}
            height={" "}
            className="w-[500px] cursor-pointer h-[500px] object-cover transition-transform transform scale-100 duration-300"
            />
          <Image
            src={numberthree} 
            alt="Hover Image"
            width={" "}
            height={" "}
            className="absolute cursor-pointer top-0 left-0 w-[500px] h-[500px] object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
        </div>



    




        <div className="relative group mt-16 ">
          <Image
            src={numbertwo}
            alt="numberone"
            width={" "}
            height={" "}
            className="w-[500px] cursor-pointer h-[500px] object-cover transition-transform transform scale-100 duration-300"
            />
          <Image
            src={numberfive} 
            alt="Hover Image"
            width={" "}
            height={" "}
            className="absolute cursor-pointer top-0 left-0 w-[500px] h-[500px] object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
        </div>

        <div className="relative group mt-16 ">
          <Image
            src={yellow1}
            alt="numberone"
            width={" "}
            height={" "}
            className="w-[500px] cursor-pointer h-[500px] object-cover transition-transform transform scale-100 duration-300"
            />
          <Image
            src={yellow2} 
            alt="Hover Image"
            width={" "}
            height={" "}
            className="absolute cursor-pointer top-0 left-0 w-[500px] h-[500px] object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
        </div>


        <div    className="relative group mt-16 "
        >
          <Image
            src={brown1}
            alt="numberone"
            width={" "}
            height={" "}
            className="w-[500px] cursor-pointer h-[500px] object-cover transition-transform transform scale-100 duration-300"
            />
          <Image
            src={brown2} 
            alt="Hover Image"
            width={" "}
            height={" "}
            className="absolute cursor-pointer top-0 left-0 w-[500px] h-[500px] object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
        </div>

     





        <div
          
          className="relative group mt-16 "
        >
          <Image
            src={blue}
            alt="numberone"
            width={" "}
            height={" "}
            className="w-[500px] cursor-pointer h-[500px] object-cover transition-transform transform scale-100 duration-300"
            />
          <Image
            src={blue2} 
            alt="Hover Image"
            width={" "}
            height={" "}
            className="absolute cursor-pointer top-0 left-0 w-[500px] h-[500px] object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
        </div>



        <div   className="relative group mt-16 "
        >
          <Image
            src={smallblack}
            alt="numberone"
            width={" "}
            height={" "}
            className="w-[500px] cursor-pointer h-[500px] object-cover transition-transform transform scale-100 duration-300"
            />
          <Image
            src={smallblack2} 
            alt="Hover Image"
            width={" "}
            height={" "}
            className="absolute cursor-pointer top-0 left-0 w-[500px] h-[500px] object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
        </div>
    



        <div   className="relative group mt-16 "
        >
          <Image
            src={smallgreen}
            alt="numberone"
            width={" "}
            height={" "}
            className="w-[500px] cursor-pointer h-[500px] object-cover transition-transform transform scale-100 duration-300"
            />
          <Image
            src={smallgreen2} 
            alt="Hover Image"
            width={" "}
            height={" "}
            className="absolute cursor-pointer top-0 left-0 w-[500px] h-[500px] object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
        </div>



        <div   className="relative group mt-16 "
        >
          <Image
            src={lemon}
            alt="numberone"
            width={" "}
            height={" "}
            className="w-[500px] cursor-pointer h-[500px] object-cover transition-transform transform scale-100 duration-300"
            />
          <Image
            src={lemon2} 
            alt="Hover Image"
            width={" "}
            height={" "}
            className="absolute cursor-pointer top-0 left-0 w-[500px] h-[500px] object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
        </div>


        <div   className="relative group mt-16 "
        >
          <Image
            src={mint}
            alt="numberone"
            width={" "}
            height={" "}
            className="w-[500px] cursor-pointer h-[500px] object-cover transition-transform transform scale-100 duration-300"
            />
          <Image
            src={blue} 
            alt="Hover Image"
            width={" "}
            height={" "}
            className="absolute cursor-pointer top-0 left-0 w-[500px] h-[500px] object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
        </div>



        <div   className="relative group mt-16 "
        >
          <Image
            src={st1}
            alt="numberone"
            width={" "}
            height={" "}
            className="w-[500px] cursor-pointer h-[500px] object-cover transition-transform transform scale-100 duration-300"
            />
          <Image
            src={st2} 
            alt="Hover Image"
            width={" "}
            height={" "}
            className="absolute cursor-pointer top-0 left-0 w-[500px] h-[500px] object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
        </div>
      </div>
    </div>
  );
};

export default Photos;
