import React, { Component } from 'react';
import './InputCity.css';

import { Button } from 'react-bootstrap';


class InputCity extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputCity: '',
            cities: null,
        }
    }

    submitHandler = (evt) => {
        evt.preventDefault();
        console.log('click')

        this.props.handlerFromParent(this.state.inputCity);
        this.setState({
            inputCity: ''
        });
    }

    handleChange = (event) => {
        //fetch(`${this.state.API_URL}/weather?q=${city}&appid=b6907d289e10d714a6e88b30761fae22&units=metric`)
        /* fetch(`${this.props.API_URL}/find?callback=jQuery19106863759662683921_1559392207356&q=${event.target.value}&type=like&sort=population&cnt=30&appid=b6907d289e10d714a6e88b30761fae22&`)
            .then(response => response.json())
            .then(data => this.setState({ cities: data.list })); */

        /* let findCities = cities.filter(elem => ) */

        this.setState({
            inputCity: event.target.value
        });
    }

    render() {
        return (<div className="input-fields">
            <input type='text' placeholder='Search a city...' className="col-12" onChange={this.handleChange} value={this.state.inputCity}></input>

            <label htmlFor={this.state.inputCity} className="input-arrow" onClick={this.submitHandler}>
                <span >
                    Search
                </span>
                {/* <Button variant="primary" size="sm" xs className='button-search col-4' >Search</Button> */}
            </label>
        </div>
        )
    }


}

export default InputCity;