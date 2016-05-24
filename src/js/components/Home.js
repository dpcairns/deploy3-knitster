import React from "react"
import * as PatternActions from "../actions/PatternActions"
import { Link } from "react-router"


export default class Home extends React.Component{


	componentDidMount(){
		console.log("home.componentWillMount() says")
		PatternActions.initializePatterns();
		console.log("1) Home tried to initialize the patterns")
	}


	render(){

	return(
		<div class="container" id="wooshBox">
      <div class="row">
            <div class="col-sm-4">
              <img src="static/img/yarnbig.jpg" class="yarn-big" />
            </div>
            <div class="col-sm-offset-1 col-sm-7">
            			<Link to='patterns'> <div class="wiggly shadow home-box-padding round bg-red-large dot-border">
            					<div class="home-box bg-red-small">
            						<h1>find a pattern</h1>
            					</div>
            				</div>
            			</Link>

            			<Link to='patterns'>
            				<div class="wiggly shadow home-box-padding round bg-red-large dot-border">
            					<div class="home-box bg-red-small">
            						<h1>save a pattern</h1>
            					</div>
            				</div>
            			</Link>
            			<Link to='patterns'>
            				<div class="wiggly shadow home-box-padding round bg-red-large dot-border">
            					<div class="home-box bg-red-small">
            						<h1>make it happen</h1>
            					</div>
            				</div>
                  </Link>
            </div>
        </div>
		</div>
		)
	}
}
