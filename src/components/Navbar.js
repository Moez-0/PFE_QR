import React from 'react';
import { FaBars , FaTimes , FaAngleDoubleRight , FaAngleDoubleUp  } from 'react-icons/fa';
import ThemeSwitcher from './global/ThemeSwitcher';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const MenuLinks = [
    {
    title: 'Features',
    subMenu: [
        {title: 'Inventory', url: '/inventory-management'},
        {title: 'Order', url: '/order-management'},
        {title: 'Shipping ', url: '/shipping-management'},
        {title: 'Warehouse ', url: '/warehouse-management'},
        {title: 'Barcode Scanning', url: '/barcode-scanning'},
    ],
    },
  {

    title: 'Pricing',
    url: '/pricing',
    },
    {
    title: 'Industries',
    url: '/industries',
    },
    {
    title: 'Resources',

    subMenu: [
        {title: 'Blog', url: '/blog'},
        {title: 'User guide', url: '/docs'},

    ],
    },
    {
    title: 'Free Barcoding',
    url: '/free-barcoding',
    },
]

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const toggleMenu = () => {
        setOpen(!open);
    }
    const [top, setTop] = useState(true);

useEffect(() => {
  const scrollHandler = () => {
    window.scrollY > 10 ? setTop(false) : setTop(true)
  };
  window.addEventListener('scroll', scrollHandler);
  return () => window.removeEventListener('scroll', scrollHandler);
}, [top]);

    const [clickedIndex, setClickedIndex] = useState(null);

    const toggleSubMenu = (index) => {
        setClickedIndex(clickedIndex === index ? null : index);
    };


  return (
    <div className={`navbar w-full h-20 bg-white dark:bg-slate-950 fixed top-0 left-0 ${!top && `bg-white shadow-lg `}`}>
        <div className='container flex justify-between items-center h-full md:mx-[20%] md:w-[60%] mx-5 '>
            <div className='flex items-center'>
            <Link to='/' className='text-2xl font-bold cursor-pointer '> <span className=' text-main dark:font-medium'>BOX</span><span className='text-main font-medium dark:font-bold'>HERO</span> </Link>
            
            <ul className='hidden md:flex space-x-8 md:ml-10 '>
            {MenuLinks && MenuLinks.map((link, index) => (
                <li key={index} className='relative flex items-center justify-between'>
                    <Link to={link.url} onClick={() => toggleSubMenu(index)} className='text-gray-800 dark:text-white hover:text-main dark:hover:text-main font-medium'>{link.title}</Link>
                    {link.subMenu && (
                        <button onClick={() => toggleSubMenu(index)} className='text-1xl mx-2 text-gray-800 dark:text-white '>
                            {clickedIndex === index ? <FaAngleDoubleUp className=' '/> : <FaAngleDoubleRight />}
                        </button>
                    )}
                    {clickedIndex === index && link.subMenu && (
                        <ul className='absolute top-full left-0 bg-white dark:bg-slate-950 p-4 shadow-lg'>
                            {link.subMenu.map((subLink, subIndex) => (
                                <li key={subIndex} className='mb-2'>
                                    <Link to={subLink.url} className='text-gray-800 dark:text-white hover:text-main dark:hover:text-main font-medium'>{subLink.title}</Link>
                                </li>
                            ))}
                        </ul>
                    )}
                </li>
            ))}
            </ul>
            </div>
            <div className='hidden md:flex items-center space-x-4'>
            <ThemeSwitcher />

            <Link to='/login' className='bg-blue-600 text-white px-4 py-2 rounded-md'>Log In</Link>
            </div>
            <div className='md:hidden flex items-center mr-10'>
            <button onClick={toggleMenu} className='text-3xl text-gray-800 dark:text-white '>
                {open ? <FaTimes className=' '/> : <FaBars />}
            </button>
            </div>
        </div>
        <div className={`md:hidden ${open ? 'block' : 'hidden'} bg-slate-950 dark:bg-white h-screen w-full p-10 z-20`}>
            <ul className='flex flex-col items-center space-y-4 '>
                {/* Make links on mobile and sub menu opens pushing the link after  */}
                {MenuLinks.map ((link, index) => (
                    
                    <li key={index} onClick={toggleMenu} className='flex flex-col items-center'>
                        <Link to={link.url} className='text-white dark:text-gray-800 font-medium'>{link.title}</Link>
                        {link.subMenu && (
                            <ul className='flex flex-col items-center space-y-2 hidden'>
                                {link.subMenu.map((subLink, subIndex) => (
                                    <li key={subIndex}>
                                        <Link to={subLink.url} className='text-white dark:text-gray-800 font-medium'>{subLink.title}</Link>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            <ThemeSwitcher />
            <Link to='/login' onClick={toggleMenu} className='bg-blue-600 text-white px-4 py-2 rounded-md'>Log In</Link>

            </ul>
        </div>
    </div>
  );
};

export default Navbar;