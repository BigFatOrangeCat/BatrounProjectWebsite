import React, { Component } from "react";
import Engines from "./Engines";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AssetDetails from './AssetDetails'
import GeneralInformation from "./GeneralInformation";
import { FormControl,InputLabel,Input,FormHelperText} from '@material-ui/core';
import './home.css';

class Home extends Component {
    render() {
        const styleObj = {
            fontSize: 14,
            color: "#4a54f1",
            textAlign: "center",           
fontFamily: 'quicksand,sans-serif'
}
        return (
            <Router>
                 {/* <div className="searchBtn">
                 <button  className="goBtn" onClick={this.handleClick}>Go</button>
        <input className="searchBtn" ref="search" type="search" placeholder="Search criteria" />
        
                 </div> */}
                <div className="App">
                    <br/>
                    <header className="App-header"style={styleObj} >
                        {/* <Profile /> */}
                        <div className="App-div">
                            <div> 
                    <div className="w3-bar w3-theme w3-card-2 w3-wide notranslate">
                <img className="imghomeDiv" src={require('./home.png')}  alt="home"/>
                <FormControl>
                    <InputLabel htmlFor="my-input">search Device</InputLabel>
                    <Input id="my-input" aria-describedby="my-helper-text" />
                </FormControl>
             
             <p className="dashName">Home page : Summary of Dashboard list</p></div>
             <div>
                 <p className="dashName1">The project is to develop a tool which assists in the discovery of the <br/>
                    infrastructural architecture pf an industrial plant. It should do so by passively <br/>
                    observing the device communication within the network and utilizing this data to produce<br/>
                    a network diagram that includes information like protocols,devices present,software version etc.
</p>

             </div>
     

             {/* <img className="hero-img" src={require('../Images/hero.jpg')}  alt="hero"/> */}
             </div>
                            {/* <div className="App-general">
                                <div>ASSET DETAILS</div>
                                 <div className="App-Content">
                                    <div className="App-SubContent">
                                        <Link
                                            className="App-link1"
                                            to={"/AssetDetails"}
                                            target="_self"
                                        >
                                            Marine 
                  </Link>                      
              
                                    </div>
                                </div>
                            </div> */}
                             {/* <div className="App-GeneralInformations">
                                <div>GENERAL INFORMATION</div>
                                <div className="App-Content">
                                    <div className="App-SubContent">
                                        {/* <Link
                                            className="App-link1"
                                            to={"/GeneralInformation"}
                                            target="_self"
                                        >
                                            Fleet name 
                  </Link> 
                                    </div>
                                </div>
                            </div>  */}
                          
                            {/* <div className="App-engines">
                                <div>ENGINES</div>
                                 <div className="App-Content">
                                    <div className="App-SubContent">
                                        <Link className="App-link1" to={"/Engines"} target="_self">
                                            100 
                  </Link>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                        <Switch>
                            <Route exact path="/AssetDetails" component={AssetDetails} />
                            <Route path="/GeneralInformation" component={GeneralInformation} />
                            <Route path="/Engines" component={Engines} />
                        </Switch>
                    </header>
                </div>
            </Router>
            
        );
        
    }
    
}

export default Home;
