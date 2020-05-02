import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router,Switch, Route } from 'react-router-dom';


//import Nav from './Nav';
// import Sport from './Sport';
// import Food from './Food';
// import Monument from './Monument';
// import Nature from './Nature';
// import Car from './Car';



class DynamicImport extends Component {
  state = {
    component: null
  }
  componentDidMount () {
    this.props.load()
      .then((component) => {
        this.setState(() => ({
          component: component.default ? component.default : component
        }))
      })
  }
  render() {
    return this.props.children(this.state.component)
  }
}

//Nav bar
const Nav = (props) => (
  <DynamicImport load={() => import('./Nav')}>
    {(Component) => Component === null
      ? <p>Loading</p>
      : <Component {...props} />}
  </DynamicImport>
)

//Sport
const Sport = (props) => (
  <DynamicImport load={() => import('./Sport')}>
    {(Component) => Component === null
      ? <p>Loading</p>
      : <Component {...props} />}
  </DynamicImport>
)


//Food
const Food = (props) => (
  <DynamicImport load={() => import('./Food')}>
    {(Component) => Component === null
      ? <p>Loading</p>
      : <Component {...props} />}
  </DynamicImport>
)


//Monument ( which i am not using in my react app) 
const Monument = (props) => (
  <DynamicImport load={() => import('./Monument')}>
    {(Component) => Component === null
      ? <p>Loading</p>
      : <Component {...props} />}
  </DynamicImport>
)


//Nature 
const Nature = (props) => (
  <DynamicImport load={() => import('./Nature')}>
    {(Component) => Component === null
      ? <p>Loading</p>
      : <Component {...props} />}
  </DynamicImport>
)


//Car
const Car = (props) => (
  <DynamicImport load={() => import('./Car')}>
    {(Component) => Component === null
      ? <p>Loading</p>
      : <Component {...props} />}
  </DynamicImport>
)



function App() {
  return (
    <Router>
    <div className="App">
   <Nav />
   <switch>
   <Route path = "/" exact component = {Home} />
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
