import './Header.css';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ActionType } from '../../redux/action-type';
import { FaHome } from 'react-icons/fa';

function Header() {
  const dispatch = useDispatch();

  function setSubText(subText: string) {
    dispatch({ type: ActionType.SaveSubText, payload: { subText } });
  }

  return (
    <div className="Header">
        <a><Link to="/" > <FaHome className="icon"/> </Link></a>
        <a><Link to="/login" >Login</Link></a>
        <a><Link to="/register" >Sing up</Link></a>
        <input type="text" className='search' placeholder='search' onChange={event => setSubText(event.target.value)} />
       </div>
  );
}

export default Header;
