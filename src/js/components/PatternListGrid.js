import React from "react"
import { Link } from "react-router"
import PatternListBox from "./PatternListBox"

export default class PatternListGrid extends React.Component{
	constructor(){
		super()
		this.state = {
			searchName: "",
			searchType: "",
			searchBy: ""
		}
	}

	handleTypeClick(){
		this.setState({searchBy: "type"})
		console.log(this.state)

	}


	handleNameClick(){
		this.setState({searchBy: "name"})
		console.log(this.state)

	}


	handleNameSearch(e){
		this.setState({searchName: e.target.value.toLowerCase().substr(0,20)})
		console.log(this.state)
	}

	handleTypeSearch(e){
		this.setState({searchType: e.target.value})
		console.log(this.state)
	}

	render(){
	let filteredPatterns = this.props.patterns
	if (this.state.searchBy === "name") {
	filteredPatterns = this.props.patterns.filter(
		(pattern) => {
			return	pattern.name.toLowerCase().indexOf(this.state.searchName) !== -1;
			}
		)
	}
	else if (this.state.searchBy === "type"){
	 filteredPatterns = this.props.patterns.filter(
		(pattern) => {
			return	pattern.img.indexOf(this.state.searchType) !== -1;
			}
		)
	}

	let patternNodes = filteredPatterns.map(function(pattern){
			return(
				<PatternListBox key={pattern._id}
				id={pattern._id}
				name={pattern.name}
				rows={pattern.rows}
				 description={pattern.description}
				 img={pattern.img}
				 rows={pattern.rows} />
				)
			})
	return(
		<div class="inline-block">
		<div class="row">
		<div class="col-md-4 text-right">
		Filter by name:
		<br/>
			<input type="text"
				value={this.state.searchName}
				onClick={this.handleNameClick.bind(this)}
				onChange={this.handleNameSearch.bind(this)} />
		</div>
		<div class="col-md-4 text-center">
		<div class="btn btn-info" onClick={this.props.toggleFormModal.bind(this)}>Add a pattern?</div>
		</div>
		<div class="col-md-4 text-left">
			  Filter by Type:
		<br/>
				<select class="form-control" width="50%" value={this.state.searchType}
						onClick={this.handleTypeClick.bind(this)}
						onChange={this.handleTypeSearch.bind(this)}
						id="img">
							<option value="" disabled selected>Choose a type</option>
							<option value="knit2.png">Hat</option>
							<option value="scarf.jpg">Scarf</option>
							<option value="sweater.jpg">Sweater</option>
							<option value="socks.jpg">Socks</option>
							<option value="toy.jpg">Expensive knitted toy</option>
				</select>
		</div>

		</div>
		<br/>
			{patternNodes}
		</div>
		)
	}
}
