import React, { useState } from 'react';
import {ReactComponent as Logo} from '../assets/zakat-chain-logo.svg';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    }
  return (
    <nav className='relative flex justify-between py-3 items-center'>
        {/* Logo */}
        <div>
            <Logo />
        </div>
        {/* Links */}
        <div className='hidden md:block'>
            <ul className='flex space-x-6'>
                <li>Home</li>
                <li>Showcase</li>
                <li>About Us</li>
            </ul>
        </div>
        {/* Button */}
        <div className='hidden md:flex'>
            <Link className='bg-[#FF9606] text-white px-4 py-3 rounded-full cursor-pointer'>Connect Wallet</Link>
        </div>

        {/* Mobile Menu */}
        <div className=' flex gap-x-4 md:hidden'>
            <div className='cursor-pointer' onClick={handleClick}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 block md:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
            </div>
        </div>

        {
            isOpen && (
                <div className='absolute flex flex-col bg-white top-[100%] z-30 right-0 border-t border-[#FF9606] gap-y-4'>
                    <ul className='flex flex-col space-y-4 py-3'>
                        <Link><li className='px-10 hover:border-b hover:border-gray-500'>Home</li></Link>
                        <Link><li className='px-10 hover:border-b hover:border-gray-500'>Showcase</li></Link>
                        <Link><li className='px-10 hover:border-b hover:border-gray-500'>About Us</li></Link>
                    </ul>
                    <div className='px-8 pb-4'>
                        <Link className='bg-[#FF9606] text-white px-4 py-3 rounded-full cursor-pointer'>Connect Wallet</Link>
                    </div>
                </div>
            )
        }
    </nav>
  )
}

export default Navbar;