import { PlusIcon } from '@heroicons/react/16/solid'
import React from 'react'

const CardComponent = ({heading}) => {
  return (
    <div className='flex flex-row justify-center items-center border-2 text-teal-800 w-full h-30 md:h-36 lg:h-48 xl:h-56 py-10 rounded-2xl cursor-pointer'>
      <div className='flex justify-center items-center h-16 lg:h-24 w-full bg-teal-800 opacity-90'>
        {(heading !== "#") ? <p className='font-thick text-2xl lg:text-4xl text-white opacity-100'>{heading}</p> : <div className='font-thick text-2xl lg:text-4xl text-white opacity-100'><PlusIcon className='text-thick size-8 md:size-10'/></div>}
      </div>
    </div>
  )
}

export default CardComponent