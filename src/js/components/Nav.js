import React from "react";
import Links from "./Links"
import { Link } from "react-router"

export default class Layout extends React.Component {
	render() {
		return (

		<nav class="navbar head-box bg-red-large">
		  	<div class="red-pad-header">
			    <div class="navbar-header display-inline">
			   <h3>
			      <a href="#">knitster</a> --	Welcome, {this.props.currentUser}! 
				     <a href="#" class="btn btn-sm btn-danger">
				    	 	Logout
				     </a>
			  </h3>

			 </div>
			 <h3>
			  	<Links/>
		  	</h3>
		  	</div>
		</nav>

		);
	}
};
