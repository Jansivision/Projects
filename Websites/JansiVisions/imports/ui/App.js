import React, {Component} from 'react';
import { Route, Switch} from 'react-router-dom';
import Home from './Home.js';
import About from './About.js';
import Contact from './Contact.js';
import Signup from './accounts/Signup.js';
import Login from './accounts/Login.js';
import Notfound from './Notfound.js';
import Navbar from './Navbar.js';

class App extends Component{

	render(){
		return(
			<div>
					<Navbar/>
					
			</div>

		)
	}
}

export default App


					
