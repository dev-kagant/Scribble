import {useState, useSelect} from 'react'
import {ArrowRightCircleIcon} from '@heroicons/react/16/solid'

const TitleComponent = ({title, placeholder}) => {

  const [name, setName] = useState(title);
  const [editing, setEditing] = useState(false);
  
  const handleTitle = (e) => {
    setName(e.target.value)
  };

  const handleEditing = () => {
    setEditing(!editing);
  };

  return (
    <div className='flex w-screen justify-center'>
      {!title || editing === true ? (
      <div className='flex basis-auto text-base bg-orange-100 border-b-4 rounded-xl border-solid border-teal-800 h-16 w-1/2 justify-between z-10'>
        <input name={name} type="text" placeholder={placeholder} value={name} onChange={handleTitle} className='ml-4 text-3xl outline-none font-skinny'/>
        <button><ArrowRightCircleIcon className="size-8 text-teal-800 mr-4  cursor-pointer"/></button>
      </div>
      ) : (
        <div className='flex flex-col w-auto items-center'>
          <h1 className='text-teal-800 font-thick text-6xl w-100'>{name}</h1>
          <button className="cursor-pointer underline text-teal-600 text-xl font-skinny self-center" onClick={handleEditing}>Change Title</button>
        </div>
      )}
    </div>
  )
}

export default TitleComponent