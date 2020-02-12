import React, { Component } from "react";
// import Engines from "./Engines";
import { BrowserRouter as Router  } from "react-router-dom";
// import AssetDetails from './AssetDetails'
// import GeneralInformation from "./GeneralInformation";

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
                {/* <div className="App"> 
                    <br/>
                    <header className="App-header"style={styleObj} >
                        {/* <Profile /> 
                        <div className="App-div">
                            <div className="App-general">
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
                            </div>
                            <div className="App-GeneralInformations">
                                <div>GENERAL INFORMATION</div>
                                <div className="App-Content">
                                    <div className="App-SubContent">
                                        <Link
                                            className="App-link1"
                                            to={"/GeneralInformation"}
                                            target="_self"
                                        >
                                            Fleet name
                  </Link>
                                    </div>
                                </div>
                            </div>
                          
                            <div className="App-engines">
                                <div>ENGINES</div>
                                 <div className="App-Content">
                                    <div className="App-SubContent">
                                        <Link className="App-link1" to={"/Engines"} target="_self">
                                            100
                  </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Switch>
                            <Route exact path="/AssetDetails" component={AssetDetails} />
                            <Route path="/GeneralInformation" component={GeneralInformation} />
                            <Route path="/Engines" component={Engines} />
                        </Switch>
                    </header>
                </div>*/}
            </Router>
        );
    }
}

export default Home;
