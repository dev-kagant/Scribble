import { NavLink } from 'react-router';

const NavComponent = ({links}) => {
  return (
    <nav className='flex flex-row w-1/4 justify-evenly text-teal-600 font-skinny text-2xl'>
      {links.map((link, index) => (
        <div key={index} className=''>
            <NavLink
                to={link.path}
                className="focus:font-thick focus:text-lg cursor-pointer"
            >
              {link.name}
            </NavLink>
        </div>
      ))}
    </nav>
  )
}

export default NavComponent;