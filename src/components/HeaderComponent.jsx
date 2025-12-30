import { useNavigate } from "react-router";
import useScreenSize from '../hooks/useScreenSize'
import NavComponent from "./NavComponent";
import MobileNavComponent from "./MobileNavComponent";

function HeaderComponent() {
  const navigate = useNavigate();
  const {width} = useScreenSize();

  const linksArray = [
    {name: 'Home', path: '/'},
    {name: 'Creator', path: '/creator'},
    {name: 'About', path: '/about'}
  ]
  return (
    <div className="flex flex-row justify-between h-12 items-center px-8 border-b-2 border-teal-800">
      <h3 className="text-4xl font-thick cursor-pointer text-teal-800" onClick={() => {navigate('/')}} >Scribble</h3>
      {(width > 820) ? <NavComponent links={linksArray}/> :
      <MobileNavComponent links={linksArray} />}
    </div>
  );
}

export default HeaderComponent