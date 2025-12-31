import { useState } from 'react';
import { TrashIcon } from '@heroicons/react/16/solid';
import { PencilSquareIcon } from '@heroicons/react/16/solid';

const ItemComponent = ({item}) => {

  const handleEditItem = () => {};
  const handleDeleteItem = () => {};

  return (
    <div className='flex flex-row border-b-2 border-teal-800 h-7 lg:h-9 w-full my-2'>
     <p className='w-4/5 text-base md:text-xl lg:text-2xl text-teal-800 pl-1 truncate'>{item.item}</p>
     <div className='flex flex-row justify-end w-1/5 mr-4 '>
      <button onClick={handleEditItem} className='cursor-pointer mr-2'><PencilSquareIcon className='size-5 lg:size-6 text-teal-800'/></button>
      <button onClick={handleDeleteItem} className='cursor-pointer'><TrashIcon className='size-5 lg:size-6 text-teal-800'/></button>
     </div>
    </div>
  )
}

export default ItemComponent