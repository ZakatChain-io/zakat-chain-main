import React, { useState } from 'react';
import {ReactComponent as Logo} from '../assets/sadaqah-dropdown-logo.svg';
import {ReactComponent as DropdownIcon} from '../assets/dropdown-icon.svg';
import FeedThePoor from "../assets/feed-the-poor.png";
import SupportAnOrphan from "../assets/support-an-orphan-through-school.png";
import ProvideAccessToClean from "../assets/provide-access-to-clean-and-safe-water.png";
import HelpTreatASickMuslim from "../assets/help-treat-a-sick-muslim.png";
import { Link } from 'react-router-dom';

const SadaqhDropdown = () => {
  const [isDropped, setIsDropped] = useState(false);
  const handleDropdown = () => {
    setIsDropped(!isDropped);
  }
  return (
    <div className='bg-[#17163E] rounded-lg md:px-7'>
      <div className='pt-2 px-1 flex justify-between mt-5 space-x-4 sm:px-3 md:space-x-0'>
        <div className='flex gap-x-1'>
            <span><Logo className='w-10 sm:w-auto'/></span>
            <span className='text-2xl font-bold text-white self-center md:text-4xl'>Sadaqah</span>
        </div>
        <div className='text-white text-2xl self-center -ml-10 md:text-4xl'>
        صدقات
        </div>

        <div className='self-center'>
            <Link className='bg-white rounded-full py-2 px-2 sm:px-6'>Pay Now</Link>
        </div>
      </div>

      <div className='flex flex-col'>
          {
            isDropped && (
              <div className='border-t border-white mt-5 px-3'>
                <div className='flex mt-5'>
                  {/* IMAGE */}
                  <div className='h-32'>
                    <img src={FeedThePoor} alt='feed-the-poor' className='h-full w-full'/>
                  </div>
                  {/* SIDE TEXT */}
                  <div className='flex flex-col ml-5 gap-y-2 w-1/2 md:pr-20'>
                    <h4 className='text-2xl font-bold text-white'>
                      Feed The Poor
                    </h4>
                    <p className='text-white'>
                      “He who feeds a hungry person will be fed by Allah on the Day of Resurrection” (Al-Tirmidhi).
                    </p>
                    <Link className='bg-white text-black rounded-full px-3 py-1 self-start'>
                      Donate
                    </Link>
                  </div>
                </div>
                <div className='flex mt-5'>
                  {/* IMAGE */}
                  <div className='h-32'>
                    <img src={SupportAnOrphan} alt='feed-the-poor' className='h-full w-full'/>
                  </div>
                  {/* SIDE TEXT */}
                  <div className='flex flex-col ml-5 gap-y-2 w-1/2 md:pr-20'>
                    <h4 className='text-2xl font-bold text-white'>
                      Support an Orphan through school
                    </h4>
                    <p className='text-white'>
                      “Seeking knowledge is a duty upon every Muslim.” (Ibn Majah). Empower an orphan fulfill their educational aspirations.
                    </p>
                    <Link className='bg-white text-black rounded-full px-3 py-1 self-start'>
                      Donate
                    </Link>
                  </div>
                </div>
                <div className='flex mt-5'>
                  {/* IMAGE */}
                  <div className='h-32'>
                    <img src={ProvideAccessToClean} alt='feed-the-poor' className='h-full w-full'/>
                  </div>
                  {/* SIDE TEXT */}
                  <div className='flex flex-col ml-5 gap-y-2 w-1/2 md:pr-20'>
                    <h4 className='text-2xl font-bold text-white'>
                      Provide  access to clean and safe water 
                    </h4>
                    <p className='text-white'>
                      "The best form of charity is giving water to drink." (Ibn Majah)
                    </p>
                    <Link className='bg-white text-black rounded-full px-3 py-1 self-start'>
                      Donate
                    </Link>
                  </div>
                </div>
                <div className='flex mt-5'>
                  {/* IMAGE */}
                  <div className='h-32'>
                    <img src={HelpTreatASickMuslim} alt='feed-the-poor' className='h-full w-full'/>
                  </div>
                  {/* SIDE TEXT */}
                  <div className='flex flex-col ml-5 gap-y-2 w-1/2 md:pr-20'>
                    <h4 className='text-2xl font-bold text-white'>
                      Help treat a sick Muslim
                    </h4>
                    <p className='text-white'>
                      Treat your sick ones with charity.” (Saheeh al-Jaami)
                    </p>
                    <Link className='bg-white text-black rounded-full px-3 py-1 self-start'>
                      Donate
                    </Link>
                  </div>
                </div>
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

export default SadaqhDropdown;