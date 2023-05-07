import React, { useState } from 'react';
import './Register.css';
import axios from 'axios';
import { FaBaby, FaHome, FaLock, FaMailBulk, FaPhoneAlt } from 'react-icons/fa';
import { GoPerson } from 'react-icons/go';
import { Link } from 'react-router-dom';




function Register() {
  let [userName, setUserName] = useState("");
  let [password, setPassword] = useState("");
  let [address, setAddress] = useState("");
  let [firstName, setFirstName] = useState("");
  let [lastName, setLastName] = useState("");
  let [amountOfKids, setAmountOfKids] = useState("");
  let [phoneNumber, setPhoneNumber] = useState("");

  async function onRegister(): Promise<void> {
    try {
      const response = await axios.post("http://localhost:8080/customer", { user: { userName, password }, address, firstName, lastName, amountOfKids, phoneNumber });
      console.log(response);
    }
    catch (e) {
      console.log(e);

    }
  }

  return (

    <div className="Register">
      <div className="main">
      <div className="body">
          <div>
            <h1>Register File</h1>
          </div>

          <div className="div-input">
            <FaMailBulk className="icon" />
            <input type="text" className="field" placeholder='User Name' onChange={event => setUserName(event.target.value)} /><br />
          </div>

          <div className="div-input">
            <FaLock className="icon" />
            <input type="password" className="field" placeholder='Password' onChange={event => setPassword(event.target.value)} />
          </div>

          <div className="div-input">
            <FaHome className="icon" />
            <input type="text" className="field" placeholder='Address' onChange={event => setAddress(event.target.value)} /><br />
          </div>

          <div className="div-input">
            <GoPerson className="icon" />
            <input type="text" className="field" placeholder='First Name' onChange={event => setFirstName(event.target.value)} /><br />
          </div>

          <div className="div-input">
            <GoPerson className="icon" />
            <input type="text" className="field" placeholder='Last Name' onChange={event => setLastName(event.target.value)} /><br />
          </div>

          <div className="div-input">
            <FaBaby className="icon" />
            <input type="text" className="field" placeholder='Amount Of Kids' onChange={event => setAmountOfKids(event.target.value)} /><br />
          </div>

          <div className="div-input">
            <FaPhoneAlt className="icon" />
            <input type="text" className="field" placeholder='Phone Number' onChange={event => setPhoneNumber(event.target.value)} /><br />
          </div>

          <div className="register">
            <input type="button" className="button" value="Register" onClick={onRegister} />
          </div>

          <p className="link">
            Alredy have a account? 
            <a><Link to="/login" >Login</Link></a> <br />
            <a><Link to="" >Forget Passworde </Link></a>
          </p>

        </div>
      </div>
    </div>
  );
}

export default Register;
