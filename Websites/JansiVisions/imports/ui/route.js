import { mount } from 'react-mounter';
import Home from './Home.js';
import About from './About.js';
import Contact from './Contact.js';
import Services from './Services.js';
import Documentation from './Documentation.js';
import Signup from './accounts/Signup.js';
import Login from './accounts/Login.js';
import Notfound from './Notfound.js';

FlowRouter.route('/',{
	name: 'Home',
	action: ()=>{
		mount(Home, {})
	}
});


FlowRouter.route('/about',{
	name: 'About',
	action: ()=>{
		mount(About, {})
	}
});

FlowRouter.route('/contact',{
	name: 'Contact',
	action: ()=>{
		mount(Contact, {})
	}
});

FlowRouter.route('/services',{
	name: 'Services',
	action: ()=>{
		mount(Services, {})
	}
});

FlowRouter.route('/documentation',{
	name: 'Documentation',
	action: ()=>{
		mount(Documentation, {})
	}
});

FlowRouter.route('/login',{
	name: 'Login',
	action: ()=>{
		mount(Login, {})
	}
});

FlowRouter.route('/signup',{
	name: 'Signup',
	action: ()=>{
		mount(Signup, {})
	}
});



FlowRouter.notFound ={
	action() {
		mount(Notfound, {});
	},
};
