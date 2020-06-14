import React,{Component} from 'react';
import {randomword} from './word';
import 'bootstrap/dist/css/bootstrap.min.css';
import step0 from "./images/0.png";
import step1 from "./images/1.png";
import step2 from "./images/2.png";
import step3 from "./images/3.png";
import step4 from "./images/4.png";
import step5 from "./images/5.png";
import step6 from "./images/6.png";

class Hangman extends Component {
	static defaultProps ={
		maxWrong:6,
		images:[step0,step1,step2,step3,step4,step5,step6]
	};
	constructor(props){
		super(props);
		this.state={
			mistake:0,
			guessed:new Set(),
			answer:randomword()
		};
		this.handleGuess=this.handleGuess.bind(this);
	}

	guessedword() {
		return this.state.answer.split("").map(gandu =>
			(this.state.guessed.has(gandu) ? gandu:"_"));
	}

	handleGuess(event) {
		let letter=event.target.value;
		this.setState(st => ({
			guessed:st.guessed.add(letter),
			mistake:st.mistake+(st.answer.includes(letter)?0:1)
		}));
	}

	generateButtons() {
		return "qwertyuiopasdfghjklzxcvbnm-".split("").map(letter => (
				<button key={letter} value={letter} onClick={this.handleGuess} disabled={this.state.guessed.has(letter)} >
				{letter}
				</button>
			));
	}

	resetButton = () => {
		this.setState({
			mistake:0,
			guessed:new Set(),
			answer:randomword()
		});
	};

	render() {
		const gameover = this.state.mistake>=this.props.maxWrong;
		const iswinner =this.guessedword().join("")===this.state.answer;
		let gamestat=this.generateButtons();
		if(iswinner){
			gamestat = "you are a gooood friend of amit!!";
		}
		if(gameover) {
			gamestat = "spend time with amit bro...";
		}
		return (
			<div className='Hangman bg-dark'>
			<div className="text-right tx">
				<h2 className='text-light text-center'>How well do you know Amit</h2>
				<span className='text-primary h2'>Guessed wrong: {this.state.mistake}</span>
			</div>
				<div className='text-center ig'>
					<img src={this.props.images[this.state.mistake]} />
				</div>
				<p className="text-center text-light">Guess someting related to amit..</p>
				<div className="Hangman-word text-center">
					{!gameover?this.guessedword():this.state.answer}
				</div>		
				<p className='text-center text-warning keys'>{gamestat}</p>
				<div >
					<p className='text-center'>
						<button className='Hangman-reset' onClick={this.resetButton}>Reset</button>
					</p>
				</div>
			</div>
		);
	}
}

export default Hangman;