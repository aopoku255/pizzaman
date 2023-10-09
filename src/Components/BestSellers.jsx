import React from 'react'
import sellers from './../assets/truck.jpg'
import SellersData from '../Data/Sellers'
import Underline from './Underline'
const BestSellers = () => {
  return (
    <div className='relative  mt-2 pb-20'>
      <div className="absolute top-0 left-0 h-full w-full  overflow-x-hidden"
        style={{
            backgroundImage: `url(${sellers})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'

        
        }}
        >
     

       
       </div>
       <div className="absolute top-0 left-0 w-full h-full bg-black opacity-80"></div>
          <div className='relative flex flex-col justify-center items-center pt-20'>
            <h4 className='font-custom font-bold md:text-6xl text-5xl text-white'>Best Sellers</h4> 
            <Underline/>
            <div className='relative lg:grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10 justify-center pt-10'>
              {SellersData.map(seller => (
                <div className='mt-10' key={seller.id} >
                  <img src={seller.img} alt="" className='lg:h-60 lg:w-64 text-center w-[22rem] object-cover rounded-sm'/>
                  <div className='flex flex-col justify-center items-center'>
                    <span className='text-white  text-2xl pt-3'>{seller.title}</span>
                    <button className='text-red-500 border border-red-600 px-5 rounded-sm py-2 mt-5 hover:bg-red-600 hover:text-white hover:transition-all '>Order Now</button>
                  </div>
                  
                </div>
              ))}
              
            </div>
            <button className="px-6 py-3 mt-20 bg-red-700 text-white rounded hover:bg-red-600 font-bold border-b-4 border-solid border-green-600">SEE TODAY'S MENU</button>
          </div>
    </div>
  )
}

export default BestSellers