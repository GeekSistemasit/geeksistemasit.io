// Dependecies
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Assets
import '../Global/css/Questions.css';

// Data 
import poll from '../../data/poll.js';


class AskTwo extends Component {
	constructor () {
		super();

		this.state = {
			category: ''
		}

		this.handleCheck = this.handleCheck.bind( this );
		this.handleNextStep = this.handleNextStep.bind( this );
	}

	handleNextStep() {
		poll.category = this.state.category;

		console.log( poll );
	}

	handleCheck ( e ) {
		var value = e.target.getAttribute( 'value' );

		this.setState({
			category: value
		});
		
		document.querySelector( '.box-btn-next a' ).classList.remove( 'disabled' );
	}

	render(){
		return (
			<div className="main-question ask-two">
				<img src="images/pantalla6.jpg" alt="background step two"/>
				<div className="content-with-background">
					<label>
						<input type="radio" name="category" value="Papelería" onClick={ this.handleCheck } /> 
				    	<img src="images/dot-naranja.png" alt="dot naranja check"/>
						<br />
						<span>Papelería</span>
					</label>
					<label>
						<input type="radio" name="category" value="Hogar" onClick={ this.handleCheck } /> 
				    	<img src="images/dot-naranja.png" alt="dot naranja check"/>
						<br />
						<span>Hogar</span>
					</label>
					<label>
						<input type="radio" name="category" value="Accesorios" onClick={ this.handleCheck } /> 
				    	<img src="images/dot-naranja.png" alt="dot naranja check"/>
						<br />
						<span>Accesorios</span>
					</label>
				</div>

				<div className="box-btn-home">
					<Link className="btn-own" to="/">
						<img src="images/inicio.png" alt="boton de home"/>
					</Link>
				</div>
				<div className="box-btn-next">
					<Link className="btn-own disabled" to="/ask-three" onClick={ this.handleNextStep }>
						<img src="images/siguiente.png"  alt="boton del siguiente paso" />
					</Link>
				</div>
			</div>
		);
	}
}

export default AskTwo;