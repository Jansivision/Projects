import React, {Component } from 'react';
import Footer from './Footer.js';

class Home extends Component {

	render(){
	return (
		<div><div class="jumbotron text-center">
			<img src="images/aw.png"/>
			<h1>Jansi Visions</h1>
			<p>See the future, Create the future</p><p>Become the future</p>
		</div>
			<div class="container-fluid" id="white">
				<div class="row" id="padd" id="deepbluepadd">
					<div class="col-md-12"><h2>What we have created</h2></div>
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
				<div class="row" id="white">
					<div class="col-md-12">
					<h2>What's New.</h2><h4>News on our latest developments and work</h4>
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
					<div class="col-md-6"><p id="left-p"><li>Contribute to Technological Development worldwide.</li><li>Provide High Standard Information center for the betterment of the future.</li><li>Provide affordable goods and delivery services.</li><li>Offer accessible software installations and repairs for a wide varierty of devices.</li><li></li><li></li><li></li><li></li></p></div>
					<div class="col-md-6"></div>
				</div>
				<p>Best Services</p>
				<h2>Services We Provide</h2>
				<div class="row">
					<div class="col-md-3" id="web"><h3>Web design</h3><p>We design and develop responsive websites for various purposes.</p><p>These include;</p><li>Personal Blogs</li><li>Advertisement</li></div>
					<div class="col-md-3" id="hardware"><h2>Hardware & Software Repairs</h2><p>We provide a wide range of device repairs for Computers, Smart phones and Tablets.</p><p>Custom updates for Android devices are also available</p></div>
					<div class="col-md-3" id="fol"><h2>Free Online Library</h2><p>We believe the way to succes begins with knowledge. Henceforeth,we have dedicated part of our time and effort to bring about a free online library that covers as much material as we can get our hands on for the primary school section.</p></div>
					<div class="col-md-3" id="delivery"><h2>Supplies & Deliveries</h2><p>In addition, we also provide general supply and delivery of goods. Visit our store to see whats in order.</p></div>
				</div>
				<p id="magin">Feedback</p>
				<h2>What our clients say</h2>
				<div class="row">
					<div class="col-md-6"></div>
					<div class="col-md-6"><h3>Let us know what you think</h3>
					<div class="row" id="magin">
			<div class="col-sm-6 form-group">
				<input class="form-control curved" id="name" name="name" placeholder="Name" type="text" required/>
			</div>
			<div class="col-sm-6 form-group">
				<input class="form-control curved" id="email" name="email" placeholder="Email" type="email" required/>
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
	        <div class="col-sm-3">
	        <div class="counter" id="green">
      <i class="fa fa-code fa-2x"></i>
      <h2 class="timer count-title count-number" data-to="100" data-speed="1500"></h2>
       <p class="count-text ">Visits</p>
    </div>
	        </div>
              <div class="col-sm-3">
               <div class="counter" id="green">
      <i class="fa fa-coffee fa-2x"></i>
      <h2 class="timer count-title count-number" data-to="1700" data-speed="1500"></h2>
      <p class="count-text ">Accounts</p>
    </div>
              </div>
              <div class="col-sm-3">
                  <div class="counter" id="green">
      <i class="fa fa-lightbulb-o fa-2x"></i>
      <h2 class="timer count-title count-number" data-to="11900" data-speed="1500"></h2>
      <p class="count-text ">Online</p>
    </div></div>
              <div class="col-sm-3">
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
