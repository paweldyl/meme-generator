import React from "react";

class MemeImg extends React.Component{
	render(){
		return(
			<div className = "meme-img">
				<img src = {this.props.src} />
				<div className = "upper-text">{this.props.upperText}</div>
				<div className = "lower-text">{this.props.lowerText}</div>
			</div>
		);
	}
}

export default MemeImg;