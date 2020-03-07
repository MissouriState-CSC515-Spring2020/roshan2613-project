import React from 'react';


import './App.css';
import { Link } from 'react-router-dom';

function Nav() {

  const navStyle = {
    color: 'white'
  };

  return (
   <nav>
      
       <h3>Photo's Application</h3>
       

       <ul className = "nav-Links">
         <Link style = {navStyle} to = "/recent">
           <li className = "nav-recent">Recent</li>
           </Link>

           <Link style = {navStyle} to = "/sport">
           <li className = "nav-sport">Sport</li>
           </Link>

           <Link style = {navStyle} to = "/food">
           <li className = "nav-food">Food</li>
           </Link>

           <Link style = {navStyle} to = "/monument">
           <li className = "nav-monument">Monument</li>
           </Link>

           <Link style = {navStyle} to = "/nature">
           <li className = "nav-nature">Nature</li>
           </Link>

           <Link style = {navStyle}  to = "/car">
           <li className = "nav-car">Car</li>
           </Link>


       </ul>
   </nav>
  );
}

export default Nav;
