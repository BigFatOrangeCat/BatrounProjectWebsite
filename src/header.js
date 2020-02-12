import React, {Component} from "react";
import './header.css';
class Header extends Component {
    
    render(){
        return(
            
            <div  className="headerDiv">
               

             <div className="w3-bar w3-theme w3-card-2 w3-wide notranslate"><img className="imgDiv" src={require('./Images/logo.png')} alt="MTU-Logo"></img>
               <p className="companyName"> BATROUN</p>
                  </div>  
                  {/* <button color="secondary" className="signUpBtn" onClick={this.handleClick}>SignUp</button>
                  <button color="info" className="loginBtn" onClick={this.handleClick}>Login</button> */}
            </div>
        )
    }
}

export default Header;