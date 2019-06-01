import React, { Component } from 'react';
import './InputCity.css';

class InputCity extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputCity: null
        }
    }

    handleCityInput = () => {
        console.log('ciao');
    }

    render() {
        return (<React.Fragment>
            <input type='text' placeholder='Insert your city' value={this.state.inputCity}></input>
            <button className='button-search' onClick={this.handleCityInput()}>Search</button> {/* FIX bottone a destra dentro input
            FIX anche onClick */}
        </React.Fragment>
        )
    }


}

export default InputCity;