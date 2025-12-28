import { NavLink, Link, useNavigate } from "react-router";
import NavComponent from "./NavComponent";

function HeaderComponent() {
  const navigate = useNavigate();

  const linksArray = [
    {name: 'Home', path: '/'},
    {name: 'Creator', path: '/creator'},
    {name: 'About', path: '/about'}
  ]
  return (
    <div className="flex flex-row justify-between h-12 items-center px-8 border-b-2 border-teal-800">
      <h3 className="text-4xl font-thick cursor-pointer text-teal-800" onClick={() => {navigate('/')}} >Scribble</h3>
      <NavComponent links={linksArray}/>
    </div>
  );
}

export default HeaderComponent