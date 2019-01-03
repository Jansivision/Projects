import React, {Component } from 'react';
import Footer from './Footer';


class Contact extends Component {
	constructor(props){
		super(props);
		 this.state = {
	   name : "",
	   email : "",
	   message: ""
	   }

   }


   handleName = (e) => {
		   this.setState({
			   name: e.target.value
		   })
	   }

   handleEmail = (e) => {
		   this.setState({
			   email: e.target.value
		   })
	   }

   handleMessage = (e) => {
		   this.setState({
			   message: e.target.value
		   })
	   }

   addComment =(e)=>{
	   e.preventDefault();

	   const name = this.state.name;
	   const email = this.state.email;
	   const message = this.state.message;


	   const user = {
	   name, email, message
	   }
	   Meteor.call('addComment', user)


	   alert('Thanks for Your Comment');

   }

	   render(){
		   return (

	<div class = "contact-pic">
<div class="jumbotron jumbotron-sm">
    <div class="container">
        <div class="row">
            <div class="col-sm-12 col-lg-12">
                <h1 class="h1">
                    Contact us</h1>
					<h2> <small>Feel free to contact us</small></h2>
            </div>
        </div>
    </div>
</div>
<div class="container">
    <div class="row">
        <div class="col-md-8">
            <div class="well well-sm">
                <form>
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="name" id="blueword">
                                Name</label>
								<div class="input-group">
								<span class="input-group-addon"><span class="glyphicon glyphicon-user"></span></span>
                            <input type="text" class="form-control" id="name" placeholder="Enter name" required="required" onChange={this.handleName} /></div>
                        </div>
                        <div class="form-group">
                            <label for="email" id="blueword">
                                Email Address</label>
                            <div class="input-group">
                                <span class="input-group-addon"><span class="glyphicon glyphicon-envelope"></span>
                                </span>
                                <input type="email" class="form-control" id="email" placeholder="Enter email" required="required"  onChange={this.handleEmail}/></div>
                        </div>

                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="name" id="blueword">
                                Message</label>
                            <textarea name="message" id="message" class="form-control" rows="9" cols="25" required="required"
                                placeholder="Message" onChange={this.handleMessage}></textarea>
                        </div>
                    </div>
                    <div class="col-md-12">
                        <button type="submit" class="btn btn-primary pull-right" id="btnContactUs">
                            Send Message</button>
                    </div>
                </div>
                </form>
            </div>
        </div>
        <div class="col-md-4">
            <form>
            <legend><span class="glyphicon glyphicon-globe"></span> Our office</legend>
            <address id="blueword">
                <strong>Twitter, Inc.</strong><br/>
                #5 Lubambe Rd , Northmid<br/>
                Lusaka, Zambia<br/>
                <abbr title="Phone">
                    P:</abbr>
                (096) 7593 527
            </address>
            <address>
                <strong id="blueword">Full Name</strong><br/>
                <a href="#">Jansivisions@gmail.com</a>
            </address>
            </form>
        </div>
		<div class="col-md-6" >
		<h2 id="blueword">CLICK THE MAP TO GET DIRECTIONS</h2>
		<h1 id="blueword"><span class="glyphicon glyphicon-hand-down"></span></h1>
         <a href="https://www.google.com/maps/place/5+Bwinjimfumu+Rd,+Lusaka,+Zambia/@-15.4083362,28.2909344,17z/data=!3m1!4b1!4m5!3m4!1s0x1940f4a95c2f0c03:0x3ba9753ce6edf77b!8m2!3d-15.4083362!4d28.2931284?hl=en-US" allowFullScreen>
		 <img src="images/map" width="600px" height="300px" alt="location"/>
		 </a>
      </div>

    </div>
</div>
<br/><br/>
<Footer/>
		   </div>



		   );

	   }
   };

export default Contact
