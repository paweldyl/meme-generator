import React from "react";
import MemeForm from "./MemeForm";
import MemeImg from "./MemeImg";
class MemeContainer extends React.Component{
	constructor(){
		super();
		this.state = {
			src: "https://i.ytimg.com/vi/rnLgDqDQ1YE/hqdefault.jpg",
			upperText: "",
			lowerText: "",
			allMemes: ""
		};
		this.handleChange = this.handleChange.bind(this);
		this.randomMeme = this.randomMeme.bind(this);
	}
	componentDidMount(){
		fetch("https://api.imgflip.com/get_memes").then(response => response.json())
		.then(data =>{
			this.setState({
				allMemes: data.data.memes
			});
		});
	}
	handleChange(event){
		this.setState({
			[event.target.name]: event.target.value
		});
		console.log(this.state.allMemes);
	}
	randomMeme(event){
		event.preventDefault();
		let len = this.state.allMemes.length;
		this.setState(prevState =>{
			return{
				src: prevState.allMemes[Math.floor(Math.random() * len)].url
			};
		});
	}
	render(){
		return(
			<div className = "meme-container">
				<MemeImg 
					src = {this.state.src}
					upperText = {this.state.upperText} 
					lowerText = {this.state.lowerText} 
				/>
				<MemeForm
					handleChange = {this.handleChange} 
					upperText = {this.state.upperText} 
					lowerText = {this.state.lowerText} 
					randomMeme = {this.randomMeme}
				/>
			</div>
		);
	}
}

export default MemeContainer;