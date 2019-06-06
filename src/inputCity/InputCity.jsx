import React, { Component } from 'react';
import './InputCity.css';
import cities from './cities.json';

class InputCity extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputCity: '',
            cities: null,
            citiesList: null
        }
    }

    submitHandler = () => {
        this.props.handlerFromParent(this.state.inputCity);
        this.setState({
            inputCity: ''
        });
        this.setState({ citiesList: null })
    }

    handleChange = (event) => {
        const keyword = event.target.value.toLowerCase();
        this.setState({
            inputCity: event.target.value
        });

        if (event.target.value === '') {
            this.setState({ citiesList: [] });
            return;
        }

        const citiesList = cities.filter((city) => {
            return city.name.toLowerCase().indexOf(keyword) > -1;
        })
            .slice(0, 10)
            .map(elem => <li key={elem.name + elem.subcountry} className="list-city" onClick={this.setCity}>{elem.name}</li>);
        this.setState({ citiesList });
    }

    setCity = (evt) => {
        evt.preventDefault();
        const citySelected = evt.currentTarget.innerHTML;

        this.setState({
            inputCity: citySelected
        }, () => {
            this.submitHandler();
        });

        this.setState({ citiesList: null })
    }

    handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            this.submitHandler();
        }
    }

    render() {
        return (<div className="input-fields" onKeyPress={this.handleKeyPress}>
            <span>
                <i class="fa fa-search"></i>
            </span>
            <input type='text' placeholder='Search city...' onChange={this.handleChange} value={this.state.inputCity} />
            <ul className="cities-list">{this.state.citiesList}</ul>
        </div >);
    }
}

export default InputCity;                        