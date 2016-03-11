import React from "react"
import Links from "./Links"
export default class DetailBox extends React.Component{
	render(){
	return(
		<div>
		<div class="align-right detail-box">
		<h1>{this.props.name}</h1>
		<h2>{this.props.rows}</h2>		
		</div>
			<div class="your-class">
			    <div>your content</div>
	   	     	<div>your content</div>
	    		<div>your content</div>
			</div>
		</div>
		)
	}
}
