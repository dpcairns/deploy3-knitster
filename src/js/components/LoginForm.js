import React from "react"
import { Link } from "react-router"

export default class LoginForm extends React.Component {
    constructor(){
  super()
    this.state = {
      currentUser: ""
    }
  }
  handleNameLoginChange(e){
    this.setState({currentUser: e.target.value})
  }

	render() {
		return (

 <div class="container-fluid small-top-gap small-bottom-gap">
  <div class="row">

   <div class="col-md-12 col-sm-12 col-xs-12">
    <form method="post">
     <div class="form-group ">
      <label class="control-label requiredField" for="username">
       Username
       <span class="asteriskField">
        *
       </span>
      </label>
      <input class="form-control" id="username" name="username"  value={this.state.currentUser} onChange={this.handleNameLoginChange.bind(this)} placeholder="ex: yourname34" type="text"/>
     </div>
     <div class="form-group ">
      <label class="control-label requiredField" for="text">
       Password
       <span class="asteriskField">
        *
       </span>
      </label>
      <input class="form-control" id="text" name="text" placeholder="ex: password1234" type="password"/>
     </div>
     <div class="form-group ">
      <label class="control-label requiredField" for="text1">
       Password again
       <span class="asteriskField">
        *
       </span>
      </label>
      <input class="form-control" id="text1" name="text1" placeholder="ex: password1234" type="password"/>
     </div>
     <div class="form-group">
      <div>
       <Link to={"index/" + this.state.currentUser}><button class="btn btn-warning align-right dot-border">
        Submit
       </button></Link>
      </div>
     </div>
    </form>
   </div>
  </div>
 </div>


		);
	}
};
