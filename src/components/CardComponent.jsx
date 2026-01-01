import React from 'react'

const CardComponent = ({heading}) => {
  console.log('Where you at', heading);
  return (
    <div className='flex flex-row justify-center items-center border-2 text-teal-800 w-full h-30 md:h-36 lg:h-48 xl:h-56 py-10 rounded-2xl'>
      <div className='flex justify-center items-center h-16 lg:h-24 w-full bg-teal-800 opacity-90'>
        <p className='font-thick text-2xl lg:text-4xl text-white opacity-100'>{heading}</p>
      </div>
    </div>
  )
}

export default CardComponent