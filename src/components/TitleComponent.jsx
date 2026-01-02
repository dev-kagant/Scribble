import {useEffect, useState} from 'react'
import {ArrowRightCircleIcon} from '@heroicons/react/16/solid'


const TitleComponent = ({title, placeholder, onCallback, styles}) => {
  const [heading, setHeading] = useState(title);
  const [editing, setEditing] = useState(false);

  useEffect(()=>{
    if(!heading){
      setEditing(true);
    }
  })

  const handleTitle = (e) => {
    setHeading(e.target.value)
  };

  const handleEditing = () => {
    setEditing(!editing);
  };

  const handleSetTitle = (e) => {
    e.preventDefault();
    onCallback(heading);
    setEditing(false);
  }

  return (
    <div className='flex w-full justify-start mt-4 lg:mt-6 xl:mt-8'>
      {editing === true ? (
      <form onSubmit={handleSetTitle} className='flex basis-auto md:text-base bg-orange-100 border-b-4 rounded-xl border-solid border-teal-800 h-16 w-full justify-between z-10'>
        <input name="heading" type="text" placeholder={placeholder} value={heading} onChange={handleTitle} className='ml-4 text-3xl outline-none font-skinny'/>
        <button type="button" onClick={handleSetTitle}><ArrowRightCircleIcon className="size-8 text-teal-800 mr-4  cursor-pointer" /></button>
      </form>
      ) : (
        <div className='flex flex-col w-full justify-center items-center'>
          <h1 className={styles}>{heading}</h1>
          <button className="cursor-pointer underline text-teal-600 text-xl font-skinny self-center" onClick={handleEditing}>Edit</button>
        </div>
      )}
    </div>
  )
}

export default TitleComponent