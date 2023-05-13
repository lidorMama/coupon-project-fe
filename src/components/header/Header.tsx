import './Header.css';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ActionType } from '../../redux/action-type';
import { FaHome } from 'react-icons/fa';
import axios from 'axios';
import { useEffect } from 'react';
import { AppState } from '../../redux/app-state';
import Category from '../category/Category';

function Header() {
  const dispatch = useDispatch();
  const CategoriesList = useSelector((state: AppState) => state.categoriesList);

  async function getAllCategories() {
    let url = `http://localhost:8080/category`;
    let response = await axios.get(url);
    let categories = response.data;
    dispatch({ type: ActionType.SaveCategoriesList, payload: { categories } });
  }
  useEffect(() => { getAllCategories()},[]);

  function setSubText(subText: string) {
    dispatch({ type: ActionType.SaveSubText, payload: { subText } });
  }

  return (
    <div className="Header">
      <div className="nav"><a><Link to="/" > <FaHome className="icon" /> </Link></a></div>
      <div className="nav"><a><Link to="/login" >Login</Link></a></div>
      <div className="nav"><a><Link to="/register" >Sing up</Link></a></div>
      <div className="nav">
      <a> Category</a>
        <div className="dropdown-content">
         {CategoriesList.map((category) => (<Category key={category.id} id={category.id} name={category.name} />))}
        </div>
      </div>
      <input type="text" className='search' placeholder='search..' onChange={event => setSubText(event.target.value)} />
    </div>
  );
}

export default Header;
