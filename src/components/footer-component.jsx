import React, { useState } from 'react';
import {ReactComponent as MessageIcon} from '../assets/message-icon.svg';
import {ReactComponent as FooterZakatIcon} from '../assets/footer-zakat-chain-logo.svg';
import ChatBoxComponent from './chat-box-component';


const Footer = () => {
    const [shouldShowChatBox, setShowChatBox] = useState(false)
    const handleMessageIconClick = () => {
        setShowChatBox(!shouldShowChatBox)
    }
  return (
    <>
    <div className='relative bg-[#F7F9FC] py-14 px-10 mt-3 border-b-2 border-[#E4E7EC]'>
        {/* CHAT SECTION */}
        {
            shouldShowChatBox && (
                <ChatBoxComponent setShowChatBox={setShowChatBox}/>
            )
        }
        <div className='absolute bottom-5 right-10 sm:top-15 sm:bottom-auto cursor-pointer' onClick={handleMessageIconClick}>
            <MessageIcon />
        </div>
        <div className='mb-16 sm:w-[60%] sm:mx-auto'>
            <h3 className='font-semibold text-2xl text-center'>Subscribe to our newsletter.</h3>
            <p className='px-7 text-center mt-3'>
                Never miss a beat. Get a weekly dose of Zakat updates, sadaqah around the world, tips, trends, and islamic reminder in your inbox.
            </p>
            <div className='mt-7'>
                <form>
                    <div className='flex gap-x-5'>
                        <input type='text' placeholder='Email Address' className='w-[70%] py-2 px-4 border border-[#D0D5DD] rounded-md'/>
                        <button className='bg-[#FF9606] text-white rounded py-2 px-5'>Subscribe</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <div className='bg-[#F7F9FC] pt-5 pb-10 px-7'>
        <div className='flex gap-x-10'>
            <div className=''>
                <FooterZakatIcon className='w-25 h-25 sm:w-30 sm:h-30'/>
            </div>

            <div className='self-center ml-auto flex gap-x-14'>
                <div className='hidden md:block'><p>Contact Us <span className='text-[#FF9606] underline'>hello@zakatchain.com</span></p></div>
                <div className='flex flex-col gap-x-4 gap-y-3 items-center md:flex-row md:justify-between'>
                    <p>Follow Us</p>
                    <div className='flex gap-x-2'>
                        <FaceBookIcon />
                        <TwitterIcon />
                        <InstagramIcon />
                        <LinkedInIcon />
                    </div>
                    <div className='md:hidden'><p className='text-sm sm:text-base'>Contact Us <span className='text-[#FF9606] underline'>hello@zakatchain.com</span></p></div>
                </div>
            </div>
        </div>

        <div className='text-[#344054] flex flex-col mt-10 gap-y-3 sm:flex-row sm:gap-y-0'>
            <div className='flex gap-x-6 font-semibold justify-between'>
                <span>Privacy Policy</span>
                <span>Terms of use</span>
            </div>
            <div className='text-center sm:ml-auto'>
                <p>© 2023 . Powered by <span className='text-[#17163E] font-semibold'>ZakatChain</span>. All Rights Reserved.</p>
            </div>
        </div>
    </div>
    </>
  )
}

const FaceBookIcon = () => {
    return (
        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 12.9285C0 19.5559 5.37258 24.9285 12 24.9285C18.6274 24.9285 24 19.5559 24 12.9285C24 6.30105 18.6274 0.928467 12 0.928467C5.37258 0.928467 0 6.30105 0 12.9285Z" fill="#FF9606"/>
    <path d="M18 12.9285C18 9.62847 15.3 6.92847 12 6.92847C8.7 6.92847 6 9.62847 6 12.9285C6 15.9285 8.175 18.4035 11.025 18.8535V14.6535H9.525V12.9285H11.025V11.5785C11.025 10.0785 11.925 9.25347 13.275 9.25347C13.95 9.25347 14.625 9.40347 14.625 9.40347V10.9035H13.875C13.125 10.9035 12.9 11.3535 12.9 11.8035V12.9285H14.55L14.25 14.6535H12.825V18.9285C15.825 18.4785 18 15.9285 18 12.9285Z" fill="white"/>
    </svg>

    )
}

