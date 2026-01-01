import {useState} from 'react'
import {ArrowRightCircleIcon} from '@heroicons/react/16/solid'


const TitleComponent = ({title, placeholder, onCallback, styles}) => {
  const [heading, setHeading] = useState(title);
  const [editing, setEditing] = useState(false);

  const handleTitle = (e) => {
    setHeading(e.target.value)
  };

  const handleEditing = () => {
    setEditing(!editing);
  };

  const handleSetTitle = () => {
    onCallback(heading);
    setEditing(false);
  }

  return (
    <div className='flex w-full justify-center mt-8 lg:mt-10 xl:mt-14'>
      {!heading || editing === true ? (
      <div className='flex basis-auto md:text-base bg-orange-100 border-b-4 rounded-xl border-solid border-teal-800 h-16 w-1/2 justify-between z-10'>
        <input name={heading} type="text" placeholder={placeholder} value={heading} onChange={handleTitle} className='ml-4 text-3xl outline-none font-skinny'/>
        <button onClick={handleSetTitle}><ArrowRightCircleIcon className="size-8 text-teal-800 mr-4  cursor-pointer" /></button>
      </div>
      ) : (
        <div className='flex flex-col w-auto items-center'>
          <h1 className={styles}>{heading}</h1>
          <button className="cursor-pointer underline text-teal-600 text-xl font-skinny self-center" onClick={handleEditing}>Edit</button>
        </div>
      )}
    </div>
  )
}

export default TitleComponent