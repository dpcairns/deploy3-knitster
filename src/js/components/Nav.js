import React from "react";
import Links from "./Links"
import { Link } from "react-router"

export default class Layout extends React.Component {
	render() {
		return (

		<nav class="navbar head-box bg-red-large">
			<div class="row">
		  	<div class="col-md-offset-1 col-md-5">
			    <div class="display-inline">
			   <h5>
			      <a href="#">knitster</a> --	welcome, {this.props.currentUser}!
				      || <a href="#" class="btn btn-xs btn-warning">logout
				     </a>
			  </h5>
				</div>
			 </div>
			 <div class="col-md-5">
			 <h5>
       <div class="navbar-right">
       <ul class="list-inline">
       <li><Link to="/">home</Link></li>
       <li><Link to="patterns">patterns</Link></li>
       </ul>
       </div>

		   </h5>

			 </div>
      </div>
		</nav>

		);
	}
};