const TwitterIcon = () => {
    return (
        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 12.9285C0 19.5559 5.37258 24.9285 12 24.9285C18.6274 24.9285 24 19.5559 24 12.9285C24 6.30105 18.6274 0.928467 12 0.928467C5.37258 0.928467 0 6.30105 0 12.9285Z" fill="#FF9606"/>
        <path d="M18 9.17847C17.55 9.40347 17.1 9.47847 16.575 9.55347C17.1 9.25347 17.475 8.80347 17.625 8.20347C17.175 8.50347 16.65 8.65347 16.05 8.80347C15.6 8.35347 14.925 8.05347 14.25 8.05347C12.675 8.05347 11.475 9.55347 11.85 11.0535C9.825 10.9785 8.025 10.0035 6.75 8.50347C6.075 9.62847 6.45 11.0535 7.5 11.8035C7.125 11.8035 6.75 11.6535 6.375 11.5035C6.375 12.6285 7.2 13.6785 8.325 13.9785C7.95 14.0535 7.575 14.1285 7.2 14.0535C7.5 15.0285 8.4 15.7785 9.525 15.7785C8.625 16.4535 7.275 16.8285 6 16.6785C7.125 17.3535 8.4 17.8035 9.75 17.8035C14.325 17.8035 16.875 13.9785 16.725 10.4535C17.25 10.1535 17.7 9.70347 18 9.17847Z" fill="white"/>
        </svg>
    )
}

