import {useState} from 'react'
import ItemComponent from './ItemComponent';
import TitleComponent from './TitleComponent';
import { PlusIcon } from '@heroicons/react/16/solid';

function ListComponent({list}) {
  const [item, setItem] = useState('');


  const handleItemInput = () => {};

  const handleAddItem = (item) => {
    alert("It works")
  };

  const handleDeleteItem = () => {};

  const handleSaveList = () => {};

  const handleDeleteList = () => {};

  return (
    <div className='flex flex-col w-full md:w-1/2 lg:w-1/3 border-2 rounded-xl bg-white mt-8 p-4'>
      <TitleComponent title={list.name} placeholder="Add a list name..." onCallback={handleAddItem} styles="flex items-center text-teal-800 font-thick text-2xl sm:text-4xl lg:text-5xl w-full"/>
      <div className='mt-6'>
        {list.array.map((item)=>(
          <div key={item.id} className=''>
            <ItemComponent item={item}/>
          </div>
        ))}
      </div>
      <form className='flex flex-row justify-between border-b-2 border-teal-800 h-8 w-full mt-6 mb-2 md:mb-4'>
        <input type='text' name="newItem" placeholder='Add new item' className='w-4/5 outline-0 pl-2 text-base md:text-xl lg:text-2xl' onChange={handleItemInput} onSubmit={handleAddItem}/>
        <button className='flex justify-end text-teal-800 h-full pr-4 w-1/5' onClick={handleAddItem}><PlusIcon className='size-6 md:size-7'/></button>
      </form>
      <div className='flex flex-col text-base md:text-xl lg:text-2xl text-teal-800 my-3 items-center lg:my-6 lg:flex-row lg:w-full lg:justify-around'>
        <button className='my-2 md:my-3 p-1 w-3/4 border-2 rounded-xl lg:mx-4' onClick={handleSaveList}>Save</button>
        <button className='my-2 md:my-3 p-1 w-3/4 border-2 rounded-xl lg:mx-4' onClick={handleDeleteList}>Delete</button>
      </div>
    </div>
  )
}

export default ListComponent