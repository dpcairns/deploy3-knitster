import React from "react"
import { Link } from "react-router"
import RemoveButton from "./RemoveButton"
import ThisDetail from "./ThisDetail"

export default class PatternListBox extends React.Component {
	constructor(){
		super()
		this.state ={
			showDetail: false,
			detailStyle: {display: "none"}
		}
	}

	toggleDetail(){
		if(!this.state.showDetail){
			this.setState({  detailStyle: {
					display: "block",
					background: "rgba(86, 0, 65, .6)",
					 position: 'fixed',
  					zIndex: "2",
  					width: "100%",
  					height: "100%",
  					top: "0",
  					bottom: "0",
  					left: "0",
  					right: "0"

		}})
			this.setState({showDetail: true})
			console.log(this.state)
		}
		else if(this.state.showDetail===true) {
				this.setState({detailStyle: {
					display: "none"}})
			
			this.setState({showDetail: false})
			console.log(this.state)
		
	}
}
	render(){
		var imgsrc = "../static/img/"

	return(
		<div>
			<div class="bg-red-large small-bottom-gap dot-border round noverflow">
				<div class="row">
					<div class="col-md-6">
							<button class="btn btn-small btn-warning" onClick={this.toggleDetail.bind(this)}>
								Show this pattern
							</button>
							<div class="name-box bg-red-small">
								<h1>
									{this.props.name}
								</h1>
							</div>
							<div class="image-box bg-red-small">
								<h3>
									<img src={imgsrc + this.props.img} height="100" width="100" alt={this.props.name}/>
								</h3>
							</div>
							<br/>
							<div>
								<RemoveButton id={this.props.id} />
							</div>
					</div>
					<div class="col-md-5 text-center noverflow">
								<h4><i>{this.props.description}</i></h4>
								<ul>
								{this.props.rows.map(function(row){
									return(
										<li>{row}</li>
										)
								})
							}
								</ul>
					</div>
				</div>
			</div>

			<div>
			<div style={this.state.detailStyle}>
			<div class="this-detail-sytle">
					<ThisDetail pattern={this.props}>

				<button class="btn btn-small btn-warning" onClick={this.toggleDetail.bind(this)}>
					Hide this pattern
				</button>

					</ThisDetail>
			</div>
				
			</div>
			</div>
		</div>
		)
	}
}
