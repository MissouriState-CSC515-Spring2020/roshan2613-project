import React from 'react';
import './App.css';
import Nav from './Nav';
import Recent from './Recent';
import Sport from './Sport';
import Food from './Food';
import Monument from './Monument';
import Nature from './Nature';
import Car from './Car';
import {BrowserRouter as Router,Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
   <Nav />
   <switch>
   <Route path = "/" exact component = {Home} />
   <Route path = "/recent" component = {Recent} />
   <Route path = "/sport" component = {Sport} />
   <Route path = "/food" component = {Food} />
   <Route path = "/monument" component = {Monument} />
   <Route path = "/nature" component = {Nature} />
   <Route path = "/car" component = {Car} />
   </switch>
    </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <h1>Home page</h1>
  </div>
)

export default App;
