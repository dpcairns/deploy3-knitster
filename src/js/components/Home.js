import React from "react"
import * as PatternActions from "../actions/PatternActions"

export default class Home extends React.Component{
	

	componentDidMount(){
		console.log("home.componentWillMount() says")
		PatternActions.initializePatterns();
		console.log("1) Home tried to initialize the patterns")
	}

	render(){


	return(
		<div class="container home-container">

			<div class="home-box-padding round bg-red-large dot-border">
				<div class="home-box bg-red-small">
					<h1>find a pattern</h1>
				</div>
			</div>

			<div class="home-box-padding round bg-red-large dot-border">
				<div class="home-box bg-red-small">
					<h1>save a pattern</h1>
				</div>
			</div>

			<div class="home-box-padding round bg-red-large dot-border">
				<div class="home-box bg-red-small">
					<h1>make it happen</h1>
				</div>
			</div>

		</div>
		)
	}
}
