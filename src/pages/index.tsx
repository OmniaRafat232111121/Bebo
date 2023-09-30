import Head from "next/head";
// import ImageGallery from 'react-image-gallery';
// import 'react-image-gallery/styles/css/image-gallery.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Skeleton from 'react-loading-skeleton';
import cImage from "../../public/images/c1.png";
import ccImage from "../../public/images/c2.png";
import c1 from "../../public/images/1.png";
import cs1 from "../../public/images/s/2.png";
import React, { useState } from 'react'
import cs2 from "../../public/images/s/3.png";
import cs3 from "../../public/images/s/4.png";
import c2 from "../../public/images/2.png";
import c3 from "../../public/images/3.png";
import c4 from "../../public/images/4.png";
import c5 from "../../public/images/5.png";
import c6 from "../../public/images/6.png";
import c7 from "../../public/images/7.png";
import c8 from "../../public/images/8.png";
import c9 from "../../public/images/9.png";
import Image from "next/image";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Home from "../components/Home";
import mImage from '../../public/images/grad.jpg'
import mImage2 from '../../public/images/bb.jpg'
import Product from '../components/Product'
import { PostContent, listPostContent } from "../lib/posts";
import { GetStaticProps } from "next";
import config from "../lib/config";
import 'animate.css';

type Props = {
  posts: PostContent[];
  images: string;
  pagination: {
    current: number;
    pages: number;
  };
};

const Homee = ({  posts }: Props) => {
    const title = 'Bebyon';
    const description = 'Welcome to Bebyon.'
    const responsive = {
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5,
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 3,
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 2,
      },
    };
  
    const images = [
      { id: 1, src: c1, alt: 'seasonal-capsule-w17', label: 'بدل تركي' },
      { id: 2, src: c2, alt: 'seasonal-capsule-w17', label: 'بليزر ' },
      { id: 3, src: c3, alt: 'seasonal-capsule-w17', label: 'ازرار' },
      { id: 4, src: c4, alt: 'seasonal-capsule-w17', label: 'ربطات العنق' },
      { id: 5, src: c5, alt: 'seasonal-capsule-w17', label: 'الساعات' },
      { id: 6, src: c6, alt: 'seasonal-capsule-w17', label: 'حزام' },
      { id: 7, src: c7, alt: 'seasonal-capsule-w17', label: 'حذاء' },
      { id: 8, src: c8, alt: 'seasonal-capsule-w17', label: 'اطفال' },
      { id: 9, src: c9, alt: 'seasonal-capsule-w17', label: 'بناطيل' },


    ];
      const [showDetails, setShowDetails] = useState(false);

  const handleToggleDetails = () => {
    setShowDetails(!showDetails);
  };
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name={"description"} title={"description"} content={description}/>
                <meta name={"og:title"} title={"og:title"} content={title}/>
                <meta name={"og:description"} title={"og:description"} content={title}/>
            </Head>
         
            <Home/>
         {/*itemsin suits*/}
        <Carousel 
        responsive={responsive} 
        className="flex justify-center items-center mt-[40px]
         rounded-md ">
     
        {images.map((image) => (
          <div key={image.id} className="text-center mt-[30px] group-hover">
            <Image
              className="max-w-[100%] rounded-full mb-1 hover:scale-110 duration-200 cursor-pointer
              "
              src={image.src}
              alt={image.alt}
              width={150}
              height={200}
            />
            <p className="bg-red-700 py-2 mt-3  rounded-full hover:bg-black hover:text-red-700 cursor-pointer w-[50%]">
              {image.label}
            </p>
          </div>
        ))}
     
    </Carousel>
        <div className="bg-[#F6F6F6] my-20 px-12 pd:px-20 lg:px-32 sm:px-20">
      <div className="flex flex-row justify-center my-5">
        <h2 className="text-4xl mb-4"> الأحدث</h2>
      </div>
    <div >
    
    <Product posts={posts} />

    
           </div>
      </div>
     
      <div className='
    flex flex-wrap  mt-4 mb-4 pr-8 pl-8 min-w-7xl'>
        <div className="lg:w-[50%] sm:mx-auto sm:mt-[10px]  flex flex-col gap-[28px]">
            <Image className="max-w-[95%]" src={mImage} alt="seasonal-capsule-w17" />
            </div>
            <div className="lg:w-[50%] sm:mx-auto sm:mt-[10px]  flex flex-col gap-[28px]">
            <Image className="max-w-[95%]" src={mImage2} alt="seasonal-capsule-w17" />
            </div>
      
    </div>



        </>
    )
};


export default Homee;

export const getStaticProps: GetStaticProps = async () => {
  const posts = listPostContent(1, config.posts_per_page);

  return {
    props: {
      posts,
    },
  };
};