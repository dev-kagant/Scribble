import {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { addTitle, removeTitle } from '../store/titleSlice';
import {ArrowRightCircleIcon} from '@heroicons/react/16/solid'


const TitleComponent = ({placeholder}) => {
  const setTitle = useSelector((state) => state.title.siteTitle)
  const [siteTitle, setSiteTitle] = useState(setTitle);
  const [editing, setEditing] = useState(false);
  const dispatch = useDispatch()
  

  const handleTitle = (e) => {
    setSiteTitle(e.target.value)
  };

  const handleEditing = () => {
    setEditing(!editing);
  };

  const handleNewTitle = () => {
    dispatch(addTitle(siteTitle)); 
    setEditing(false)
  }


  return (
    <div className='flex w-screen justify-center'>
      {!siteTitle || editing === true ? (
      <div className='flex basis-auto text-base bg-orange-100 border-b-4 rounded-xl border-solid border-teal-800 h-16 w-1/2 justify-between z-10'>
        <input name={siteTitle} type="text" placeholder={placeholder} value={siteTitle} onChange={handleTitle} className='ml-4 text-3xl outline-none font-skinny'/>
        <button onClick={handleNewTitle}><ArrowRightCircleIcon className="size-8 text-teal-800 mr-4  cursor-pointer" /></button>
      </div>
      ) : (
        <div className='flex flex-col w-auto items-center'>
          <h1 className='flex items-center text-teal-800 font-thick text-6xl w-full'>{siteTitle}</h1>
          <button className="cursor-pointer underline text-teal-600 text-xl font-skinny self-center" onClick={handleEditing}>Change Title</button>
        </div>
      )}
    </div>
  )
}

export default TitleComponent