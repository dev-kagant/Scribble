import { useEffect, useState } from 'react';
import {useSelector, useDispatch} from 'react-redux'
import { useNavigate } from 'react-router';

import ListComponent from "../components/ListComponent";
import TitleComponent from "../components/TitleComponent";
import CardComponent from "../components/CardComponent";
import Modal from '../components/ModalComponent';

import { addTitle, createList, updateLists } from '../store/index';



const LandingPage = () => {
  const siteTitle = useSelector((state) => state.data.siteTitle);
  let fetchedData = useSelector((state) => state.data);
  let list = useSelector((state)=> state.data.currentList);
  let [data, setData] = useState(fetchedData);
  const [currentList, setCurrentList] = useState(list);
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  console.log('Landing page', data.lists);

  const findList = (id) => {
    for(let i = 0; i < data.lists.length; i++ ){
      if(data.lists[i].id === id){
        setCurrentList(data.lists[i]);
      }
    }
  };


  const handleOpenList = (id) => {
    if(id === "#"){
      setCurrentList({
        "listName": "",
        "count": 0,
        "items": [],
      });
    } else{
      findList(id);
    }
    setIsOpen(true);
  };


  const handleNewTitle = (siteTitle) => {
    dispatch(addTitle(siteTitle)); 
  }


  const handleNewList = (listName, count, items) => {
    dispatch(createList({listName, count, items}));
    setIsOpen(false);
    navigate(0);
  };


  const handleUpdateList = (id, listName, count, items) => {
    let updated = data.lists.map((list)=>{
      if(list.id === id){
        return {...list, "listName": listName, "count": count, "items": items};
      }
      return list;
    });
    dispatch(updateLists(updated));
    setIsOpen(false);
    navigate(0);
  };


  const handleDeleteList = (id) => {
    let updated = data.lists.filter((list)=>
      list.id !== id);
    dispatch(updateLists(updated));
    setIsOpen(false);
    navigate(0);
  };


  return (
    <div className="flex flex-col w-full h-full bg-orange-200 p-5 items-center">
      <div>
        <TitleComponent title={siteTitle} placeholder="Add a site name..." onCallback={handleNewTitle} styles="flex items-center text-teal-800 font-thick text-4xl md:text-6xl lg:text-8xl w-full" />
      </div>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 w-4/5 sm: gap-8 md:gap-6 md:w-full xl:w-2/3 xl:gap-10 mt-6 sm:mt-12 lg:mt-24">
        {data.lists.map((list)=>(
          <button key={list.id} onClick={() => {handleOpenList(list.id)}}>
            <CardComponent heading={list.listName}/>
          </button>
        ))}
        <button onClick={()=>{handleOpenList("#")}}>
          <CardComponent heading="#"/>
        </button>
      </div>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="listing component">
        <ListComponent list={currentList} addNewList={handleNewList} updateList={handleUpdateList} deleteList={handleDeleteList}/>
      </Modal>
    </div>
  )
}

export default LandingPage