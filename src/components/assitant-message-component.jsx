import React from 'react'

const AssitantMessageComponent = ({message}) => {
  return (
    <div className='bg-white px-2 py-3 w-[40%] border'>
        <p className='text-black'>
            {message}
        </p>
    </div>
  )
}

export default AssitantMessageComponent;