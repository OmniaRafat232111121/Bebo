
import React, { useState } from 'react';
import Image from 'next/image';
import Skeleton from "../components/Skeleton";
import { PostContent } from '../lib/posts';
import Link from 'next/link';

type Props = {
  post: PostContent;
};

export default function PostItem({ post }: Props) {
  const [showDetails, setShowDetails] = useState(false);

  const handleToggleDetails = () => {
    setShowDetails(!showDetails);
  };
 



  return (
    <div>
      <ul>
        {post.images.map((img: any, k: any) => (
          <li key={k}>
            <Image src={img.image} width={400} 
            height={500} alt={img.description} />
            <div className="parent-container">
              <button className="quick-review-button" 
               onClick={handleToggleDetails} >Quick Review</button>
                </div>

          </li>
        ))}
      </ul>

<Link href="/Details">
      <a className="bg-gradient-to-r from-red-600 to-[#bb0004] rounded-full py-2 px-4 mt-4 my-2 text-sm text-white hover:bg-purple-700 w-[70%] m-auto flex flex-row justify-center">
        تفاصيل البدلة
      </a>
    </Link>
  
      {showDetails && (
        <Skeleton  selectedItem={post} />
      )}

    </div>
  );
}
