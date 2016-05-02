import React from "react"
import { Link } from "react-router"
import PatternStore from "./PatternStore"
import * as PatternActions from "../actions/PatternActions"
import {Button} from 'react-bootstrap'

export default class PatternForm extends React.Component{
	constructor(){
		super();
		this.state = {
			name: "",
			img: "",
			rows: "",
		}
	}

	handleNameChange(e){
		this.setState({name: e.target.value})
	}
	handleImgChange(e){
		this.setState({img: e.target.value})
	}
	handleRowsChange(e){
		this.setState({rows: e.target.value})
	}

	handleDescriptionChange(e){
		this.setState({description: e.target.value})
	}

	handleSubmit(e){
		e.preventDefault();
		var newPatternObject = {}
		newPatternObject.name = this.state.name
		newPatternObject.img = this.state.img
		newPatternObject.rows = this.state.rows
		newPatternObject.description = this.state.description

		PatternActions.createPattern(newPatternObject)
		this.setState({name: "", img: "", rows: "", description: ""})
			}

	render(){
				console.log(this.state)

	return(
		<div class="pattern-form-wrapper round bg-red-large dot-border">
			<form class="pattern-form bg-red-small" onSubmit={this.handleSubmit.bind(this)}>
				<fieldset>
					<div class="form-group">
					  <label for="name" class="control-label">Pattern name</label>
					    <input type="text" class="form-control" value={this.state.name} onChange={this.handleNameChange.bind(this)} id="name" placeholder="ex: the double-trouble hot-cross bun"/>
					</div>
					<div class="form-group">
					  <label for="img" class="control-label">What are we stitching here?</label>
					    <select class="form-control" value={this.state.img} onChange={this.handleImgChange.bind(this)} id="img">
							<option value="" disabled selected>Pick one (required)</option>
							<option value="knit2.png">Hat</option>
							<option value="scarf.jpg">Scarf</option>
							<option value="sweater.jpg">Sweater</option>
							<option value="socks.jpg">Socks</option>
							<option value="toy.jpg">Expensive knitted toy</option>
					    </select>
					</div>
					<div class="form-group">
					  <label class="control-label" for="description">Give us a short description of the project:</label>
					    <textarea class="form-control" id="description" value={this.state.description} onChange={this.handleDescriptionChange.bind(this)} name="description" rows="1" required=""></textarea>
					</div>
					<div class="form-group">
					  <label class="control-label" for="rows">Paste in your pattern instructions:</label>
					    <textarea class="form-control" id="rows" value={this.state.rows} onChange={this.handleRowsChange.bind(this)} name="rows" rows="3" required=""></textarea>
					</div>
          <Button onClick={this.props.toggleFormModal.bind(this)}>close</Button>

					<input class="button btn-danger align-right" type="submit" value="post"/>
				</fieldset>
			</form>

		</div>

		)
	}
}
