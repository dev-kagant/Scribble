import {useState} from 'react';

import ItemComponent from './ItemComponent';
import TitleComponent from './TitleComponent';

import { PlusIcon } from '@heroicons/react/16/solid';


function ListComponent({list, addNewList, updateList, deleteList}) {
  const [item, setItem] = useState('');
  const [listName, setListName] = useState(list.listName);
  const [count, setCount] = useState(list.count);
  const [items, setItems] = useState(list.items);

  console.log('List Component', list);

  const handleAddListName = (name) => {
    setListName(name);
  };


  const handleItemInput = (e) => {
    setItem(e.target.value);
  };


  const handleAddItem = (e) => {
    e.preventDefault();
    let newItem = {
      id: count+1,
      item: item
    };
    setCount(count+1);
    setItems([...items, newItem]);
    setItem("");
  };


  const handleUpdateItem = (id, newValue) => {
    let updatedList = items.map((item)=>{
      if(item.id === id){
        return {...item, "item": newValue};
      }
      return item;
    })
    setItems(updatedList);
  };


  const handleDeleteItem = (id) => {
    let updatedList = items.filter((item)=>{ return item.id !== id});
    setItems(updatedList);
    setCount(count-1);
  };


  // send updated or new list to the store 
  const handleSaveList = () => {
    if(!listName){
      alert("Please add a list name");
      return;
    };
    if(items.length === 0){
      alert("Please add at least one item to list.");
      return;
    }
    if(list.id){
      updateList(list.id, listName, count, items)
      return;
    }
    addNewList(listName, count, items);
  };


  const handleDeleteList = () => {
    deleteList(list.id)
  };


  return (
    <div className='flex flex-col justify-between w-full max-h-full border-2 rounded-xl bg-white mt-8 p-4'>
      <div className='flex flex-row justify-center w-full'>
        <TitleComponent title={listName} placeholder="Add a list name..." onCallback={handleAddListName} styles="self-center text-teal-800 font-thick text-2xl sm:text-4xl lg:text-5xl w-auto"/>
      </div>
      <div className='flex flex-col-reverse mt-6 min-h-1/4 max-h-3/4 overflow-y-auto overscroll-contain'>
        {items.toReversed().map((item)=>(
          <div key={item.id} className=''>
            <ItemComponent item={item} onUpdate={handleUpdateItem} onDelete={handleDeleteItem}/>
          </div>
        ))}
      </div>
      <form className='flex flex-row justify-between border-b-2 border-teal-800 h-8 w-full mt-6 mb-2 md:mb-4'>
        <input type='text' name="newItem" placeholder='Add new item' value={item} className='w-4/5 outline-0 pl-2 text-base md:text-xl lg:text-2xl' onChange={handleItemInput} onSubmit={handleAddItem}/>
        <button className='flex justify-end text-teal-800 h-full pr-4 w-1/5' onClick={handleAddItem}><PlusIcon className='size-6 md:size-7'/></button>
      </form>
      <div className='flex flex-col  text-base md:text-xl lg:text-2xl text-teal-800 my-3 items-center lg:my-6 lg:flex-row lg:w-full lg:justify-around'>
        <button className='my-2 md:my-3 p-1 w-3/4 border-2 rounded-xl lg:mx-4 cursor-pointer' onClick={handleSaveList}>Save</button>
        <button className='my-2 md:my-3 p-1 w-3/4 border-2 rounded-xl lg:mx-4 cursor-pointer' onClick={handleDeleteList}>Delete</button>
      </div>
    </div>
  )
}

export default ListComponent