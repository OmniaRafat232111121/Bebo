

import React from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { PostContent } from "../lib/posts";
import PostItem from "./PostItem";
import TagLink from "./TagLink";
// import Pagination from "./Pagination";
import { TagContent } from "../lib/tags";
import Sidebar from "./Sidebar";
import Home from "./Home";
import img1 from '../../public/images/2.png'
import img2 from '../../public/images/3.png'
import img3 from '../../public/images/4.png'
import img4 from '../../public/images/5.png'
import img5 from '../../public/images/6.png'
import img6 from '../../public/images/7.png'
import Image from "next/image";
import Link from "next/link";

type Props = {
  posts: PostContent[];
  images: string;
  pagination: {
    current: number;
    pages: number;
  };
};

export default function PostList({ posts }: Props) {
  return (
<div className="w-full flex flex-wrap">

 <div className=" w-full  bg-gray-200 p-5 ">
 <Carousel
  responsive={{
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  }}
  swipeable={true}
  draggable={true}
  showDots={false}
  infinite={true}
  autoPlay={true}
  autoPlaySpeed={3000}
  keyBoardControl={true}
  customTransition="all .5"
  transitionDuration={500}
  containerClass="carousel-container"
  removeArrowOnDeviceType={['tablet', 'mobile']}
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px"
>
  <div>
    <Image src={img1} alt="image" className="rounded-full border-4 border-red-800 hover:opacity-75 transition-opacity duration-300 cursor-pointer" />
    <Link href="/">
      <p className="text-red-800 mt-3 lg:flex lg:items-center lg:justify-center sm:text-left sm:ml-[50px] mr-[100px]">تسوق الان</p>
    </Link>
  </div>
  <div>
    <Image src={img2} alt="image" className="rounded-full border-4 border-red-800 hover:opacity-75 transition-opacity duration-300 cursor-pointer" />
    <Link href="/">
      <p className="text-red-800 mt-3 lg:flex lg:items-center lg:justify-center sm:text-left sm:ml-[50px] mr-[100px]">تسوق الان</p>
    </Link>
  </div>
  <div>
    <Image src={img3} alt="image" className="rounded-full border-4 border-red-800 hover:opacity-75 transition-opacity duration-300 cursor-pointer" />
    <Link href="/">
      <p className="text-red-800 mt-3 lg:flex lg:items-center lg:justify-center sm:text-left sm:ml-[50px] mr-[100px]">تسوق الان</p>
    </Link>
  </div>
  <div>
    <Image src={img4} alt="image" className="rounded-full border-4 border-red-800 hover:opacity-75 transition-opacity duration-300 cursor-pointer" />
    <Link href="/">
      <p className="text-red-800 mt-3 lg:flex lg:items-center lg:justify-center sm:text-left sm:ml-[50px] mr-[100px]">تسوق الان</p>
    </Link>
  </div>
  <div>
    <Image src={img5} alt="image" className="rounded-full border-4 border-red-800 hover:opacity-75 transition-opacity duration-300 cursor-pointer" />
    <Link href="/">
      <p className="text-red-800 mt-3 lg:flex lg:items-center lg:justify-center sm:text-left sm:ml-[50px] mr-[100px]">تسوق الان</p>
    </Link>
  </div>
  <div>
    <Image src={img6} alt="image" className="rounded-full border-4 border-red-800 hover:opacity-75 transition-opacity duration-300 cursor-pointer" />
    <Link href="/">
      <p className="text-red-800 mt-3 lg:flex lg:items-center lg:justify-center sm:text-left sm:ml-[50px] mr-[100px]">تسوق الان</p>
    </Link>
  </div>
</Carousel>

 </div>
 <div className="w-full sm:w-70">
        <div className="posts">
          <ul className="post-list grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 p-5">
            {posts.map((it, i) => (
              <li key={i}>
                <PostItem post={it} />
              </li>
            ))}
          </ul>
        </div>
      </div>

      
</div>

  );
}