import React from "react"

export default class Video extends React.Component{
	render(){
	return(

		<video class="fourth" poster="../static/img/knit.jpg" autoPlay="true" loop muted>
			<source src={this.props.videoSource} type="video/mp4" />
		</video>
		)
	}
}
