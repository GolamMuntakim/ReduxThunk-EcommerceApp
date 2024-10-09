// import Image from 'next/image';
// import React from 'react';
// import { FaLongArrowAltUp } from 'react-icons/fa';
// import { FaHeart } from "react-icons/fa6";
// const BlogLeft = () => {
//   return (
//     <>
//       <div className='pt-16 h-screen w-[800px]'>
//       <div className='flex  gap-8 h-[350px] '>
//         {/* image */}
//         <div className='container w-[400px] '>
//         <div className='absolute  bg-white bg-opacity-40 h-12 w-12 rounded-full  z-10 flex justify-center items-center mt-2 left-96'>
//         <FaHeart className=' text-white w-8 h-8 z-20 ' />
//         </div>
//           <Image
//            width="400"
//            height="300" 
//            src="/blog1.jpg" 
//            alt="blog1"
//            className='rounded-md relative z-0'
//             />
//         </div>
//         {/* text */}
//         <div className='w-[330px] space-y-10'>
//             <div className='flex justify-between'>
//              <ul className='list-disc text-[#1877F2]'><li>Nov 29,2023</li></ul>
//              <Image width="30" height="30" src="/love-react.png" alt="react"/>
//             </div>
//             <h1 className='font-bold text-xl'>Innovating for tomorrow.</h1>
//             <p className='text-[#555555] text-sm'>
//               Driving progress through cutting-edge technology <br /> and forward-thinking solutions that shape the future <br /> of industries.
//               </p>
//             <div className="flex gap-1  group">
//             <button className="btn bg-[#282828] text-white rounded-tl-full rounded-bl-full rounded-tr-4 rounded-br-4 p-3 group-hover:bg-gray-600 pl-4 pr-4">
//               Read more
//               </button>
//             <button className="bg-[#282828] rounded-tl-4 rounded-tr-full rounded-br-full rounded-l-4 p-3 group-hover:bg-gray-600">  
//             <FaLongArrowAltUp
//                 className="icn-2 transform rotate-45  group-hover:rotate-90 transition-transform duration-300 text-white"
                
//               />
//               </button>
//             </div>
//         </div>
//       </div>
//       <div className='flex   gap-8 h-[350px]'>
//         {/* image */}
//         <div className='container w-[400px] '>
//         <div className='absolute  bg-white bg-opacity-40 h-12 w-12 rounded-full  z-10 flex justify-center items-center mt-2 left-96'>
//         <FaHeart className=' text-white w-8 h-8 z-20 ' />
//         </div>
//           <Image
//            width="400"
//            height="300" 
//            src="/blog2.jpg" 
//            alt="blog1"
//            className='rounded-md relative z-0'
//             />
//         </div>
//         {/* text */}
//         <div className='w-[330px] space-y-9'>
//             <div className='flex justify-between'>
//              <ul className='list-disc text-[#1877F2]'><li>Nov 29,2023</li></ul>
//              <Image width="30" height="30" src="/love-react.png" alt="react"/>
//             </div>
//             <h1 className='font-bold text-xl'>Empowering Business Growth.</h1>
//             <p className='text-[#555555] text-sm'>
//             Providing strategic solutions that foster sustainable <br /> growth and success for businesses across diverse <br /> sectors.
//               </p>
//             <div className="flex gap-1  group">
//             <button className="btn bg-[#282828] text-white rounded-tl-full rounded-bl-full rounded-tr-4 rounded-br-4 p-3 group-hover:bg-gray-600 pl-4 pr-4">
//               Read more
//               </button>
//             <button className="bg-[#282828] rounded-tl-4 rounded-tr-full rounded-br-full rounded-l-4 p-3 group-hover:bg-gray-600">  
//             <FaLongArrowAltUp
//                 className="icn-2 transform rotate-45  group-hover:rotate-90 transition-transform duration-300 text-white"
                
