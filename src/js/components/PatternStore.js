import { EventEmitter } from "events";
import * as PatternActions from "../actions/PatternActions"

import dispatcher from "../dispatcher"

class PatternStore extends EventEmitter {
	constructor(){
		super()
		this.patterns = []
		this.pattern = {}
	}

	getAll() {
		console.log("store.getAll() says")
		console.log("4B) okay, i'll return store.this.patterns")
		return this.patterns;
	}

	addNewPattern(pattern){
				this.patterns.unshift(pattern)
				console.log("store.addNewPattern() says")
				console.log("3) pattern pushed into store.this.patterns")
				this.emit("change")
	}
	
	initPatterns(data){
		this.patterns = data
		console.log("store.initPatterns() says")
		console.log("3) patterns set to store.this.patterns")
		this.emit("change")
	}

	patternRemoved(){
		console.log("store.patternRemoved()")
		PatternActions.initializePatterns()
		this.emit("change")
	}
	

	handleActions(action){
		switch(action.type){
			case "CREATE_PATTERN":{
				console.log("CREATE_PATTERN")
				this.addNewPattern(action.postedNewPatternObject)
			}
			case "REMOVE_ONE":{
				console.log("REMOVE_ONE")
				this.patternRemoved()
			}
			case "FETCH_PATTERNS":{
				console.log("FETCH_PATTERNS")
				this.initPatterns(action.data)
			}
			
		}
	}
}
const patternStore = new PatternStore;
dispatcher.register(patternStore.handleActions.bind(patternStore));
export default patternStore;
