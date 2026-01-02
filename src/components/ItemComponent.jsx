import { useState } from 'react';
import { ArrowPathIcon, TrashIcon } from '@heroicons/react/16/solid';
import { PencilSquareIcon } from '@heroicons/react/16/solid';

const ItemComponent = ({item, onUpdate, onDelete}) => {
  const [editing, setEditing] = useState(false);
  const [amendItem, setAmendItem] = useState(item.item)

  const handleEditItem = () => {
    setEditing(true);
    setAmendItem(item.item)
  };
  
  const handleAmendItem = (e) => {
    setAmendItem(e.target.value);
  };

  const handleUpdateItem = (e) => {
    e.preventDefault();
    onUpdate(item.id, amendItem);
    setEditing(false);
  };

  const handleDeleteItem = () => {
    onDelete(item.id);
  };

  return (
    <div>
    {!editing ? (
       <div className='flex flex-row border-b-2 border-teal-800 h-7 lg:h-9 w-full my-2'>
        <p className='w-4/5 text-base md:text-xl lg:text-2xl text-teal-800 pl-1 truncate'>{item.item}</p>
        <div className='flex flex-row justify-end w-1/5 mr-4 '>
          <button onClick={handleEditItem} className='cursor-pointer mr-2'><PencilSquareIcon className='size-5 lg:size-6 text-teal-800'/></button>
          <button onClick={handleDeleteItem} className='cursor-pointer'><TrashIcon className='size-5 lg:size-6 text-teal-800'/></button>
        </div>
      </div>
     ):(
      <form onSubmit={handleUpdateItem} className='flex flex-row border-b-2 border-teal-800 h-7 lg:h-9 w-full my-2'>
        <input type="text" value={amendItem} autoFocus onChange={handleAmendItem} className='w-4/5 outline-0 pl-2 text-base md:text-xl lg:text-2xl'/>
        <button type="button" onClick={handleUpdateItem} className='flex flex-row justify-end w-1/5 mr-4 cursor-pointer'>
          <ArrowPathIcon className='size-5 lg:size-6 text-teal-800'/>
        </button>
      </form>
     )}
    </div>
  )
}

export default ItemComponent