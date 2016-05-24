import React from "react";

import TextBox from "./TextBox"
import Video from "./Video"
import { Link } from "react-router"

export default class VideoSplash extends React.Component {
	constructor(){
		super();
		this.state = {
			videoLibrary: [
							"../static/img/knitting.mp4#t=100",							]
						}

}
	//const videoLibraryDelay = this.state.videoLibrary.map(function(item){
		//return item + "#t=200"
	render() {
		const randomNumber = Math.floor((Math.random() * (this.state.videoLibrary.length - 1)))

		return (
	<div style={{overflow: "hidden"}}>
		<div>
			{console.log("This is video number: " + randomNumber)}
      <Video videoSource={this.state.videoLibrary[randomNumber]} />

		<TextBox>
				<h3>Knitster is your home for knits on the net.
				 <p>Craft an account and get started today!</p></h3>
				<h6><i>(form data is bogus and will not be saved; nonetheless, you must enter a username to proceed)</i></h6>
		</TextBox>
		</div>
	</div>
		);
	}
};
