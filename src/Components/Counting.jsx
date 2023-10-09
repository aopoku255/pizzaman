import React from 'react';
import '../../src/index.css'
const Counting = () => {
  return (
    <div className='counting w-full h-[40rem] md:mt-2 '>
        <div className='text-white flex flex-col  items-center lg:justify-center pt-[10rem]'>
            <div>
               <h2 className='text-center lg:text-5xl md:text-5xl text-4xl  font-bold'>44+</h2>
               <span className='font-custom text-gray-400'>BRANCHES</span>
            </div>
                <div className='lg:gap-x-40  gap-x-40 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-2 md:items-center pt-20 '>
                    <div className='lg:ml-0 md:ml-0 ml-4'>
                        <h2 className=' lg:text-center md:text-center pl-1 lg:text-5xl md:text-5xl text-4xl font-bold'>4</h2>
                        <span className='font-custom lg:ml-10 md:ml-10  text-gray-400'>TRUCKS</span>
                    </div>
                    <div className='lg:ml-0 md:ml-0 ml-4'>
                        <h2 className='lg:text-center md:text-center  lg:text-5xl md:text-5xl text-4xl font-bold'>40</h2>
                        <span className='font-custom text-gray-400'>PHYSICAL SHOPS</span>
                    </div>
             

                    <div className='md:mt-0 mt-8 lg:ml-0 md:ml-0 ml-4'>
                        <h2 className='lg:text-center md:text-center  lg:text-5xl md:text-5xl text-4xl font-bold'>800+</h2>
                        <span className='font-custom text-gray-400'>ACTIVE WORKERS</span>
                    </div>
                    <div className='md:mt-0 mt-8 ml-4'>
                        <h2 className='lg:text-center md:text-center  lg:text-5xl md:text-5xl text-4xl font-bold'>1400</h2>
                        <span className='font-custom text-gray-400'>HOURS OF SUPPORT</span>
                    </div>

            </div>

        </div>
      
    </div>
  );
}

export default Counting;

// import React, { useState } from 'react';
// import CountUp from 'react-countup';
// import VisibilitySensor from 'react-visibility-sensor';
// import './styles.css';

// const Counting = () => {
//   const [countUpVisible, setCountUpVisible] = useState(false);

//   const handleVisibilityChange = (isVisible) => {
//     if (isVisible) {
//       setCountUpVisible(true);
//     }
//   };

//   return (
//     <div className='counting w-full h-96 mt-2'>
//       <div className='text-white flex flex-col items-center justify-center pt-20'>
//         <div>
//           <h2 className='text-center text-5xl font-bold'>
//             {countUpVisible ? <CountUp end={44} /> : '44'}
//           </h2>
//           <span className='font-custom text-gray-400'>BRANCHES</span>
//         </div>
//         <div className='gap-x-40 flex flex-row pt-10'>
//           {/* Repeat the same pattern for other numbers */}
//           <div>
//             <h2 className='text-center text-5xl font-bold'>
//               {countUpVisible ? <CountUp end={4} /> : '4'}
//             </h2>
//             <span className='font-custom text-gray-400'>TRUCKS</span>
//           </div>
//           {/* Add other number blocks here */}
//         </div>
//       </div>
//       <VisibilitySensor
//         partialVisibility
//         offset={{ bottom: 200 }}
//         onChange={handleVisibilityChange}
//       />
//     </div>
//   );
// };

// export default Counting;
