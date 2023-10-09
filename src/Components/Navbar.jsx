// import React, { useState } from 'react';
// import {Link } from 'react-router-dom';
// import {BsFillTelephoneFill} from 'react-icons/bs'
// import {AiOutlineMail} from 'react-icons/ai'
// import {FaFacebookF} from 'react-icons/fa'
// import {FaTwitter} from 'react-icons/fa'
// import {FaInstagram} from 'react-icons/fa'
// import {GiHamburgerMenu} from 'react-icons/gi'
// import {AiOutlineClose} from 'react-icons/ai'
// // import logo from '../assets/logo.png'
// import logoImg from '../assets/logo.png'

// const Navbar = () => {
//   const [toggleMenu, setToggleMenu] = useState(false);

//   return (
//     <section className='w-full absolute md:flex-col z-10 flex flex-row'>
//       <div className='md:flex md:flex-col hidden'>
//           <div className='flex flex-row justify-between px-10 items-center pb-5'>
//                <div className='flex flex-row gap-x-5 mt-5'>
//                   <div className='flex flex-row items-center gap-2'>
//                     <BsFillTelephoneFill className='text-white'/>
//                     <Link to='/contact' className='text-white hover:text-red-500'>0302753430</Link>
//                   </div>
//                   <div className='flex flex-row items-center gap-2'>
//                     <AiOutlineMail className='text-white'/>
//                     <Link to='/contact' className='text-white hover:text-red-500'>info@pizzaman.com</Link>
//                   </div>
//               </div>
//             <div className='flex flex-row items-center gap-7'>
//                 <div className='text-white flex flex-row gap-x-4 mt-5 pl-3'>
//                       <FaFacebookF/>
//                       <FaTwitter/>
//                       <FaInstagram/>
//                   </div>
                  
//                   <Link to='' className='text-white bg-red-600 px-5 py-1.5 mt-4 rounded hover:bg-red-500 font-bold'>
//                       Order Now
//                   </Link>
//             </div>   
//           </div>
//           <div className='bg-white  h-[1px]'></div>
//           <div className='flex flex-row items-center px-10'>
//             <div className='relative flex-shrink-0'>
//                 <img src={logoImg} alt="" className='w-[100px] object-contain'/>
//             </div>
//               <div className='md:flex hidden flex-row ml-80 text-white font-[500] '>
//                 <a href="/" className="px-4 py-2 mx-2 text-lg hover:text-red-500">Home</a>
//                 <a href="/about" className="px-4 py-2 text-lg mx-2 hover:text-red-500">About Us</a>
//                 <a href="/branches" className="px-4 py-2 text-lg mx-2 hover:text-red-500">Our Branches</a>
//                 <a href="/vacancies" className="px-4 py-2 text-lg mx-2 hover:text-red-500">Vacancies</a>
//                 <a href="/contact" className="px-4 py-2 mx-2 text-lg hover:text-red-500">Contact</a>
//             </div>
//           </div>
//       </div>






//       <div className='flex flex-row items-center gap-60'>
//           <div className='md:relative md:flex-shrink-0 hidden'>
//             <img src={logoImg} alt="" className='w-[100px] object-contain'/>
//           </div>
//         {toggleMenu ? (
//           <AiOutlineClose font={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(false)}/>
//         ): (
//           <GiHamburgerMenu font={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(true)}/>
//         )}
//         {toggleMenu && (
        
//             <div className='text-xl w-full my-2'>
//               <AiOutlineClose onClick={() => setToggleMenu(false)} color="white"/>
//             <div className='flex flex-col text-white'>
//                 <a href="/" className="  mx-2 text-lg hover:text-red-500">Home</a>
//                   <a href="/about" className="  text-lg mx-2 hover:text-red-500">About Us</a>
//                   <a href="/branches" className="  text-lg mx-2 hover:text-red-500">Our Branches</a>
//                   <a href="/vacancies" className="  text-lg mx-2 hover:text-red-500">Vacancies</a>
//                   <a href="/contact" className="  mx-2 text-lg hover:text-red-500">Contact</a>
//             </div>
//             </div>
          
//         )}
  
//       </div>
      
//     </section>
//   );
// }

// export default Navbar;


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';
import logoImg from '../assets/logo.png';

