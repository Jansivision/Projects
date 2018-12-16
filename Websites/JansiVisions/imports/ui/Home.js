import React, {Component } from 'react';
import Footer from './Footer.js';

class Home extends Component {

	render(){
	return (
			<div class="container-fluid" id="white">
				<div class="row" id="black">
					<div class="col-xs-12">
						<h1>Jansi logo</h1> <p>See the future, Create the future</p><p>Become the future</p>
					</div>
				</div>
				<div class="row">
					<div class="col-xs-12"><h3>Websites by Jansi Vision</h3></div>
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
							  <img src="img_chania.jpg" alt="Chania"/>
							</div>
						
							<div class="item">
							  <img src="img_chania2.jpg" alt="Chania"/>
							</div>
						
							<div class="item">
							  <img src="img_flower.jpg" alt="Flower"/>
							</div>
						
							<div class="item">
							  <img src="img_flower2.jpg" alt="Flower"/>
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
				<h3 id="gold">Make an order with us now!</h3>
				<div class="row" id="white">
					<div class="col-xs-12">
					<h3>What's New.</h3><p>News on our latest developments and work</p>
					</div>
				</div>
				<div class="row">
					<div class="col-sm-4">
						<div class="card rounded" id="gold-white">
							<div class="card-body"><h5>Card title</h5><p>loren speach</p><a href="#" class="btn btn-primary">Go</a></div>
						</div>
					</div>
					<div class="col-sm-4">
						<div class="card rounded" id="purple">
							<div class="card-body"><h5>Card title</h5><p>loren speach</p><a href="#" class="btn btn-primary">Go</a></div>
						</div>
					</div>
					<div class="col-sm-4">
						<div class="card rounded" id="green">
							<div class="card-body"><h5>Card title</h5><p>loren speach</p><a href="#" class="btn btn-primary">Go</a></div>
						</div>
					</div>
				</div>
				<p>Say something cool</p>
				<div class="row">
					<div class="col-xs-12" id="tree">
						<div class="row">
							<div class="col-xs-8 col-md-push-4 rounded" id="grey"><h4>Who We Are?</h4><p>A combination of the most talented developers and highly motivated enterprenuers.</p></div>				
						</div>
					</div>				
				</div>
				<p id="left-p">Our Goal</p><h2 id="left">Company Mission</h2><p id="left-p">Speech for something</p>
				<div class="row">
					<div class="col-sm-6"></div>
					<div class="col-sm-6"></div>
				</div>
				<p>Best Services</p>
				<h3>Services We Provide</h3>
				<div class="row">
					<div class="col-sm-4"></div>
					<div class="col-sm-4"></div>
					<div class="col-sm-4"></div>
				</div>
				<p>Feedback</p>
				<h3>What our clients say</h3>
				<div class="row">
					<div class="col-sm-6"></div>
					<div class="col-sm-6"></div>
				</div>
				<div class="row" id="grey-white">
					<div class="col-xs-12"><p>Statistical Data</p></div>
				</div>
				<div class="row">
					<div class="col-xs-12" id="black"><Footer/></div>
				</div>
			</div>
				
				
			
				
	)
	}
}

export default Home


