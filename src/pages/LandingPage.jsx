import { useState } from 'react';
import {useSelector, useDispatch} from 'react-redux'
import { addTitle, removeTitle } from '../store/titleSlice';
import ListComponent from "../components/ListComponent";
import TitleComponent from "../components/TitleComponent";
import CardComponent from "../components/CardComponent";
import Modal from '../components/ModalComponent';

const LandingPage = () => {
  const siteTitle = useSelector((state) => state.title.siteTitle);
  const data = useSelector((state) => state.data);
  // const lists = useSelector((state) => state.lists);
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch()

  console.log('landing page', data);

  const handleNewTitle = (siteTitle) => {
    dispatch(addTitle(siteTitle)); 
  }


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
      <TitleComponent title={siteTitle} placeholder="Add a site name..." onCallback={handleNewTitle} styles="flex items-center text-teal-800 font-thick text-4xl md:text-6xl lg:text-8xl w-full" />
      {/* Remove this component */}
      {/* <ListComponent list={sampleList}/> */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 w-4/5 sm: gap-8 md:gap-6 md:w-full xl:w-2/3 xl:gap-10 mt-6 sm:mt-12 lg:mt-24">
        {sampleList.array.map((list)=>(
          <button key={list.id} onClick={()=> setIsOpen(true)}>
            <CardComponent heading={list.name}/>
          </button>
        ))}
      </div>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="listing component">
        <ListComponent list={sampleList}/>
      </Modal>
    </div>
  )
}

export default LandingPage