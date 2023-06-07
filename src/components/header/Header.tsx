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
  useEffect(() => { getAllCategories() }, []);

  function setSubText(subText: string) {
    dispatch({ type: ActionType.SaveSubText, payload: { subText } });
  }

  return (
    <div className="Header">
      <div className="logo"> <span className="logo-text">lm</span> </div>
      <div className="search-box"> <input type="text" className='search' placeholder='search..' onChange={event => setSubText(event.target.value)} /></div>
      <div className="nav"><a><Link to="/login" >Sign In</Link></a></div>
      <div className="nav"><a><Link to="/register" >Sign Up</Link></a></div>
      <div className="nav">
        <a> Category</a>
        <select className="dropdown-content" value={"Category"}>
          <option>Choose a category</option>
          {CategoriesList.map((category) => <option><Category key={category.id} id={category.id} name={category.name} /> </option>)}
        </select>
      </div>
    </div>
  );
}

export default Header;
