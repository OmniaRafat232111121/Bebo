

import React from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { PostContent } from "../lib/posts";


type Props = {
  posts: PostContent[];
  images: string;
  pagination: {
    current: number;
    pages: number;
  };
};

export default function ProductList({ posts,images, pagination }: Props) {
  return (
<div className="w-full flex flex-wrap">

 <div className=" w-full  bg-gray-200 p-5 ">


 </div>
 <div className="w-full sm:w-70">
        <div className="posts">
          <ul className="post-list grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 p-5">
            {posts.map((it, i) => (
              <li key={i}>
                <Product post={it} />
              </li>
            ))}
          </ul>
        </div>
      </div>

      
</div>

  );
}