import React from "react";

import TextBox from "./TextBox"
import Video from "./Video"
import { Link } from "react-router"

export default class VideoSplash extends React.Component {
	constructor(){
		super();
		this.state = {
			videoLibrary: [
							"../static/img/knitting.mp4#t=100",
							"../static/img/knitting7.mp4#t=100",
							]
						}
		
}
	//const videoLibraryDelay = this.state.videoLibrary.map(function(item){
		//return item + "#t=200"
	render() {
		const randomNumber = Math.floor((Math.random() * (this.state.videoLibrary.length - 1)) + 1)
		
		return (
	<div class="noverflow">
		<div>
			{console.log("This is video number: " + randomNumber)}
			<Video videoSource={this.state.videoLibrary[randomNumber]} />
		<TextBox>
				<h2>Knitster is your home for knits on the net.
				<br/>
				 Craft an account and get started today!</h2>
		</TextBox>
		</div>
	</div>
		);
	}
};
