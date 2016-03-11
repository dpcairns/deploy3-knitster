import React from "react"
import { Link } from "react-router"
import PatternListBox from "./PatternListBox"

export default class PatternListGrid extends React.Component{
	render(){
	var patternNodes = this.props.patterns.map(function(pattern){
			return(
				<PatternListBox key={pattern._id} id={pattern._id} name={pattern.name} rows={pattern.rows} description={pattern.description} img={pattern.img} rows={pattern.rows} />
				)
				})
	return(
		<div class="inline-block">
			{patternNodes}
		</div>
		)
	}
}
