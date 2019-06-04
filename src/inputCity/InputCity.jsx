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
            city = city.name.toLowerCase();
            //console.log(city)
            return city.indexOf(keyword) > -1;
        })
            .slice(0, 10)
            .map(elem => <li key={elem.name + elem.subcountry} className="list-city" onClick={this.setCity}>{elem.name}</li>);

        this.setState({ citiesList });

        //fetch(`${this.state.API_URL}/weather?q=${city}&appid=b6907d289e10d714a6e88b30761fae22&units=metric`)
        /* fetch(`${this.props.API_URL}/find?callback=jQuery19106863759662683921_1559392207356&q=${event.target.value}&type=like&sort=population&cnt=30&appid=b6907d289e10d714a6e88b30761fae22&`)
            .then(response => response.json())
            .then(data => this.setState({ cities: data.list })); */
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
            <input type='text' placeholder='Search city...' className="col-12" onChange={this.handleChange} value={this.state.inputCity} />
            {/* <button type="submit" className="search-button">
                <svg class="submit-button"></svg> ciao
                      </button>*/}
            <ul className="cities-list">{this.state.citiesList}</ul>
        </div >);
    }
}

export default InputCity;                        