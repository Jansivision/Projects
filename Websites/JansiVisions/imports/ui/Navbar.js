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
            <nav className="navbar" id="deepblue">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="/">Jansi Visions</a>
                    </div>
                    <ul class="nav navbar-nav">
                        <li class="active"><a href="#">Home</a></li>
                        <li class="dropdown">
                            <a class="dropdown-toggle" data-toggle="dropdown" href="#">Page 1
                                <span class="caret"></span></a>
                            <ul class="dropdown-menu">
                                <li><a href="#">Page 1-1</a></li>
                                <li><a href="#">Page 1-2</a></li>
                                <li><a href="#">Page 1-3</a></li>
                            </ul>
                        </li>
                        <li><a href="#">Page 2</a></li>
                        <li><a href="#">Page 3</a></li>
                    </ul>
					<ul class="nav navbar-nav navbar-right">
      <li><a href="Signup">Sign Up</a></li>
      <li><a href="#"> Login</a></li>
    </ul>
                </div>
								<hr id="full"></hr>
            </nav>

		)
	}
}

export default Navbar
