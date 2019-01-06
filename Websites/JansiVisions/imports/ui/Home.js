import React, {Component } from 'react';
import Footer from './Footer.js';
import {Tasks} from '../api/tasks.js';
import {Template} from 'meteor/templating';

Template.body.helpers({
	tasks(){
		return Tasks.find({});
	},
});

if (Meteor.isClient){
}

class Home extends Component {

	render(){
	return (
		<div>	<div class="jumbotron text-center" id="black">
		<img src="images/aw.png" width="280" height="180"/>
		<h1>Jansi Visions</h1>
		<p>See the future, Create the future</p><p>Become the future</p>
</div>
<div class="white">
			<div class="container-fluid">
					<h1>What we have created</h1>

				<div class="row">
					<div id="myCarousel" class="carousel slide" data-ride="carousel">
						<ol class="carousel-indicators">
							<li data-target="#myCarousel" data-slide-to="0" class="active"></li>
							<li data-target="#myCarousel" data-slide-to="1"></li>
							<li data-target="#myCarousel" data-slide-to="2"></li>
							<li data-target="#myCarousel" data-slide-to="3"></li>
						</ol>
						<div class="carousel-inner" role="listbox">
							<div class="item active">
							<div class="logo text-center">
							<a class="animated" href="moriah-gardens.com">
							<img src="images/moriah-gardens.png" width="100%" height="380" alt="Syben"/>
							</a>
							</div>
							</div>

							<div class="item">
								<div class="logo text-center">
								<a class="animated" href="Syben.com">
							  <img src="images/Syben5.png" width="100%" height="380" alt="Syben"/>
								</a>
								</div>
							</div>

							<div class="item">
							<div class="logo text-center">
							<a class="animated" href="moriah-gardens.com">
							<img src="images/moriah-gardens.png" width="100%" height="380" alt="Syben"/>
							</a>
							</div>
							</div>

							<div class="item">
								<div class="logo text-center">
									<a class="animated" href="Syben.com">
										<img src="images/Syben5.png" width="100%" height="380" alt="Syben"/>
									</a>
								</div>
							</div>
						  </div>
							<a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
								<span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
								<span class="sr-only">Previous</span>
							</a>
							<a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
							  <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
							  <span class="sr-only">Next</span>
							</a>
					</div>
				</div>
				<h3 id=""></h3>
				<div class="row">
					<div class="col-md-12">
					<h2>What's New.</h2><h4>News on our latest developments and work</h4>
					</div>
					</div>
				</div>
			</div>
			<div class="white">
				<div class="row" id="magin2">
					<div class="col-md-4" id="center">
						<div class="card rounded" id="gold-white">
							<div class="card-body"><h4>WEBSITE DEVELOPMENT</h4><p>Building moriah gardens webiste. </p><p>This is a site for the housing development in the Kitwe ganaton area by Stawardship Invest Limited.</p><a href="/developments" class="btn btn-primary">Learn more....</a></div>
						</div>
					</div>
					<div class="col-md-4" id="center">
						<div class="card rounded" id="green">
							<div class="card-body"><h4>UPGRADES</h4><p>Rolling out mobile updates</p><p>Currently adding more devices to available upgrade list.</p><a href="/upgrades" class="btn btn-primary">Learn more....</a></div>
						</div>
					</div>
					<div class="col-md-4" id="center">
						<div class="card rounded" id="purple">
							<div class="card-body"><h4>RESEARCH</h4><p>Working on emplimenting a new and faster web framework.</p><p>This is a fast and more stable platform for websites.</p><a href="/research" class="btn btn-primary">Learn more....</a></div>
						</div>
					</div>
				</div>
				</div>
				<div Container="fluid">
						<div class="row">
							<div class="parallax">
								<div class= "col-xs-12">
									<div class="row">
										<div class="col-xs-8 col-xs-push-3 rounded" id="grey-trans"><h4>Who We Are?</h4><p>A combination of the most talented developers and highly motivated enterprenuers looking to Improve both I.T services and Financial stability of the people at large.</p><p></p></div>
									</div>
								</div>
							</div>
						</div>
				<h4 id="left-p">Our Goal</h4><h2 id="left">Company Mission</h2>
				<div class="row">
					<div class="col-md-6"><p id="left-p"><li>Contribute to Technological Development worldwide.</li><li>Provide High Standard Information center for the betterment of the future.</li><li>Provide affordable goods and delivery services.</li><li>Offer accessible software installations and repairs for a wide varierty of devices.</li></p></div>
					<div class="col-md-6"></div>
				</div>
				<p>Best Services</p>
				<h2>Services We Provide</h2>
				<div class="row">
					<div class="col-md-6" id="web"><div class="greyback curved"><h3>Web design</h3><p>We design and develop responsive websites for various purposes.</p><p>These include;</p><li>Personal Blogs</li><li>Advertisement</li><li>Marketing</li></div></div>
					<div class="col-md-6" id="hardware"><div class="greyback curved"><h2>Software Repairs</h2><p>We provide a wide range of device repairs;</p><li> Computers</li><li> Smart phones</li><li>Tablet</li><p>Official and Custom updates for Android devices available</p></div></div>
				</div>
				<p id="magin">Feedback</p>
				<h2>What our clients say</h2>
				<div class="row">
					<div class="col-md-6"></div>
					<div class="col-md-6"><h3>Let us know what you think</h3>
					<div class="row" id="magin">

					<form class="new-task">
						<input class="form-control curved" type="name" name="name" placeholder="Name" required/>

					</form>
			<div class="col-sm-6 form-group">
<input class="form-control curved"  type="email" name="email" placeholder="Email" required/>
			</div>
			<div class="col-sm-6 form-group">

			</div>
		</div>
		<div class="row">
			<div class="col-sm-12 form-group">
			<input class="form-control curved" id="company" placeholder="Company" type="text" required/>
			</div>
		</div>
		<textarea class="form-control rounded" id="comments" name="comments" placeholder="Comment" rows="5"></textarea><br/>
		<div class="row">
			<div class="col-sm-12 form-group">
				<button class="btn btn-default pull-right" type="submit">Send</button>
			</div>
</div>
					</div>
				</div>
				<div class="row" id="">
					<div class="parallax2">
						<div class="col-md-12"><p id="magin"></p></div>
						<div class="row">
	   <div class="col text-center">
		<h2>ACTIVITIES</h2>
		</div>



	</div>
		<div class="row text-center" id="blacktext">
	        <div class="col-sm-4">
	        <div class="counter" id="green">
      <i class="fa fa-code fa-2x"></i>
      <h2 class="timer count-title count-number" data-to="100" data-speed="1500"></h2>
       <p class="count-text ">Visits</p>
    </div>
	        </div>

              <div class="col-sm-4">
                  <div class="counter" id="green">
      <i class="fa fa-lightbulb-o fa-2x"></i>
      <h2 class="timer count-title count-number" data-to="11900" data-speed="1500"></h2>
      <p class="count-text ">Online</p>
    </div></div>
		<div class="col-sm-4">
              <div class="counter" id="green">
      <i class="fa fa-bug fa-2x"></i>
      <h2 class="timer count-title count-number" data-to="157" data-speed="1500"></h2>
      <p class="count-text ">Feedback</p>
    </div>
              </div>
         </div>



						</div>
				</div>
			</div>
			<Footer/>
			</div>
	)
	}
}

export default Home
