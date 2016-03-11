import React from "react"
import Slider from "react-slick"
import List from "./List"

import PatternStore from "./PatternStore"
import DetailBox from "./DetailBox"
import * as PatternActions from "../actions/PatternActions"

export default class Detail extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			pattern: PatternActions.getOnePattern(props.params.PatternId)
		}
	}

	render(){
		console.log(this.state)
		    var settings = {
		      dots: true,
		      infinite: true,
		      speed: 500,
		      slidesToShow: 1,
		      slidesToScroll: 1
		  }
		  	if (this.state.pattern.rows){
		  		var rowNodes = this.state.pattern.rows.map(function(row){
					return(		
							<div>
								<h3>
									{row}
								</h3>
							</div>
					)
				});

			} 
		return(
			<div class="container detail-container">
				<div class="detail-box round bg-red-large dot-border">
				<h1>{this.state.pattern.name} </h1>
	
			     <Slider {...settings}>
				     	{rowNodes}
			      </Slider>	
		
      			</div>
			</div>
		)
	}
}