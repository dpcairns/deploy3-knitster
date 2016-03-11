import React from "react"
import { Link } from "react-router"

export default class Links extends React.Component{
	render(){
	return(
		<div>
	<ul class="nav navbar-nav navbar-right visible-sm">
		<li class="big-li"><Link to='index'> Home</Link></li>
		<li class="big-li"><Link to='patterns'> Patterns</Link></li>
		<li class="big-li"><Link to='newPattern'> New Pattern</Link></li>
	</ul>
	<ul class="nav navbar-nav navbar-right hidden-sm">
		<li class="small-li"><Link to='index'> Home</Link></li>
		<li class="small-li"><Link to='patterns'> Patterns</Link></li>
		<li class="small-li"><Link to='newPattern'> New Pattern</Link></li>
	</ul>
	</div>
		)
	}
}
