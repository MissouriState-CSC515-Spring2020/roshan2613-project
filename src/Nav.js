import React from 'react';


import './App.css';
import { Link } from 'react-router-dom';

function Nav() {

  const navStyle = {
    color: 'white'
  };

  return (
   <nav>
      
       <h3>Video's Application</h3>
       

       <ul className = "nav-Links">
<<<<<<< Updated upstream
         <Link style = {navStyle} to = "/recent">
           <li>Recent</li>
           </Link>
=======
         {/* <Link style = {navStyle} to = "/recent">
           <li className = "nav-recent">Recent</li>
           </Link> */}
>>>>>>> Stashed changes

           <Link style = {navStyle} to = "/sport">
           <li>Sport</li>
           </Link>

           <Link style = {navStyle} to = "/food">
           <li>Food</li>
           </Link>

<<<<<<< Updated upstream
           <Link style = {navStyle} to = "/monument">
           <li>Monument</li>
           </Link>
=======
           {/* <Link style = {navStyle} to = "/monument">
           <li className = "nav-monument">Monument</li>
           </Link> */}
>>>>>>> Stashed changes

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
