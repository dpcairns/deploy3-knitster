import React from "react"
import LoginForm from "./LoginForm"

export default class TextBox extends React.Component {
	render(){
	return(
		<div class="text-box bg-purple-see-thru">

			<div class="text-box-inside round bg-red-large dot-border col-sm-5">
				<div class="text-box-inside-content bg-red-small">
					{this.props.children}
				<LoginForm/>
				</div>

			</div>
		</div>
		)
	}
}