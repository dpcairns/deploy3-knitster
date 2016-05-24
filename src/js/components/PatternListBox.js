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
			<div class="bg-red-large one-box small-bottom-gap dot-border round shady shadow">
				<div class="row">
					<div class="col-md-6">
							<button class="btn btn-small btn-warning" onClick={this.toggleDetail.bind(this)}>
								Show this pattern
							</button>
					<div>

							<div class="image-box dot-border round bg-red-small small-top-gap" style={{border: "solid pink 1px",  opacity: ".8",  background: "#fff7f8", height: "50%", padding:"10px", overflow:"ellipsis"}}>
								<h3>
								{this.props.name}
                </h3>

									<img src={imgsrc + this.props.img} class="small-top-gap" height="150" width="150" alt={this.props.name}/>
							</div>
							<br/>
							<div>
								<RemoveButton id={this.props.id} />
							</div>
							</div>
					</div>
					<div class="col-md-6 text-center">
								<h4><i>{this.props.description}</i></h4>
								<div class="dot-border round" style={{opacity: ".8", background: "#fff7f8", height: "65%", padding:"30px", overflow: "hidden", textOverflow:"ellipsis"}}>
								<ul class="text-right" style={{listStyle: 'square url("../static/img/bullet.jpg")'}}><h5>
								{this.props.rows.map(function(row){
									return(
										<li style={{padding: "5px"}}>{row}</li>
										)
								})
							}
							</h5>
								</ul>
								</div>
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