//               />
//               </button>
//             </div>
//         </div>
//       </div>
//       <div className='flex   gap-8 h-[350px]'>
//         {/* image */}
//         <div className='container w-[400px] '>
//         <div className='absolute  bg-white bg-opacity-40 h-12 w-12 rounded-full  z-10 flex justify-center items-center mt-2 left-96'>
//         <FaHeart className=' text-white w-8 h-8 z-20 ' />
//         </div>
//           <Image
//            width="400"
//            height="300" 
//            src="/blog3.jpg" 
//            alt="blog1"
//            className='rounded-md relative z-0'
//             />
//         </div>
//         {/* text */}
//         <div className='w-[330px] space-y-10'>
//             <div className='flex justify-between'>
//              <ul className='list-disc text-[#1877F2]'><li>Nov 29,2023</li></ul>
//              <Image width="30" height="30" src="/love-react.png" alt="react"/>
//             </div>
//             <h1 className='font-bold text-xl'>Solutions Built for You.</h1>
//             <p className='text-[#555555] text-sm'>
//             Tailored, scalable digital solutions that align perfectly <br /> with your company's unique goals and vision.
//               </p>
//             <div className="flex gap-1  group">
//             <button className="btn bg-[#282828] text-white rounded-tl-full rounded-bl-full rounded-tr-4 rounded-br-4 p-3 group-hover:bg-gray-600 pl-4 pr-4">
//               Read more
//               </button>
//             <button className="bg-[#282828] rounded-tl-4 rounded-tr-full rounded-br-full rounded-l-4 p-3 group-hover:bg-gray-600">  
//             <FaLongArrowAltUp
//                 className="icn-2 transform rotate-45  group-hover:rotate-90 transition-transform duration-300 text-white"
                
//               />
//               </button>
//             </div>
//         </div>
//       </div>
//       <div className='flex   gap-8 h-[350px]'>
//         {/* image */}
//         <div className='container w-[400px] '>
//         <div className='absolute  bg-white bg-opacity-40 h-12 w-12 rounded-full  z-10 flex justify-center items-center mt-2 left-96'>
//         <FaHeart className=' text-white w-8 h-8 z-20 ' />
//         </div>
//           <Image
//            width="400"
//            height="300" 
//            src="/blog4.jpg" 
//            alt="blog1"
//            className='rounded-md relative z-0'
//             />
//         </div>
//         {/* text */}
//         <div className='w-[330px] space-y-9'>
//             <div className='flex justify-between'>
//              <ul className='list-disc text-[#1877F2]'><li>Nov 29,2023</li></ul>
//              <Image width="30" height="30" src="/love-react.png" alt="react"/>
//             </div>
//             <h1 className='font-bold text-xl'>Transforming Ideas into Reality.</h1>
//             <p className='text-[#555555] text-sm'>
//             Bringing innovative concepts to life with precision and <br /> creativity, delivering tangible outcomes for your <br /> business.
//               </p>
//             <div className="flex gap-1  group">
//             <button className="btn bg-[#282828] text-white rounded-tl-full rounded-bl-full rounded-tr-4 rounded-br-4 p-3 group-hover:bg-gray-600 pl-4 pr-4">
//               Read more
//               </button>
//             <button className="bg-[#282828] rounded-tl-4 rounded-tr-full rounded-br-full rounded-l-4 p-3 group-hover:bg-gray-600">  
//             <FaLongArrowAltUp
//                 className="icn-2 transform rotate-45  group-hover:rotate-90 transition-transform duration-300 text-white"
                
//               />
//               </button>
//             </div>
//         </div>
//       </div>

//       <div className='pb-2'>
//       <div className="flex justify-center gap-1  group">
//             <button className="btn bg-[#1877F2] text-white rounded-tl-full rounded-bl-full rounded-tr-4 rounded-br-4 p-3 group-hover:bg-gradient-to-br from-[#6d4cff] via-[#1177F2] to-[#1177F2] pl-4 pr-4">
//               See more Blogs
//               </button>
//             <button className="bg-[#1877F2] rounded-tl-4 rounded-tr-full rounded-br-full rounded-l-4 p-3 group-hover:bg-gradient-to-br from-[#6d4cff] via-[#1177F2] to-[#1177F2]">  
//             <FaLongArrowAltUp
//                 className="icn-2 transform rotate-45  group-hover:rotate-90 transition-transform duration-300 text-white"
//               />
//               </button>
//             </div>
//       </div>
            
//       </div>
//     </>
//   );
// };

// export default BlogLeft;