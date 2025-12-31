import {useSelector, useDispatch} from 'react-redux'
import { addTitle, removeTitle } from '../store/titleSlice';
import ListComponent from "../components/ListComponent";
import TitleComponent from "../components/TitleComponent";

const LandingPage = () => {
  const siteTitle = useSelector((state) => state.title.siteTitle);
  const dispatch = useDispatch()

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
    <div className="h-screen w-screen bg-orange-200 flex flex-col p-5 items-center">
        <TitleComponent title={siteTitle} placeholder="Add a site name..." onCallback={handleNewTitle} styles="flex items-center text-teal-800 font-thick text-4xl md:text-6xl lg:text-8xl w-full" />
        {/* Remove this component */}
        <ListComponent list={sampleList}/>
    </div>
  )
}

export default LandingPage