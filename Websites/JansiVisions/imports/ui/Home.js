import React, {Component } from 'react';
import Footer from './Footer.js';

class Home extends Component {

	render(){
	return (
		<div>	<div class="jumbotron text-center">
		<img src="images/aw.png" width="280" height="180"/>
		<h1>Jansi Visions</h1>
		<p>See the future, Create the future</p><p>Become the future</p>
</div>
			<div class="container-fluid" id="white">
		
				<div class="row" id="padd" id="deepbluepadd">
					<div class="col-md-12"><h3>What we have created</h3></div>
				</div>
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
							<img src="images/moriah-gardens.png" width="100%" height="350" alt="Syben"/>
							</a>
							</div>
							</div>

							<div class="item">
								<div class="logo text-center">
								<a class="animated" href="Syben.com">
							  <img src="images/Syben5.png" width="100%" height="350" alt="Syben"/>
								</a>
								</div>
							</div>

							<div class="item">
							<div class="logo text-center">
							<a class="animated" href="moriah-gardens.com">
							<img src="images/moriah-gardens.png" width="100%" height="350" alt="Syben"/>
							</a>
							</div>
							</div>

							<div class="item">
								<div class="logo text-center">
									<a class="animated" href="Syben.com">
										<img src="images/Syben5.png" width="100%" height="350" alt="Syben"/>
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
				<div class="row" id="white">
					<div class="col-md-12">
					<h3>Whats New.</h3><p>News on our latest developments and work</p>
					</div>
				</div>
				<div class="row">
					<div class="col-md-4">
						<div class="card rounded" id="gold-white">
							<div class="card-body"><h4>WEBSITE DEVELOPMENT</h4><p>Building improvements on moriah gardens webiste. This site will include an online platform to allow you to purchase your dream home from the luxarious yet affortable homes in Kitwe.</p><a href="#" class="btn btn-primary">Learn more....</a></div>
						</div>
					</div>
					<div class="col-md-4">
						<div class="card rounded" id="green">
							<div class="card-body"><h4>JANSI UPGRADE</h4><p>Working on adding new features to our website.</p><p>These features include Online Library for primary school and an online store for all you could find at rediculosly low prices.</p><a href="#" class="btn btn-primary">Learn more....</a></div>
						</div>
					</div>
					<div class="col-md-4">
						<div class="card rounded" id="purple">
							<div class="card-body"><h4>INVESTMENT</h4><p>We are opening a portal to help locals find investment opportunities and help manage Investment risks. This will help people of all ages find both financial knowledge and assistance.</p><a href="#" class="btn btn-primary">Learn more....</a></div>
						</div>
					</div>
				</div>
						<div class="parallax">
							<div class="row">
								<div class= "col-md-12">
									<div class="row">
										<div class="col-md-8 col-md-push-3 rounded" id="grey-trans"><h4>Who We Are?</h4><p>A combination of the most talented developers and highly motivated enterprenuers looking to Improve both I.T services and Financial stability of the people at large.</p><p></p></div>
									</div>
								</div>
							</div>
						</div>
				<p id="left-p">Our Goal</p><h2 id="left">Company Mission</h2><p id="left-p"><li>Contribute to Technological Development worldwide.</li><li>Provide High Standard Information center for the betterment of the future.</li><li>Provide affordable goods and delivery services.</li><li>Offer accessible software installations and repairs for a wide varierty of devices.</li><li></li><li></li><li></li><li></li></p>
				<div class="row">
					<div class="col-md-6"></div>
					<div class="col-md-6"></div>
				</div>
				<p>Best Services</p>
				<h3>Services We Provide</h3>
				<div class="row">
					<div class="col-md-4"></div>
					<div class="col-md-4"></div>
					<div class="col-md-4"></div>
				</div>
				<p>Feedback</p>
				<h3>What our clients say</h3>
				<div class="row">
					<div class="col-md-6"></div>
					<div class="col-md-6"></div>
				</div>
				<div class="parallax2">
					<div class="row" id="">
						<div class="col-md-12"><p>Statistical Data</p></div>
						</div>
				</div>
			</div>
			<Footer/>
			</div>
		



	)
	}
}

export default Home
