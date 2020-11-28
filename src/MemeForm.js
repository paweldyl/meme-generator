import React from "react";

class MemeForm extends React.Component{
	render(){
		return(
			<form className = "meme-form">
				<input onChange = {this.props.handleChange} name = "upperText" value = {this.props.upperText} type = "text" placeholder = "Upper text"/>
				<input onChange = {this.props.handleChange} name = "lowerText" value = {this.props.lowerText} type = "text" placeholder = "Lower text"/>
				<button onClick = {this.props.randomMeme}>GEN</button>
			</form>
		);
	}
}

export default MemeForm;