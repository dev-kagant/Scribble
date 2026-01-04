import {useState} from 'react';
import { NavLink } from 'react-router';
import { Bars3Icon } from '@heroicons/react/16/solid';

function MobileNavComponent({links}) {
  const [activeMenu, setActiveMenu] = useState(false);

  const handleActiveMenu = () => {
    setActiveMenu(!activeMenu)
  }

  return (
    <div className='flex flex-col w-1/2 h-screen pr-0 '>
      <button className='h-12 absolute right-0 top-0 mr-8'><Bars3Icon className='text-teal-800 size-8 ' onClick={handleActiveMenu}/></button>
      {activeMenu ? (
      <nav className='flex flex-col justify-start absolute top-11.5 w-full h-auto opacity-95 text-teal-600 font-skinny text-2xl border-2 border-solid border-teal-800 z-10'>
        {links.map((link, index) => (
          <div key={index} className='flex p-4 border-b-2 bg-white'>
            <NavLink
                to={link.path}
                className="focus:font-thick focus:text-4xl cursor-pointer text-4xl"
                onClick={handleActiveMenu}
            >
              {link.name}
            </NavLink>
          </div>
        ))}
      </nav>
        ) : (
        null
      )}
    </div>
  )
}

export default MobileNavComponent