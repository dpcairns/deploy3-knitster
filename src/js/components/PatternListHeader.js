import React from "react"
import { Link } from "react-router"

export default class PatternListHeader extends React.Component{
	render(){
	return(

<div class="container-fluid list-container-header round bg-red-large dot-border">
			<div class="list-container-header-buffer bg-red-small">
				<h2>
					== Here are your patterns == 
					<br/>
				</h2>
			</div>
</div>
		)
	}
}
