import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Bootstrap from "./vendor/bootstrap-without-jquery";

import Layout from "./components/Layout";
import VideoSplash from "./components/VideoSplash";
import Home from "./components/Home"
import List from "./components/List"
import Detail from "./components/Detail"
import PatternForm from "./components/PatternForm"


const app = document.getElementById('app');

ReactDOM.render(
<Router history={hashHistory}>
	<Route path="/" component={VideoSplash}></Route>
	<Route path="index/:currentUser" name="index" component={Layout}>
		<IndexRoute component={Home}></IndexRoute>
		<Route path="/newPattern" name="newPattern" component={PatternForm}></Route>
		<Route path="/patterns" name="patterns" component={List}></Route>
		<Route path="/patterns/:PatternId" component={Detail}></Route>
	</Route>
</Router>, app);
