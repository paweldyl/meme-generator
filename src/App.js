import React from "react"
import logo from './logo.svg';
import './App.css';
import MemeContainer from "./MemeContainer"

class App extends React.Component {
	render(){
		return(
			<div className = "container">
				<MemeContainer />
			</div>
		);
	}
}

export default App;
