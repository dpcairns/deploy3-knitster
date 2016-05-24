import React from "react"
import { Link } from "react-router"
import PatternStore from "./PatternStore"
import Links from "./Links"
import PatternListBox from "./PatternListBox"
import PatternListHeader from "./PatternListHeader"
import PatternListGrid from "./PatternListGrid"
import PatternForm from "./PatternForm"
import * as PatternActions from "../actions/PatternActions"
import { Modal, Button } from "react-bootstrap"

export default class List extends React.Component {
		constructor(){
			super();
			this.getPatterns = this.getPatterns.bind(this);
			this.state = {
				showFormModal: false
			}
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

	toggleFormModal(){
		this.setState({
			showFormModal: !this.state.showFormModal
		})
	}

	render(){



	return(
		<div class="container-fluid small-top-gap">
			<div class="container center woosh">
				<PatternListGrid patterns={this.state.patterns}  toggleFormModal={this.toggleFormModal.bind(this)} />
			</div>

			<Modal show={this.state.showFormModal} bsSize="lg" aria-labelledby="contained-modal-title-lg">
			<Modal.Header>
				<Modal.Title id="contained-modal-title-sm">Add a pattern!</Modal.Title>
			</Modal.Header>
			<Modal.Body>
			 <PatternForm toggleFormModal={this.toggleFormModal.bind(this)}/>
			</Modal.Body>
			<Modal.Footer>
			</Modal.Footer>
		</Modal>
		</div>
		)
	}
}
