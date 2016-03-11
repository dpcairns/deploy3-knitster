import React from "react"
import Slider from "react-slick"

export default class ManyRows extends React.Component{

	render(){

		    const settings = {
		      dots: true,
		      infinite: true,
		      speed: 500,
		      slidesToShow: 1,
		      slidesToScroll: 1
		  }

			const RowNodes = this.props.rows.map(function(row){
					return(		
							<div>
								<h3>
									{row}
								</h3>
							</div>
						)
				});

			
		return (

			<Slider {...settings}>
				{RowNodes}
			</Slider>
			)	

		}

}