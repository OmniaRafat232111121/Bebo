import React from 'react';
import Image from 'next/image';
import Head from 'next/head';
import aboutImage from '../../public/images/s/black1.jpg';
import aboutImage2 from '../../public/images/s/white2.jpg';
import aboutImage3 from '../../public/images/s/blackk.jpg';
import aboutImage4 from '../../public/images/s/white.jpg';
import rewardImage from '../../public/images/s/reward1.jpg';
import rewardImage2 from '../../public/images/s/reward2.jpg';

const About = () => {
  return (
    <div dir="rtl" className='mt-[140px] mx-auto text-center 2xl:px-[200px]'>
      <Head>
        <title>About a Bebyon</title>
        <meta name="description" content="صفحة تعريف بمين هو بيبيون؟" />
      </Head>
      <div className="grid grid-cols-1 2xl:grid-cols-2 ">
        <div className='animate__animated animate__backInDown animate_slower 
        grid xl:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-2  gap-x-3 mt-[40px] group-hover'>
          <Image
            src={aboutImage}
            alt="إلياس"
            width={300}
            height={400}
            className="cursor-pointer w-[90%] mx-auto  h-[400px] mt-[30px] ml-3 rounded-md hover:scale-90 duration-300"
            loading="lazy"
          />
          <Image
            src={aboutImage2}
            alt="إلياس"
            width={300}
            height={400}
            className="cursor-pointer w-[90%] mx-auto  h-[400px] mt-[30px] ml-3 rounded-md hover:scale-90 duration-300"
            loading="lazy"
          />
        
        <Image
            src={aboutImage3}
            alt="إلياس"
            width={300}
            height={400}
            className="cursor-pointer w-[90%] mx-auto  h-[400px] mt-[30px] ml-3 rounded-md hover:scale-90 duration-300"
            loading="lazy"
          />
           <Image
            src={aboutImage4}
            alt="إلياس"
            width={300}
            height={400}
            className="cursor-pointer w-[90%] mx-auto  h-[400px] mt-[30px] ml-3 rounded-md hover:scale-90 duration-300"
            loading="lazy"
          />
        
        </div>

        <div className="animate__animated animate__backInUp text-right xl:w-[100%] p-4">
          <h1 className="text-2xl font-bold text-[#bb0004] mb-1">مين هو بيبيون؟</h1>
          <p>
            من خلال دراسته وخبرته في مجال التصميم والتصنيع وذلك في بدايه عام 2016 تم تأسيس مصنع بواسطة خاله ومن هنا بدأ إلياس في محاولة تطوير تصاميم البدلة بشكل مختلف تتناسب مع صيحات الموضه الجديده وأخذ إلياس حبه وهوايته لأعمال المودل والتصوير وسيله لوصول تصمايمه إلي المجتمع ومن هنا تم تأسيس براند إلياس من قبل الياس واخوه محمد في بداية عام 2022 ب افتتاح اول فرع وذلك في تاريخ 6 / 1 / 2022 وبعد ذلك تم تطوير الفكرة من خلال إهتمامه بالتفاصيل وتم وصول أعماله وتصاميمه الي المجتمع ورحب جميع الفئات ( فنانين - رجال الأعمال - اصحاب المهن الحكوميه ) من خلال السوشيال ميديا .وتم اخذ خطة بإستيراد خامات وإكسسوارات تركيه بأعلي جوده وتم صنع جميع المنتجات ولم يكن هذا كافي بالنسبه له وتم إفتتاح الفرع الثاني له في 1 / 12 / 2022 في عباس العقاد بخامات وإكسسوارات بأعلي جوده بأسم إلياس وهذا فخر ان تكون الصناعه مصريه.
          </p>
          <h6 className='mt-[80px] text-2xl font-bold text-[#bb0004]'>الأهداف</h6>
          <ul>
            <li>1- تصاميم مميزه للبدلة</li>
            <li>2- تطوير الموضه في مصر وجعلها تتنافس مع البلاد الرائده في مجال الأزياء</li>
            <li>3- الاهتمام بالمناسبات التي تخص البدلة من افراح واعمال فنيه ورسميه</li>
            <li>4- تغير نظرة المجتمع في الموضه</li>
            <li>5- تحقيق وصول نظرة المجتمع بإرتداء الأزياء المناسبه له</li>
            <li>6- الوصول الي نسبه اكثر من الأشخاص من خلال السوشيال ميديا</li>
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-1 2xl:grid-cols-2">
        <div className="text-right xl:w-[100%] p-4 animate__animated animate__fadeInRight animate__delay-2s">
          <h6 className='mt-[80px] text-2xl font-bold text-[#bb0004]'>الإنجازات</h6>
          <p className="mb-10">1- حصل علي أفضل مصمم أزياء في مهرجان ميس نايل 2022</p>
          <p className="mb-10">2- حصل علي أفضل مصمم أزياء في مهرجان VIP</p>
          <p className="mb-10">3- حصل علي أفضل مصمم أزياء مرتين علي التوالي من مهرجان ميس ميكب</p>
        </div>
        <div className='grid grid-cols-2 gap-x-5 mt-[40px]  group-hover animate__animated animate__fadeInLeft animate__delay-1s'>
          <Image
            src={rewardImage}
            alt="جوائز"
            width={250}
            height={400}
            className="cursor-pointer w-full h-[400px] mt-[30px] rounded-md hover:scale-110 duration-300"
            loading="lazy"
          />
          <Image
            src={rewardImage2}
            alt="جوائز"
            width={250}
            height={400}
            className="cursor-pointer w-full h-[400px] rounded-md hover:scale-110 duration-300"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
