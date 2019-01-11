import React, {Component} from 'react';

class Footer extends Component{

	render(){
		return(
			<div>
						<div className="footers">
			<footer class="page-footer font-small ">
      <div className="container">

<div class="row">
    <div class="col-sm-5">
    <h2 >Jansi Visions</h2>
				<h3>
				Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.

Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.
				</h3>
    </div>
    <div class="col-sm-7 slideanim">
      <div class="row">
      <h1>Navigation</h1>
	  <p><a href='/documentation'>- Documentation</a></p>
	  
  <p><a href='/about'>- About</a></p>
  <p><a  href='/contact'>- Contact</a></p>
  <p><a  href='/services'>- Services</a></p>
      </div>
    </div>
  </div>
			  </div>



    <ul class="list-unstyled list-inline text-center">
      <li class="list-inline-item">
        <a class="btn-floating btn-fb mx-1">
          <i class="fa fa-facebook"> </i>
        </a>
      </li>
      <li class="list-inline-item">
        <a class="btn-floating btn-tw mx-1">
          <i class="fa fa-twitter"> </i>
        </a>
      </li>
      <li class="list-inline-item">
        <a class="btn-floating btn-gplus mx-1">
          <i class="fa fa-google-plus"> </i>
        </a>
      </li>
      <li class="list-inline-item">
        <a class="btn-floating btn-li mx-1">
          <i class="fa fa-linkedin"> </i>
        </a>
      </li>
      <li class="list-inline-item">
        <a class="btn-floating btn-dribbble mx-1">
          <i class="fa fa-dribbble"> </i>
        </a>
      </li>
    </ul>
<div id="br"> </div>
<hr/>
    <div class="footer-copyright text-center py-3"> <h2>© 2018 Copyright:
      <a href="/">jansivisions</a></h2>
    </div>


</footer>

			</div>
			</div>

		)
	}
}

export default Footer
