import React, {Component} from 'react';
import { Session } from 'meteor/session';
import Footer from '../Footer.js';
import Property from '../../api/collections/collections.js';
import PropTypes from 'prop-types';
import { withTracker } from 'meteor/react-meteor-data';
import { Images } from '../../api/collections/collections.js';

class View extends Component{


	displayInfo=()=>{
	      	const blog = this.props.blog;
	      	return blog.map((blog) => {
		const link = Images.findOne({'meta.key':blog.title}).link();
			return (
		  <div key = {blog._id}>


			<div id="basic-card" className="section">

		          <div className="row">

		            <div className="col s12">
		              <div className="row">
		                <div className="col s12">
		                  <div className="card horizontal">
		                    <div className="card-image width-65">
		                      <img src={link} alt={blog.title} width={800} height={400}/>
		                    </div>
		                    <div className="card-stacked">
		                      <div className="card-content">
					<h4 className="header" id ='blue'>{blog.title}</h4>
		                        <h5 id ='bold'>K{blog.price}</h5>
					<p id ='bold'>{blog.bed} Bedroom(s) {blog.bath} Bathroom(s) {blog.type} for
					 {blog.forsale} in {blog.location}</p>
		                        <p>{blog.description}
		                        </p>
		                        <p> Posted on:{blog.createdAt.toString()}
		                        </p>
		                        <p> Posted By:
		                        </p>
		                      </div>
		                      <div className="card-action border-none">
		                    <a class="waves-effect waves-light btn box-shadow light-bluelighten-1">
					Contact Owner</a>
		                      </div>
		                    </div>
		                  </div>
		                </div>
		              </div>
		            </div>
		          </div>
		        </div>
		  </div>
		)
	      }
	    )
	    }

sendEmail =(e)=>{
	e.preventDefault();

 	window.location = "jansivisions@gmail.com"

	alert('Success');

}





	displayProp=()=>{
	      	const blog = this.props.blog;
		const email = blog.useremail;
		const mail = "jansivisions@gmail.com";
	      	return blog.map((blog) => {
		const link = Images.findOne({'meta.key':blog.title}).link();
			return (
		  <div key = {blog._id}>
			<div className="container">
				<div className="row center">

				    	<div className="col s12">
		<br/>
		<br/>
					<img src={link} alt={blog.title} class='view-img'/>
					</div>


				</div>



		            	<div className="row">
				    	<div className="col s12">
						<h4 className="header" id ='blue'>{blog.title}</h4>
						<p>{blog.description}
						</p>

					</div>
				</div>
<div className="divider"></div>
		            	<div className="row">
				    	<div className="col s12">
					<h4 className="header" id ='blue'>Features</h4>
		            	<div className="row">
				    	<div className="col s6">
					<span id='bold'> Bedrooms: </span><br/>
					{blog.bed}

					</div>

				    	<div className="col s6">
					<span id='bold'> Bathrooms: </span><br/>					{blog.bath}

					</div>
				</div>
		            	<div className="row">
				    	<div className="col s6">
					<span id='bold'> Location: </span><br/>
					{blog.location}, Lusaka

					</div>

									    	<div className="col s6">
					<span id='bold'> Posted By: </span><br/>
					{blog.username} {blog.usersurname}

					</div>

				</div>

					</div>
				</div>

		            		<div className="row">

					<div className="col s12">
		                							<a class="waves-effect waves-light btn box-shadow waves-light light-blue lighten-1" href={mail}>
					Contact Owner</a>
					</div>
					</div>

			</div>
		  </div>
		)
	      }
	    )
	    }

	render(){
		return(
			<div>
                  		{this.displayProp()}
				<Footer/>
			</div>

		)
	}
}

View.propTypes = {
  blog: PropTypes.array.isRequired,
};

export default withTracker(()=> {
  Meteor.subscribe('blog');
  const propetyID = Session.get('property');
  return {
    blog: Property.find({_id: propetyID}, {sort: {createdAt: -1}}).fetch(),
  };
}) (View);
