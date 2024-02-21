import React from 'react';
import {ReactComponent as ZakatPayersIcon} from '../assets/zakat-payers-grp-icon.svg';
import {ReactComponent as SadaqahPayersIcon} from '../assets/zakat-payers-grp-icon.svg';
import {ReactComponent as BeneficiariesIcon} from '../assets/beneficiaries-group-icon.svg';

const ProjectShowcase = () => {
  return (
    <div className='p-0.5 bg-gradient-to-r from-[#FF9606] from-50% to-[#17163E] mt-3'>
        <div className='bg-white bg-contain bg-no-repeat flex flex-col gap-y-7 pt-3 pb-14 px-16'>
            <div className='text-center'>
                <h3 className='font-semibold text-2xl'>Project Showcase</h3>
                <p className='font-light text-lg'>Our work speaks for us</p>
            </div>

            <div className='flex flex-col gap-y-10 md:flex-row md:justify-between md:gap-y-0'>
                {/* ZAKAT PAYERS */}
                <div className='flex flex-col md:block'>
                    <div className='border border-[#FF9606] rounded-full py-10 px-11 text-center h-52 w-52 self-center flex flex-col justify-center md:h-auto md:w-auto'>
                        {/* ICON */}
                        <div className='flex justify-center items-center'>
                            <ZakatPayersIcon />
                        </div>
                        <div>
                            <p className='font-bold text-2xl'>10K</p>
                            <p>Zakat Payers</p>
                        </div>
                    </div>
                    <p className='text-center mt-5 text-xl font-semibold'>Zakat Payers</p>
                </div>

                {/* SADAQAH PAYERS */}
                <div className='flex flex-col'>
                    <div className='max-h-fit p-[1px] bg-gradient-to-b from-[#FF9606] from-20% to-[#17163E] rounded-full h-52 w-52 self-center flex flex-col justify-center md:h-auto md:w-auto'>
                        <div className='bg-white p-10 text-center rounded-full h-full w-full'>
                            {/* ICON */}
                            <div className='flex justify-center items-center'>
                                <SadaqahPayersIcon />
                            </div>
                            <div>
                                <p className='font-bold text-2xl'>20K</p>
                                <p>Sadaqah Payers</p>
                            </div>
                        </div>
                    </div>
                    <p className='text-center mt-5 text-xl font-semibold'>Sadaqah Payers</p>
                </div>

                {/* BENEFICIARIES */}
                <div className='flex flex-col'>
                    <div className='border border-[#17163E] rounded-full py-10 px-11 text-center h-52 w-52 self-center flex flex-col justify-center md:h-auto md:w-auto'>
                        {/* ICON */}
                        <div className='flex justify-center items-center'>
                            <BeneficiariesIcon />
                        </div>
                        <div>
                            <p className='font-bold text-2xl'>1m</p>
                            <p>Beneficiaries</p>
                        </div>
                    </div>
                    <p className='text-center mt-5 text-xl font-semibold'>Beneficiaries</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProjectShowcase;