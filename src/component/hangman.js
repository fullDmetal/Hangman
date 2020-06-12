import React,{Component} from 'react';
import {randomword} from './word';
import 'bootstrap/dist/css/bootstrap.min.css';
import step0 from "./images/0.jpg";
import step1 from "./images/1.jpg";
import step2 from "./images/2.jpg";
import step3 from "./images/3.jpg";
import step4 from "./images/4.jpg";
import step5 from "./images/5.jpg";
import step6 from "./images/6.jpg";

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
		return "qwertyuiopasdfghjklzxcvbnm -".split("").map(letter => (
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
				<h2 className='text-light text-center'>How much you know Amit</h2>
				<div className="wg">
				<span className='text-primary'>Guessed wrong: {this.state.mistake}</span>
				</div>
				<div className='text-center ig'>
					<img src={this.props.images[this.state.mistake]} />
				</div>
				<p className="text-center text-light">Guess someting related to amit..</p>
				<div className="Hangman-word text-center">
					{!gameover?this.guessedword():this.state.answer}</div>
				<p className='text-center text-warning mt-4'>{gamestat}</p>
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