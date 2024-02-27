import React, { useState } from 'react';
import {ReactComponent as Logo} from '../assets/zakat-dropdown-logo.svg';
import {ReactComponent as DropdownIcon} from '../assets/dropdown-icon.svg';
import { Link } from 'react-router-dom';

const ZakatDropdown = () => {
  const [isDropped, setIsDropped] = useState(false);
  const handleDropdown = () => {
    setIsDropped(!isDropped);
  }
  return (
    <div className='bg-[#FF9606] rounded-lg md:px-7'>
      <div className='relative py-2 px-3 flex justify-between mt-3'>
        <div className='flex gap-x-1'>
            <span><Logo /></span>
            <span className='text-2xl font-bold text-white self-center sm:text-4xl'>Zakat</span>
        </div>
        <div className='text-white text-4xl self-center'>
        زكاة
        </div>

        <div className='self-center'>
            <Link className='bg-white rounded-full py-2 px-2 sm:px-6'>Pay Now</Link>
        </div>
        
      </div>

      <div className='flex flex-col'>
          {
            isDropped && (
              <div className='text-white w-2/3 mx-auto flex flex-col gap-y-7'>
                <p className='text-center'>
                  Are you Zakat Eligible? Your Zakat can make a BIG difference. Zakat is an annual charitable 
                  payment that goes on to benefit those in need and is a Religious obligation for Muslims 
                  everywhere.
                </p>

                <p className='text-center'>
                  Your Zakat is an important  pillar of Islam that allows you to care for orphans and the elderly, provide 
                  food and water, deliver healthcare and education, or even provide emergency aid to those struck by 
                  disaster. <Link className='text-[#17163E] font-bold underline cursor-pointer'>Learn more</Link>
                </p>
              </div>
            )
          }
          <div className='flex items-center justify-center'>
          {
              isDropped ? (
                <DropdownIcon className='ml-10 cursor-pointer rotate-180' onClick={handleDropdown}/>
              ) : (
                <DropdownIcon className='ml-10 cursor-pointer' onClick={handleDropdown}/>
              )
            }
          </div>
      </div>
    </div>
  )
}

export default ZakatDropdown;