const Navbar = () => {
  const about = [
    "About Us",
    "Our Team"
  ];

  const [toggleMenu, setToggleMenu] = useState(false);
  const [hover, setHover] = useState(false);

  const handleMouseEnter = () => {
    setHover(!hover);
  }

  const handleMouseLeave = () => {
    setHover(false);
  }

  return (
    <section className="w-full absolute md:flex-col z-10 flex flex-row ">
      {/* Desktop Navbar */}
      {/* <div className="md:flex md:flex-col hidden"> */}
        <div className="md:flex md:flex-row hidden justify-between px-10 items-center pb-5">
          <div className="flex flex-row gap-x-5 mt-5">
            <div className="flex flex-row items-center gap-2">
              <BsFillTelephoneFill className="text-white" />
              <Link to="/contact" className="text-white hover:text-red-500">
                0302753430
              </Link>
            </div>
            <div className="flex flex-row items-center gap-2">
              <AiOutlineMail className="text-white" />
              <Link to="/contact" className="text-white hover:text-red-500">
                info@pizzaman.com
              </Link>
            </div>
          </div>
          <div className="flex flex-row items-center gap-7">
            <div className="text-white flex flex-row gap-x-4  mt-5 pl-3">
              <a className="hover:text-red-500" href=''><FaFacebookF /></a>
              <a className="hover:text-red-500" href=''><FaTwitter /></a>
              <a className="hover:text-red-500" href=''><FaInstagram /></a>
            </div>

            <Link
              to=""
              className="text-white bg-red-600 px-5 py-1.5 mt-4 rounded hover:bg-red-500 font-bold"
            >
              Order Now
            </Link>
          </div>
        </div>
        <div className="bg-white h-[1px] opacity-30" />

        <div className="flex -mt-3 flex-row items-center justify-between px-8 w-full
    ">
          <div className="relative">
            <img src={logoImg} alt="" className="w-[100px] object-contain" />
          </div>
          <div className="md:flex hidden flex-row ml-80 text-white font-custom">
            <a href="/" className="px-4 py-2 mx-2 text-lg hover:text-red-500">
              Home
            </a>
            <a onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
              href="/about"
              className="px-4 py-2 text-lg mx-2 hover:text-red-500"
            >
              About Us
            </a>
            {/* {hover ? (
              <div className='absolute -bottom-7 justify-center z-10 px-2 text-center   bg-[#222222] rounded-sm flex flex-col -top-'>
                <span className='text-lg'>About Us</span>
                <div className='w-full bg-[white] h-[1px]'></div>
                <span className='text-lg'>Team</span>
              </div>
            ): (
              null
            )} */}
            <a
              href="/branches"
              className="px-4 py-2 text-lg mx-2 hover:text-red-500"
            >
              Our Branches
            </a>
            <a
              href="/vacancies"
              className="px-4 py-2 text-lg mx-2 hover:text-red-500"
            >
              Vacancies
            </a>
            <a
              href="/contact"
              className="px-4 py-2 mx-2 text-lg hover:text-red-500"
            >
              Contact
            </a>
          </div>

            {/* Mobile Navbar (Hamburger Menu) */}
      <div className="flex flex-row items-center ">
        {/* <div className=" top-1 ">
          <img src={logoImg} alt="" className="w-[100px] object-contain" />
        </div> */}
        <div className=''>
           {/* <div className='item'> */}
              {toggleMenu ? (
                  <AiOutlineClose  
                    className="text-white cursor-pointer"
                    onClick={() => setToggleMenu(false)}
                  />
                ) : (
                  <GiHamburgerMenu
                    className="text-white md:hidden cursor-pointer"
                    onClick={() => setToggleMenu(true)}
                    size={27}
                  />
                )}
           {/* </div> */}
          
          {toggleMenu && (
            <div className="fixed top-6 right-0 z-10 p-3 w-[70vw] h-sreen shadow-2xl bg-[#1a1814] opacity-80 flex flex-col justify-start items-end rounded-md ">
              <AiOutlineClose
              className='cursor-pointer'
                onClick={() => setToggleMenu(false)}
                color="white"
                size={27}
              />
              <div className="flex flex-col py-4 text-white">
                <a href="/" className="mx-2 text-lg hover:text-red-500">
                  Home
                </a>
                <a href="/about" className="text-lg pt-4  mx-2 hover:text-red-500">
                  About Us
                </a>
                <a href="/branches" className="text-lg pt-4 mx-2 hover:text-red-500">
                  Our Branches
                </a>
                <a href="/vacancies" className="text-lg pt-4 mx-2 hover:text-red-500">
                  Vacancies
                </a>
                <a href="/contact" className="mx-2 pt-4 text-lg hover:text-red-500">
                  Contact
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
        </div>
      {/* </div> */}

    

    </section>
  );
};

export default Navbar;
