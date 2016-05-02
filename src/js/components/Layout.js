import React from "react";
import Links from "./Links"
import Nav from "./Nav"
import Footer from "./Footer"
export default class Layout extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			currentUser: this.props.params.currentUser,
		}
	}
	render() {
		return (
		<div>
		<Nav currentUser={this.state.currentUser}/>
		{this.props.children}
		</div>

		);
	}
};
