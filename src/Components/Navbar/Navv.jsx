import React from 'react';
import { NavLink } from "react-router-dom";
import './Navv.css'
import { FaSortDown } from 'react-icons/fa';
function Navv() {
      
function clickHandler(){
  var x = document.querySelector('.main-menu')
  x.classList.toggle('show');
}

  return (
    <>

      <nav className="main-nav">
      <div className="menu-btn" onClick={clickHandler}>
        <i className="fas fa-bars fa-2x"></i>
      </div>

       <div id="myLinks">

        <ul className="main-menu">
          <li  onClick={clickHandler} >
            <NavLink to="/">Home</NavLink>
          </li>
          
          <li  onClick={clickHandler} className="dropbtn" >
            <FaSortDown/>
            About
            <div className="dropdown-content">
              <NavLink to="/about">About Institute</NavLink>
              <NavLink to="/about1">About Universal Innovators</NavLink>
            </div>
          </li>

          <li  onClick={clickHandler} className="dropbtn">
            <FaSortDown/>
            Papers
            <div className="dropdown-content">
              <NavLink to="/callForPapers">Call for Papers</NavLink>
              <NavLink to="/paperSubmissions">Paper Submissions</NavLink>
              <NavLink to="/callForSpecial">Call for Special</NavLink>
              <NavLink to="/callForInternational">Call for International Workshops</NavLink>
            </div>
            </li>

            <li  onClick={clickHandler}>
<NavLink to="/spsessions">Special Sessions</NavLink>
            </li>

          <li  onClick={clickHandler}><NavLink to="/workshops">WorkShops</NavLink> 
          </li>
          
          <li  onClick={clickHandler}><NavLink to="/registrations">Registration</NavLink></li>

          <li  onClick={clickHandler}><NavLink to="/sponsorships">Sponsorships</NavLink></li>
          <li  onClick={clickHandler}>
<NavLink to="/publications">Publications</NavLink>

</li>
          <li  onClick={clickHandler} className="dropbtn">
            <FaSortDown/>
            Committe
            <div className="dropdown-content">
            <NavLink to="/steerings">Steering Committee</NavLink>
            <NavLink to="/technicals">Technical Program Committee</NavLink>
            <NavLink to="/advisorys">Advisory Committee</NavLink>
            <NavLink to="/industrys">Industry Expert</NavLink>

            </div></li>
            
<li  onClick={clickHandler}><NavLink to="/awards">Awards</NavLink></li>
<li  onClick={clickHandler}><NavLink to="/conferences">Conference Venue</NavLink></li>
<li  onClick={clickHandler}><NavLink to="/downloads">Downloads</NavLink></li>
<li  onClick={clickHandler} className="dropbtn">
  <FaSortDown/>
  Previous Conferences
            <div className="dropdown-content">
            <NavLink to="/pcConferences22">ICCIC 2022</NavLink>
            <NavLink to="/pcConferences21">ICCIC 2021</NavLink>
            <NavLink to="/pcConferences20">ICCIC 2020</NavLink>
            <NavLink to="/pcConferences19">ICCIC 2019</NavLink>
            <NavLink to="/pcConferences18">ICCIC 2018</NavLink>

            </div></li>

        </ul>
        </div>

      </nav>

      
    </>
  );
}

export default Navv;