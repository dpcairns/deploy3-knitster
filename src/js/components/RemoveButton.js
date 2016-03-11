import React from "react"
import * as PatternActions from "../actions/PatternActions"

export default class RemoveButton extends React.Component {

	removePattern(){
		PatternActions.removePattern(this.props.id)
	}
	render(){
	return(
			<button onClick={this.removePattern.bind(this)} class="btn btn-danger btn-small">
					remove
			</button>
		)
	}
}