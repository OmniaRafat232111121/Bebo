import React, { useState, useEffect } from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import { MdClose } from 'react-icons/md';
import { PostContent } from '../lib/posts';

interface SkeletonComponentProps {
  selectedItem:PostContent;
}

const MyComponent: React.FC<SkeletonComponentProps> =
 ({ selectedItem}) => {
   const { id, images, title, color, size, pieces, address } = selectedItem;
  const [isLoading, setIsLoading] = useState(false); // Set initial loading state to true
  const [isBannerVisible, setIsBannerVisible] = useState(true);
  console.log(isBannerVisible)
  const closeBanner = () => {
    setIsBannerVisible(false);
    
  };
  useEffect(() => {
    // Simulating data loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, []);
  const imageItems = images
  ? images.map((image) => ({
      original: image.image,
    }))
  : [];

  return (

   <>
      {isBannerVisible && (
       <div className= {`fixed lg:left-[50%] lg:top-[-20px]  md:left-[0px]  md:top-[-30px] sm:left-[0px]  sm:w-[70%] sm:top-[150px] 
        inset-0 bg-black bg-opacity-30 flex z-[1000]
         text-[#000]`}>

        <div className='lg:w-[50%] text-black h-full fixed 
         bg-white   w-[100%] top-[150px] sm:top-0 sm:mt-[120px] '>
          <div className='flex justify-center lg:mt-[100px] sm:mt-[100px]  '>
            <div className='my-custom-gallery'>
              {isLoading ? (
                <div className='h-80 bg-gray-300 animate-pulse'></div>
              ) : (
                
                <ImageGallery items={imageItems} />

              )}
            </div>
          </div>

          {isLoading ? ( // Render skeleton placeholders when loading
            <div className='mt-1'>
              <div className='h-10 mt-5 bg-gray-300 animate-pulse'></div>
              <div className='h-10 mt-5 bg-gray-300 animate-pulse'></div>
              <div className='h-10 mt-5 bg-gray-300 animate-pulse'></div>
              <div className='h-10 mt-5 bg-gray-300 animate-pulse'></div>
            </div>
          ) : (
            <div className='mt-3'>
              <h3 className='border-b-2 text-center border-black pb-2'>
                {selectedItem.title}
              </h3>
              <div>
                <p className='text-right border-b-2 text-gray-600 border-black p-2'>
                  اللون: {selectedItem.color}
                </p>
                <p className='text-right border-b-2 text-gray-600 border-black p-2'>
                  المقاسات: {selectedItem.size}
                </p>
                <p className='text-right border-b-2 text-gray-600 border-black p-2'>
                  القطع: {selectedItem.pieces}
                </p>
                <p className='text-right border-b-2 text-gray-600 border-black p-2'>
                  متواجد بكثرة في فرع: {selectedItem.address}
                </p>
              </div>
            </div>
          )}

         

          <div >
          <button
  className='absolute top-[20px] right-[40px] 
  bg-[#ff0000] rounded-md border-0
  text-white text-3xl cursor-pointer focus:outline-none'
  onClick={closeBanner}
  title='Close'
  aria-label='Close'
>
  <MdClose className='h-8 w-8' />
</button>
            </div>
        </div>
        </div>
      )}
    
   </>
  );
};

export default MyComponent;