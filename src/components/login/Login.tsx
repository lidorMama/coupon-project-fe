import { useState } from 'react';
import axios from 'axios';
import { FaLock, FaMailBulk } from "react-icons/fa";
import './Login.css';
import jwt_decode from 'jwt-decode';
import { Link, useNavigate } from 'react-router-dom';
import ISuccessfulLoginData from '../../models/ISuccessfulLoginData';



function Login() {
  let [userName, setUserName] = useState("");
  let [password, setPassword] = useState("");
  const navigate = useNavigate()


  async function onButtonClick() {
    try {
      const response = await axios.post("http://localhost:8080/user/login", { userName, password });
      // console.log(response);
      let token: string = response.data;
      let decodedToken: any = jwt_decode(token);
      let strSuccessfulLoginResponse: string = decodedToken.sub;
      let successfulLoginData: ISuccessfulLoginData = JSON.parse(strSuccessfulLoginResponse);
      console.log(successfulLoginData)
      // axios.defaults.headers.common['Authorization'] = "Bearer " + token;
      if (successfulLoginData.userType == 'Company') {
        navigate("/Company")
      }
      else if (successfulLoginData.userType == 'Customer') {
        navigate("/Customer")
      }
      else if (successfulLoginData.userType == 'Admin') {
        navigate("/Admin")
      }
      else {
        throw new Error("In valid user type")
      }
    }
    catch (e: any) {
      console.error(e);
      if (e.response?.data?.error?.message) {
        alert(e.response.data.error.message)
      }
      else {
        alert("Login invalid, try later")
      }
    }
  }

  return (
    <div className="Login">
      <div className="main">
        <div className="body">

          <div>
            <h1>Login page</h1>
          </div>

          <div className="second-input">
            <FaMailBulk className="icon" />
            <input type="text" className="field" placeholder='User Name' onChange={event => setUserName(event.target.value)} /><br />
          </div>

          <div className="second-input">
            <FaLock className="icon" />
            <input type="password" className="field" placeholder='Password' onChange={event => setPassword(event.target.value)} /><br />
          </div>

          <div className="login-button">
            <input type="button" className="button" value="Login" onClick={onButtonClick} /><br />
          </div>

          <p className="link">
          <a><Link to="/register" >Sing up</Link></a><br />
          <a><Link to="" >Forget Passworde </Link></a>
          </p>

        </div>
      </div>
    </div>

  );
}

export default Login;


