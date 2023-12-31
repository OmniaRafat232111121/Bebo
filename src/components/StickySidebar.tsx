// import React, { useEffect, useState } from 'react';
// import { FaHeart } from 'react-icons/fa';
// import Tabs from './Tab';
// import Tab from './Tab';
// import { FiX } from 'react-icons/fi';

// const Sidebar = () => {
//     const [isOpen, setIsOpen] = useState(false);
//     const [isSticky, setIsSticky] = useState(true);

//     const handleToggle = () => {
//       setIsOpen(!isOpen);
//     };
    

//   return (
//     <div  dir="rtl" id="sidebar"
//     className={`lg:bg-gray-200 lg:w-full px-5 py-8 flex lg:flex-col lg:items-start md:flex md:flex-row md:w-full h-full`}

//      >

//       <div >
//               <h2 className="text-xl font-bold mb-4 text-red-700  ">تفاصيل</h2>

//         <div className='bg-white p-[20px]  w-[500px] rounded-lg flex justify-between md:w-full'>
            
//             <div>
//             <h2 className="text-2xl font-bold mb-4">بدلة فيت  اسود</h2>
//             <p className="text-lg">تصميم أنيق ومريح للمناسبات والافراح.</p>
//             <div className="border-b-2 mt-4  border-solid border-gray-300"></div>
//             <p className='mt-4'>السعر نقدا</p>
//             <h3 className='mt-2'>699EGP</h3>
//             <button       className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-2"
//             >اضف الي السلة
//             </button>
//             </div>
//             <div>
//             <FaHeart size={20}/>
//             </div>


//         </div>
        
//             <Tab
//         icon={<FiX />}
//         title="وصف"
//         color="اسود"
//         size="يوجد جميع المقاسات مع امكانية تفصيل البدلة"
//         pieces='القطع : بليزر + بنطلون + قميص'
//         address='متواجد بكثرة في فرع: متواجد بكثرة في فرع : 33 شارع الأسكندرية'




//       />
//         <Tab
//         icon={<FiX />}
//         title="التسليم والارجاع والاستبدال"
//         des='إذا لم تكن راضيًا عن منتج اشتريته ، يمكنك إعادته خلال 30 يومًا بموجب ضمان العلامة التجارية لشركة بيبيون'




//       />
    
            
         
//       </div>
      
//     </div>
//   );
// };

// export default Sidebar


import React, { useState } from 'react';
import { FaHeart } from 'react-icons/fa';
import Tabs from './Tab';
import Tab from './Tab';
import { FiX } from 'react-icons/fi';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(true);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      dir="rtl"
      id="sidebar"
      className={`lg:bg-gray-200 lg:w-full px-5 py-8 flex lg:flex-col lg:items-start md:flex md:flex-row md:w-full h-full`}
    >
      <div > 
        <h2 className="text-xl font-bold mb-4 text-red-700 ">تفاصيل</h2>

        {/* <div className="bg-white   sm:w-full p-5 md:p-8 w-full  rounded-lg flex justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-4">بدلة فيت اسود</h2>
            <p className="text-lg">تصميم أنيق ومريح للمناسبات والافراح.</p>
            <div className="border-b-2 mt-4 border-solid border-gray-300"></div>
            <p className="mt-4">السعر نقدا</p>
            <h3 className="mt-2">699EGP</h3>
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-2">
              اضف الي السلة
            </button>
          </div>
          <div>
            <FaHeart size={20} />
          </div>
        </div> */}

        {/* <Tab
          icon={<FiX />}
          title="وصف"
          className="bg-white   sm:w-full p-5 md:p-8 w-full md:w-[500px] rounded-lg flex justify-between"
          color="اسود"
          size="يوجد جميع المقاسات مع امكانية تفصيل البدلة"
          pieces="القطع : بليزر + بنطلون + قميص"
          address="متواجد بكثرة في فرع: متواجد بكثرة في فرع : 33 شارع الأسكندرية"
        />
        <Tab
          icon={<FiX />}
          title="التسليم والارجاع والاستبدال"
          des="إذا لم تكن راضيًا عن منتج اشتريته ، يمكنك إعادته خلال 30 يومًا بموجب ضمان العلامة التجارية لشركة بيبيون"
        /> */}
      </div>
    </div>
  );
};

export default Sidebar;
