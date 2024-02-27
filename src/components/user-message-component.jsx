import React from 'react'

const UserMessageComponent = ({message}) => {
  return (
    <div className='relative bg-[#FF9606] px-2 py-3 w-[40%] border left-[60%]'>
        <p className='text-black'>
            {message}
        </p>
    </div>
  )
}

export default UserMessageComponent;