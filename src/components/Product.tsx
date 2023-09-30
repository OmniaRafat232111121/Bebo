import React, { useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Image from 'next/image';
import { FaHeart } from 'react-icons/fa';
import { PostContent } from '../lib/posts';
import Skeletonn from './Skeletonn';
interface MyCarouselProps {
  posts: PostContent[];
}

const MyCarousel: React.FC<MyCarouselProps> = ({ posts }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const [showDetails, setShowDetails] = useState(false);
  const handleToggleDetails = () => {
    setShowDetails(!showDetails);
  };

  const [favorites, setFavorites] = useState<number[]>([]); // Assuming post IDs are numbers
  const toggleFavorite = (postId: number) => {
    setFavorites((prevFavorites) => {
      if (prevFavorites.includes(postId)) {
        return prevFavorites.filter((id) => id !== postId);
      } else {
        return [...prevFavorites, postId];
      }
    });
  };

  const isFavorite = (postId: number) => favorites.includes(postId);

  const [hoveredSlide, setHoveredSlide] = useState<number | null>(null); // Assuming post IDs are numbers
  const handleSlideHover = (postId: number) => {
    setHoveredSlide(postId);
  };

  const [selectedTag, setSelectedTag] = useState<string>('');

  const handleTagClick = (tag: string) => {
    setSelectedTag(tag);
  };

  // Filter posts based on the selected tag
  const filteredPosts = selectedTag
  ? posts.filter((post) => post.tags?.includes(selectedTag))
  : posts;

  return (
    <>
      <div className="tags-container ">
        <button
          className={`tag ${selectedTag === '' ? 'active' : ''}`}
          onClick={() => handleTagClick('')}
        >
          All
        </button>
        {posts.reduce((tags, post) => {
  const uniqueTags: string[] = posts.reduce<string[]>((tags, post) => {
    post.tags?.forEach((tag) => {
      if (tag && !tags.includes(tag)) {
        tags.push(tag);
      }
    });
    return tags;
  }, []);
  return tags;
}, []).map((tag: string) => ( // Specify the type of tag as string
  <button
    key={tag}
    className={`tag ${selectedTag === tag ? 'active' : ''}`}
    onClick={() => handleTagClick(tag)}
  >
    {tag}
  </button>
))}
      </div>

     
     <Carousel responsive={responsive}>
        {filteredPosts.map((post) => (
          <div
          className='cursor-pointer'
           key={post.id}>
            <div
           
              className="relative mt-3 p-4"
            >

              <Image src={post.images[0].image} alt="product Image" width={300} height={500} />
              <div className="parent-container">
                <button className="review-button" onClick={handleToggleDetails}>
                  Quick Review
                </button>
              </div>

              <a
                className="bg-gradient-to-r from-red-600 to-[#bb0004] rounded-full py-2 px-4 w-[50%] my-2 text-sm text-white hover:bg-purple-700 flex flex-row justify-center items-center ml-[50px] mt-[20px]"
                href="#"
              >
                {post.title}
              </a>

              {hoveredSlide === post.id && (
                <div className="absolute top-0 right-[30%] bg-black p-[10px] rounded-md">
                  <FaHeart
                    size={20}
                    color={isFavorite(post.id) ? 'red' : 'white'}
                    className="transition duration-300 transform hover:scale-125 cursor-pointer"
                  />
                </div>
              )}
            </div>
          
          </div>
        ))}
      </Carousel>
     

      {showDetails && filteredPosts.map((post) => <Skeletonn selectedItem={post} />)}
    </>
  );
};

export default MyCarousel;
