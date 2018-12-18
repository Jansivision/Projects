import React, {Component } from 'react';
import Footer from './Footer.js';

class Home extends Component {

	render(){
	return (
			<div class="container-fluid" id="white">
				<div class="row" id="black">
					<div class="col-md-12">
						<img src="images/aw.png" width="280" height="180"/><p>See the future, Create the future</p><p>Become the future</p>
					</div>
				</div>
				<div class="row" id="padd" id="deepbluepadd">
					<div class="col-md-12"><h3>Websites by Jansi Visions</h3></div>
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
							  <img src="images/beach-house.jpeg" width="500" height="180" alt="Moriah Gardens"/>
							</div>

							<div class="item">
							  <img src="images/syben.jpg" width="500" height="180" alt="Chania"/>
							</div>

							<div class="item">
							  <img src="" alt="Syben"/>
							</div>

							<div class="item">
							  <img src="" alt="Flower"/>
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
				<h3 id="gold">You could be Next</h3>
				<div class="row" id="white">
					<div class="col-md-12">
					<h3>Whats New.</h3><p>News on our latest developments and work</p>
					</div>
				</div>
				<div class="row">
					<div class="col-md-4">
						<div class="card rounded" id="gold-white">
							<div class="card-body"><h5>Card title</h5><p>loren speach</p><a href="#" class="btn btn-primary">Go</a></div>
						</div>
					</div>
					<div class="col-md-4">
						<div class="card rounded" id="green">
							<div class="card-body"><h5>Card title</h5><p>loren speach</p><a href="#" class="btn btn-primary">Go</a></div>
						</div>
					</div>
					<div class="col-md-4">
						<div class="card rounded" id="purple">
							<div class="card-body"><h5>Card title</h5><p>loren speach</p><a href="#" class="btn btn-primary">Go</a></div>
						</div>
					</div>
				</div>
				<p>Say something cool</p>
				<div class="row">
					<div class="col-md-12" id="tree">
						<div class="row">
							<div class="col-md-8 col-md-push-4 rounded" id="grey-trans"><h4>Who We Are?</h4><p>A combination of the most talented developers and highly motivated enterprenuers.</p></div>
						</div>
					</div>
				</div>
				<p id="left-p">Our Goal</p><h2 id="left">Company Mission</h2><p id="left-p">Speech for something</p>
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
				<div class="row" id="grey-white">
					<div class="col-md-12"><p>Statistical Data</p></div>
				</div>
				<div class="row">
					<div class="col-md-12" id="black"><Footer/></div>
				</div>
			</div>




	)
	}
}

export default Home
