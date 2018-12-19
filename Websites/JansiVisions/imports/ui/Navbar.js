import React, {Component} from 'react';
import { Route, Switch} from 'react-router-dom';
import Home from './Home.js';
import About from './About.js';
import Contact from './Contact.js';
import Signup from './accounts/Signup.js';
import Login from './accounts/Login.js';


class Navbar extends Component{

	render(){
		return(
            <div>
			<nav class="navbar navbar-default navbar-fixed-top">
  <div class="container">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>                        
      </button>
      <a class="navbar-brand" href="/"><span class="glyphicon glyphicon-home"></span> Jansi Visions</a>
    </div>
    <div class="collapse navbar-collapse" id="myNavbar">
      <ul class="nav navbar-nav navbar-left">
        <li><a href="/about">TEAM</a></li>
        <li><a href="#">WORK</a></li>
        <li><a href="">PRICING</a></li>
        <li><a href="/contact">CONTACT</a></li>
      </ul>
      <ul class="nav navbar-nav navbar-right"><li><a href="/signup">SIGN UP</a></li></ul>
    </div>
  </div>
</nav>
</div>
		)
	}
}

export default Navbar
