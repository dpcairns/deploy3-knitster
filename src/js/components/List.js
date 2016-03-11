import React from "react"

import { Link } from "react-router"
import PatternStore from "./PatternStore"
import Links from "./Links"
import PatternListBox from "./PatternListBox"
import PatternListHeader from "./PatternListHeader"
import PatternListGrid from "./PatternListGrid"
import PatternForm from "./PatternForm"
import * as PatternActions from "../actions/PatternActions"

export default class List extends React.Component {
		constructor(){
			super();
			this.getPatterns = this.getPatterns.bind(this);
			this.state = {}
		}

	getPatterns(){
		console.log("list.getPatterns() says")
		console.log("4A) doing a getAll() now to set the state")
		this.setState({
			patterns: PatternStore.getAll()
		});
	}

	componentWillMount(){
		this.getPatterns();
		console.log("list.componentWillMount()")
		PatternStore.on("change", this.getPatterns);
	}

	componentWillUnmount(){
		console.log("list.componentWillunmount()")
		PatternStore.removeListener("change", this.getPatterns);
	}
	
	render(){



	return(
		<div class="container-fluid">
			<div class="col-md-8 inline-block scroll-y">
				<PatternListHeader />
				<PatternListGrid patterns={this.state.patterns} />
			</div>
			<div class="col-md-4">
					<PatternForm />
			</div>

		</div>
		)
	}
}
