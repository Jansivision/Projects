import React, {Component } from 'react';
import {meteor} from 'meteor/meteor';


class Signup extends React.Component{

	constructor(props){
		super(props);
		 this.state = { profilePic : null}
   
   }
   
   handleImages = (e) => {
		   
		   this.setState({
			   profilePic: e.target.files[0]
		   })
	   }
   
	   newUser = e =>{
			e.preventDefault()
			const { profilePic } = this.state;
			const {target} = e;
			const name = target.name.value
			const password= target.password.value
			const email= target.email.value
			const area= target.area.value
				const number= target.number.value
			const surname = target.surname.value
			const city = target.city.value
   
	   let uploadInstance;
	   
	   if (profilePic) {
			uploadInstance = ProfileImages.insert({
			 file: profilePic,
			 meta: {
			   userId: Meteor.userId(),
		   key: email
			 },
			 streams: 'dynamic',
			 chunkSize: 'dynamic',
			 allowWebWorkers: true
		   }, false);
	
   
		   uploadInstance.on('error', function (error, fileObj) {
			 console.log('Error during upload: ' + error)
		   });
		uploadInstance.on('start', function ( fileObj) {
			 console.log('startinnnnng during upload: ' + fileObj)
		   });
		uploadInstance.on('uploaded', function ( fileObj) {
			 console.log('file has been uploaded: ' + fileObj)
		   });
   
		  uploadInstance.start(); 
	   }
			   const profile = {
				 email,
				 name,
			 surname,
			 city, 
			 number,
			 area
			   };
			   const user = {
				 email,password,
				 profile,
			   }
   
			   Accounts.createUser(user, (err) =>{
				 if (err)
				 {
				   console.log(err.reason);
				 }
				 else {
			   FlowRouter.go('/')
				}
			  }
			 );
			   }
	   render(){
		   return(
			   <div>
			   <div className="row">
					   <div className="col s6">
					   
						   <div className="center">
					   <br/>
					   <br/>
					   <br/>
					   <br/>
					   <br/>
					   <img src="images/logo.png" className="circle responsive-img"/>
					   <h5 id="blue">ATL(Apartment Locator) helps  you to communicate with buyers or sellers with
					   easy access to great prices and great services .Sign up today!</h5>
					   <img src="images/family.jpg" width={350}/>
					   </div>
					   </div>
						<div className="col s6">
						<h1 id="blue">Sign Up</h1>
   
   
								<form onSubmit={this.newUser}>
									<div className="row">
   
   
										<div className="input-feild s6 l6">
											<input id="name" type="text" className="input" name="name"/>
											<label htmlFor="name">Name</label>
										</div>
   
										<div className="input-feild s6 l6">
											<input id="surname" type="text" className="input" name="surname"/>
											<label htmlFor="surname">Surname</label>
										</div>
   
   <div className="file-field input-field">
		 <div className="btn waves-effect waves-light light-blue lighten-1">
		   <span>Picture</span>
		   <input type="file" name='profilePic' onChange={this.handleImages}/>
		 </div>
		 <div className="file-path-wrapper">
		   <input className="file-path validate" type="text"/>
		 </div>
	</div>
   
										<div className="input-feild s6 l6">
											<input id="number" type="number" className="input" name="number"/>
											<label htmlFor="number">Phone Number</label>
										</div>
   
   
   
									</div>
   
									<div className="input-feild s6 l6">
										<input id="area" type="text" className="input" name="area"/>
										<label htmlFor="area">Area</label>
									</div>
   
									<div className="input-feild s6 l6">
										<input id="city" type="text" className="input" name="city"/>
										<label htmlFor="city">City</label>
									</div>
									<div className="row">
										<div className="input-feild s12 l6">
											<input id="email" type="text" className="input" name="email"/>
											<label htmlFor="email">Email</label>
											<div className="row">
												<div className="input-feild s12 l6">
													<input id="password" type="password" className="input" name="password"/>
													<label htmlFor="password">Password</label>
												</div>
											</div>
										</div>
									</div>
									<button className="btn waves-effect waves-light light-blue lighten-1" type="submit"
									 name="action">S i g n U p</button>
									<hr/>
								</form><p>| <a href="/login">  already have an account?</a></p>
					   </div>
			   </div>
				   <Footer/>
			   </div>
		);
	}

}

export default Signup;
