import React from 'react'
import Image from "next/image";
import aboutImage from '../../public/images/s/2.png'
import aboutImage2 from '../../public/images/s/4.png'
import rewardImage from '../../public/images/s/reward1.jpg'
import rewardImage2 from '../../public/images/s/reward2.jpg'
const about = () => {
  return (
    <div dir="rtl" className='mt-[140px]  mx-auto text-center 2xl:p-[200px]  '>
    <div className="grid grid-cols-1 2xl:grid-cols-2 ">
      <div className='grid grid-cols-2  mt-[40px] group-hover' >
       
        <Image
        width={50}
        height={50}
        src={aboutImage}
          alt="Image"
          className=" cursor-pointer w-full  w-[300px] h-[400px] mt-[30px] ml-3 rounded-md hover:scale-110 duration-300 "
        />
         <Image
        width={" "}
        height={" "}
        src={aboutImage2}
          alt="Image"
          className=" cursor-pointer w-full  w-[300px] h-[400px] rounded-md hover:scale-110 duration-300"
        />
      </div>
      <div className="text-right xl:w-[100%] p-4 ">
        <p className="text-2xl font-bold text-[#bb0004] mb-1  ">مين هو بيبيون؟</p>
        <p >
        من خلال دراسته وخبرته في مجال التصميم والتصنيع وذلك في بدايه عام 2016 تم تأسيس مصنع بواسطة خاله ومن هنا بدأ إلياس في محاولة تطوير تصاميم البدله بشكل مختلف تتناسب مع صيحات الموضه الجديده وأخذ إلياس حبه وهوايته لأعمال المودل والتصوير وسيله لوصول تصمايمه إلي المجتمع ومن هنا تم تأسيس براند إلياس من قبل الياس واخوه محمد في بداية عام 2022 ب افتتاح اول فرع وذلك في تاريخ 6 / 1 / 2022 وبعد ذلك تم تطوير الفكرة من خلال إهتمامه بالتفاصيل وتم وصول أعماله وتصاميمه الي المجتمع ورحب جميع الفئات ( فنانين - رجال الأعمال - اصحاب المهن الحكوميه ) من خلال السوشيال ميديا 
        .وتم اخذ خطة بإستيراد خامات وإكسسوارات تركيه بأعلي جوده وتم صنع جميع المنتجات ولم يكن هذا كافي بالنسبه له وتم إفتتاح الفرع الثاني له في 1 / 12 / 2022 في عباس العقاد بخامات وإكسسوارات بأعلي جوده بأسم إلياس وهذا فخر ان تكون الصناعه مصريه
        </p>

     
        <h6 className='mt-[80px] text-2xl font-bold text-[#bb0004]'>الاهداف</h6>
        <ol >
<li> 1- تصاميم مميزه للبدله  </li>
<li> 2- تطوير الموضه في مصر وجعلها تتنافس مع البلاد الرائده في مجال الأزياء   </li>
<li> 3- الاهتمام بالمناسبات التي تخص البدله من افراح واعمال فنيه ورسميه  </li>
<li> 4- تغير نظرة المجتمع في الموضه   </li>
<li> 5- تحقيق وصول نظرة المجتمع بإرتداء الأزياء المناسبه له </li>
<li> 6- الوصول الي نسبه اكثر من الأشخاص من خلال السوشيال ميديا  </li>
</ol>

      </div>
    </div>

    <div className="grid grid-cols-1 2xl:grid-cols-2 ">
     
      <div className="text-right xl:w-[100%] p-4 ">
        <h6 className='mt-[80px] text-2xl font-bold text-[#bb0004]'>الاهداف</h6>
        <p className=" mb-10">1- حصل علي أفضل مصمم أزياء في مهرجان ميس نايل 2022</p>
        <p className=" mb-10">2- حصل علي أفضل مصمم أزياء في مهرجان VIP</p>
        <p className=" mb-10">3- حصل علي أفضل مصمم أزياء مرتين علي التوالي من مهرجان ميس ميكب</p>

      </div>
      <div className='grid grid-cols-2  mt-[40px] group-hover' >
       
       <Image
       width={50}
       height={50}
       src={rewardImage}
         alt="Image"
         className=" cursor-pointer w-full  w-[300px] h-[400px] mt-[30px]  rounded-md hover:scale-110 duration-300 "
       />
        <Image
       width={" "}
       height={" "}
       src={rewardImage2}
         alt="Image"
         className=" cursor-pointer w-full  w-[300px] h-[400px] rounded-md hover:scale-110 duration-300"
       />
     </div>
    </div>

    </div>
  )
}

export default about
