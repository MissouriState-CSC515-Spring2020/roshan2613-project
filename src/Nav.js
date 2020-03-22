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
           <li>Recent</li>
           </Link>

           <Link style = {navStyle} to = "/sport">
           <li>Sport</li>
           </Link>

           <Link style = {navStyle} to = "/food">
           <li>Food</li>
           </Link>

           <Link style = {navStyle} to = "/monument">
           <li>Monument</li>
           </Link>

           <Link style = {navStyle} to = "/nature">
           <li>Nature</li>
           </Link>

           <Link style = {navStyle}  to = "/car">
           <li>Car</li>
           </Link>


       </ul>
   </nav>
  );
}

export default Nav;
