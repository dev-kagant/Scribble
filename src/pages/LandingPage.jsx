import { useState } from 'react';
import {useSelector, useDispatch} from 'react-redux'
import { addTitle, removeTitle } from '../store/titleSlice';
import ListComponent from "../components/ListComponent";
import TitleComponent from "../components/TitleComponent";
import CardComponent from "../components/CardComponent";
import Modal from '../components/ModalComponent';

const LandingPage = () => {
  const siteTitle = useSelector((state) => state.title.siteTitle);
  let fetchedData = useSelector((state) => state.data);
  let [data, setData] = useState(fetchedData);
  const [currentList, setCurrentList] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch()

  // console.log('landing page 2.0', currentList);

  const handleOpenList = (id) => {
    if(id){
      let newCount = data.count+1;
      setData({...data, data: newCount});
      setCurrentList({})
    } else{
      setCurrentList({
        id: 1,
        name: '',
        count: 0,
        array: []
      });
    }
    setIsOpen(true);
  };

  const handleNewTitle = (siteTitle) => {
    dispatch(addTitle(siteTitle)); 
  }

  const handleNewList = () => {};


   // remove sample data 
  const sampleList = {
    id: 12,
    name: 'Shopping List',
    count: 5,
    array: [
      {
        id: 1,
        item: "Apple"
      },
      {
        id: 2,
        item: "Oranges"
      },
      {
        id: 3,
        item: "Peaches"
      },
      {
        id: 4,
        item: "Salt"
      },
      {
        id: 5,
        item: "Ginger and tomorrow we raid"
      },
    ]
  } 

  return (
    <div className="flex flex-col w-full h-full bg-orange-200 p-5 items-center">
      <div>
        <TitleComponent title={siteTitle} placeholder="Add a site name..." onCallback={handleNewTitle} styles="flex items-center text-teal-800 font-thick text-4xl md:text-6xl lg:text-8xl w-full" />
      </div>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 w-4/5 sm: gap-8 md:gap-6 md:w-full xl:w-2/3 xl:gap-10 mt-6 sm:mt-12 lg:mt-24">
        {data.lists.map((list)=>(
          <button key={list.id} onClick={()=> setIsOpen(true)}>
            <CardComponent heading={list.name}/>
          </button>
        ))}
        <button onClick={() => handleOpenList()}>
          <CardComponent heading="#"/>
        </button>
      </div>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="listing component">
        <ListComponent list={currentList}/>
      </Modal>
    </div>
  )
}

export default LandingPage