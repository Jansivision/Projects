import React, {Component} from 'react';


class About extends Component{
	render(){
		return(
		<div id="white">
			<h2 class="head">About Us</h2>
			<h4 id="white">We at Jansi Visions would like to Introduce to you the </h4><h3>"Visions Project"</h3><p>The biggest wave of the 21st Century.</p>
			<h2>Meet the Jansi Visions Team</h2>
			<div class="container" id="magin">
				<div class="row" id="white">
					<div class="col-sm-4">
						<img src="images/Syben5.png" width="100%" height="100" alt="Jimmy Kamanga"/>
						<h2>MANAGING DIRECTOR</h2>
						<h3>Jimmy Kamanga</h3>
						<p>Contact Details:</p>
						<p>Cell phone number: 0977 396 223</p>
						<p>Email Address : jimmykamanga@gmail.com</p>
					</div>
					<div class="col-sm-4">
						<img src="images/Syben5.png" width="100%" height="100" alt="Dickens Njobvu"/>
						<h2>PROJECT MANAGER</h2>
						<h3>Dickens Njobvu</h3>
							<p>Contact Details:</p>
							<p>Cell phone number: 0976 824 728</p>
							<p>Email Address : </p>
					</div>
					<div class="col-sm-4">
						<img src="images/Syben5.png" width="100%" height="100" alt="Alvin Mwewa"/>
						<h2>I.T MANAGER</h2>
						<h3>Alvin Mwewa</h3>
							<p>Contact Details:</p>
							<p>Cell phone number: 0967 593 529</p>
							<p>Email Address : mwewamwewa1699@gmail.com</p>
					</div>
				</div>
			</div>
		</div>
        )
	}


}

export default About
