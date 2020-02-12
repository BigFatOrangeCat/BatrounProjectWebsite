import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route,NavLink} from 'react-router-dom';
import Home from './Components/home'
import About from './Components/about'
import AssetDetails from './Components/AssetDetails'
import Drag from './Components/drag'
import Header from './header'
import './App.css';
import { IoMdGlobe, IoMdHome} from "react-icons/io";
import { MdImportantDevices,MdQuestionAnswer } from "react-icons/md";

class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <div id="container">
          <span id="alignment"></span><div id="wrapper">
            <div id="sidebar">
              <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <ul className="navbar-nav mr-auto">   
                <li><NavLink  to={'/home'} className="nav-link"><span className="icons"> <IoMdHome/> </span> Home </NavLink ></li>                 
                <li><NavLink to={'/drag'} className="nav-link"><span className="icons"><IoMdGlobe/> </span> Dashboard </NavLink></li>
                <li><NavLink  to={'/about'} className="nav-link"><span className="icons"> <MdQuestionAnswer/> </span> About us</NavLink ></li>       
                         
                                 </ul>
              </nav>
            </div>
            <div id="main" className="m-2">
              <Switch>
              <Route path='/drag' component={Drag} />
                <Route path='/home' component={Home} />
                <Route path='/assets' component={AssetDetails} />               
                <Route exact path='/' component={Home} />
                <Route path='/about' component={About} />
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}
//                <li><NavLink  to={'/assets'} className="nav-link"><span className="icons"><MdImportantDevices/> </span> Devices </NavLink ></li>
export default App;