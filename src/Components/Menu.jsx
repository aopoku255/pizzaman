import React, { useState } from 'react';
import Categories from './Categories';
import MenuData from '../Data/Menu';
import Underline from './Underline';

const Menu = () => {
  const [MenuItems, setMenuItems] = useState(MenuData)
  const [categories, setCategories] = useState([]);
  const [active, setActive] = useState(false);

  const handleClick = (menuItem) => {
    setMenuItems(MenuData)
    if(MenuData) {
      setActive(MenuData);
     return;
    }
  }
 

  const filterItems = (category) => {
  
    const newItems = MenuData.filter((item) => item.category === category)
    setMenuItems(newItems);
  }
  
  return (
    <div className='flex flex-col bg-[#1a1814] mt-10  pt-20 mb-20'>
     <div className='lg:pl-20 pl-8'>
        <div className='flex flex-row gap-x-3 items-center'>
          <h4 className='font-custom font-bold text-2xl text-white'>Menu</h4>
          <div className='bg-red-600 w-32 h-[1px]'></div>
        </div>
        <h4 className='md:text-4xl text-3xl font-semibold text-red-600 font-custom'>Check Our Tasty Menu</h4>
       <div className='flex md:flex-row md:items-center mt-6 md:justify-center'>
          {/* <button
            className={`text-white md:px-4 px-2  py-1 hover:bg-red-700 ${active === MenuData ? 'bg:red-500' : ''}`} onClick={handleClick}
            >
            All
          </button> */}
              <Categories filterItems={filterItems}/>
       </div>
     </div>
      <div className=''></div>
      <div className='grid md:grid-cols-2 md:px-10 py-16 gap-y-6 md:gap-x-5'>
        {MenuItems.map((menuItem) => {
          const {id, title, image, price, desc} = menuItem;
          return <article key={id} className='grid grid-cols-3 px-5'>
          <div className='overflow-hidden'>
            <img src={image} alt={title} className='md:w-24 md:h-24 w-20 h-20 rounded-full' />
          </div>

            <div className='md:pl-4 p-2 col-span-2 lg:-ml-[5rem] md:-ml-6 -ml-2'>
              <header className='flex flex-row items-center md:gap-x-2 gap-x-2'>
                <h4 className='md:text-xl text-white font-custom'>{title}</h4>
                <div className='md:w-52 w-32 border-t border-dotted border-gray-400'></div>
                <h4 className='text-red-600 font-bold'>Ghc{price}</h4>
              </header>
              <p className='py-3 text-white'>{desc}</p>
            </div>
          </article>
        })}

      </div>
      {/* <div className='flex flex-row items-center justify-center'>
      <button className="px-12 py-3 w-44 flex flex-row items-center justify-center my-5 bg-red-700 text-white rounded hover:bg-red-600 font-bold border-b-4 border-solid border-green-600">SEE MORE</button>
      
      </div> */}
    </div>
  );
}

export default Menu;
