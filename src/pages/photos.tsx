import React from 'react'
import numberone from '../../public/images/s/2.png'
import numbertwo from '../../public/images/s/3.png'
import numberthree from '../../public/images/s/4.png'
import Image from 'next/image';

const imageArray = [
  {
    id: 1,
    src: numberone,
    alt: 'Image 1',
  },
  {
    id: 2,
    src: numbertwo,
    alt: 'Image 2',
  },
  {
    id: 3,
    src: numberthree,
    alt: 'Image 3',
  },
  {
    id: 4,
    src: numberone,
    alt: 'Image 5',
  },
  {
    id: 5,
    src: numbertwo,
    alt: 'Image 6',
  },
  {
    id: 6,
    src: numberthree,
    alt: 'Image 4',
  },
];


const photos = () => {
  return (
    <div dir="rtl" className='mt-[140px]  mb-4 relative '>
      <h2 className='text-2xl flex items-center justify-center  '>معرض الصور</h2>
      <div className='w-[100px] h-1 bg-[#bb0004] absolute  
      right-[900px] top-[40px]  '></div>
      <div className="  
      grid 2xl:grid-cols-3 xl:grid-cols-2 lg:grid-cols-1 gap-4 mt-8">
        {imageArray.map((image) => (
          <div key={image.id} className="flex items-center justify-center group-hover">
            <Image src={image.src}
            width={" "} 
            height={" "}
            alt={image.alt} className="w-[50%] object-fit h-auto shadow-lg rounded-lg hover:scale-90 duration-400 cursor-pointer" />
          </div>
        ))}
      </div>

    </div>
  )
}

export default photos