const InstagramIcon = () => {
    return (
        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 12.9285C0 19.5559 5.37258 24.9285 12 24.9285C18.6274 24.9285 24 19.5559 24 12.9285C24 6.30105 18.6274 0.928467 12 0.928467C5.37258 0.928467 0 6.30105 0 12.9285Z" fill="#FF9606"/>
            <path d="M12 7.82849C13.65 7.82849 13.875 7.82849 14.55 7.82849C15.15 7.82849 15.45 7.97849 15.675 8.05349C15.975 8.20349 16.2 8.27849 16.425 8.50349C16.65 8.72849 16.8 8.95349 16.875 9.25349C16.95 9.47849 17.025 9.77849 17.1 10.3785C17.1 11.0535 17.1 11.2035 17.1 12.9285C17.1 14.6535 17.1 14.8035 17.1 15.4785C17.1 16.0785 16.95 16.3785 16.875 16.6035C16.725 16.9035 16.65 17.1285 16.425 17.3535C16.2 17.5785 15.975 17.7285 15.675 17.8035C15.45 17.8785 15.15 17.9535 14.55 18.0285C13.875 18.0285 13.725 18.0285 12 18.0285C10.275 18.0285 10.125 18.0285 9.45002 18.0285C8.85002 18.0285 8.55002 17.8785 8.32502 17.8035C8.02502 17.6535 7.80002 17.5785 7.57502 17.3535C7.35002 17.1285 7.20002 16.9035 7.12502 16.6035C7.05002 16.3785 6.97502 16.0785 6.90002 15.4785C6.90002 14.8035 6.90002 14.6535 6.90002 12.9285C6.90002 11.2035 6.90002 11.0535 6.90002 10.3785C6.90002 9.77849 7.05002 9.47849 7.12502 9.25349C7.27502 8.95349 7.35002 8.72849 7.57502 8.50349C7.80002 8.27849 8.02502 8.12849 8.32502 8.05349C8.55002 7.97849 8.85002 7.90349 9.45002 7.82849C10.125 7.82849 10.35 7.82849 12 7.82849ZM12 6.70349C10.275 6.70349 10.125 6.70349 9.45002 6.70349C8.77502 6.70349 8.32502 6.85349 7.95002 7.00349C7.57502 7.15349 7.20002 7.37849 6.82502 7.75349C6.45002 8.12849 6.30002 8.42849 6.07502 8.87849C5.92502 9.25349 5.85002 9.70349 5.77502 10.3785C5.77502 11.0535 5.77502 11.2785 5.77502 12.9285C5.77502 14.6535 5.77502 14.8035 5.77502 15.4785C5.77502 16.1535 5.92502 16.6035 6.07502 16.9785C6.22502 17.3535 6.45002 17.7285 6.82502 18.1035C7.20002 18.4785 7.50002 18.6285 7.95002 18.8535C8.32502 19.0035 8.77502 19.0785 9.45002 19.1535C10.125 19.1535 10.35 19.1535 12 19.1535C13.65 19.1535 13.875 19.1535 14.55 19.1535C15.225 19.1535 15.675 19.0035 16.05 18.8535C16.425 18.7035 16.8 18.4785 17.175 18.1035C17.55 17.7285 17.7 17.4285 17.925 16.9785C18.075 16.6035 18.15 16.1535 18.225 15.4785C18.225 14.8035 18.225 14.5785 18.225 12.9285C18.225 11.2785 18.225 11.0535 18.225 10.3785C18.225 9.70349 18.075 9.25349 17.925 8.87849C17.775 8.50349 17.55 8.12849 17.175 7.75349C16.8 7.37849 16.5 7.22849 16.05 7.00349C15.675 6.85349 15.225 6.77849 14.55 6.70349C13.875 6.70349 13.725 6.70349 12 6.70349Z" fill="white"/>
            <path d="M12 9.70349C10.2 9.70349 8.77502 11.1285 8.77502 12.9285C8.77502 14.7285 10.2 16.1535 12 16.1535C13.8 16.1535 15.225 14.7285 15.225 12.9285C15.225 11.1285 13.8 9.70349 12 9.70349ZM12 15.0285C10.875 15.0285 9.90002 14.1285 9.90002 12.9285C9.90002 11.8035 10.8 10.8285 12 10.8285C13.125 10.8285 14.1 11.7285 14.1 12.9285C14.1 14.0535 13.125 15.0285 12 15.0285Z" fill="white"/>
            <path d="M15.3 10.3785C15.7142 10.3785 16.05 10.0427 16.05 9.62849C16.05 9.21428 15.7142 8.87849 15.3 8.87849C14.8858 8.87849 14.55 9.21428 14.55 9.62849C14.55 10.0427 14.8858 10.3785 15.3 10.3785Z" fill="white"/>
        </svg>

    )
}

const LinkedInIcon = () => {
    return (
        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 12.9285C0 19.5559 5.37258 24.9285 12 24.9285C18.6274 24.9285 24 19.5559 24 12.9285C24 6.30105 18.6274 0.928467 12 0.928467C5.37258 0.928467 0 6.30105 0 12.9285Z" fill="#FF9606"/>
        <path d="M8.7 18.9285H6.15V10.9035H8.7V18.9285ZM7.425 9.77847C6.6 9.77847 6 9.17847 6 8.35347C6 7.52847 6.675 6.92847 7.425 6.92847C8.25 6.92847 8.85 7.52847 8.85 8.35347C8.85 9.17847 8.25 9.77847 7.425 9.77847ZM18 18.9285H15.45V14.5785C15.45 13.3035 14.925 12.9285 14.175 12.9285C13.425 12.9285 12.675 13.5285 12.675 14.6535V18.9285H10.125V10.9035H12.525V12.0285C12.75 11.5035 13.65 10.6785 14.925 10.6785C16.35 10.6785 17.85 11.5035 17.85 13.9785V18.9285H18Z" fill="white"/>
        </svg>

    )
}





export default Footer;