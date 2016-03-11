import React from "react"
import Slider from "react-slick"
import List from "./List"

import PatternStore from "./PatternStore"
import DetailBox from "./DetailBox"
import * as PatternActions from "../actions/PatternActions"

export default class ThisDetail extends React.Component{
	render(){
		    var settings = {
		      vertical: true,
		      dots: true,
		      infinite: true,
		      speed: 500,
		      slidesToShow: 3,
		      slidesToScroll: 1,	
		      vertical: true,
		      className: "inner-slider"}
		  	if (this.props.pattern.rows){
		  		var rowNodes = this.props.pattern.rows.map(function(row){
					return(		
							<div>
								<h4>
									{row}
								</h4>
							</div>
					)
				});

			} 
		return(
			<div>
				<div>
				<h1>{this.props.pattern.name} </h1>
					     	{this.props.children}

			     <Slider {...settings}>
				     	{rowNodes}
			      </Slider>	
      			</div>
			</div>
		)
	}
}