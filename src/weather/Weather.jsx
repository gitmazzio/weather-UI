import React from 'react';
import BadgeContainer from './../badgeContainer/BadgeContainer';
import CurrentDayHeader from './../currentDayHeader/CurrentDayHeader';
import InputCity from './../inputCity/InputCity';

/* URL https://openweathermap.org/ */

import './Weather.css'

class Weather extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            city: null,
            listOfItems: null,
            API_URL: 'https://openweathermap.org/data/2.5',
            inputCity: 'milan'
        }
    }

    componentWillMount() {
        this.getCity();
    }


    getCity = () => {
        fetch(`${this.state.API_URL}/weather?q=${this.state.inputCity}&appid=b6907d289e10d714a6e88b30761fae22&units=metric`)
            .then(response => response.json())
            .then(data => this.getWeather(data.id));
    }

    getWeather = (id) => {
        //api.openweathermap.org/data/2.5/forecast/daily?id={city ID}&cnt={cnt}
        fetch(`${this.state.API_URL}/forecast/daily?id=${id}&cnt=10&appid=b6907d289e10d714a6e88b30761fae22&units=metric`)
            .then(response => response.json())
            .then(data => {
                //console.log(data)
                this.setState({ data })
                this.setState({ city: data.city.name })
                this.setState({ listOfItems: data.list })
            });
    }

    getScenario = () => {
        return 'scenario ' + this.state.data.list[0].weather[0].main.toLowerCase();

    }

    render() {
        return (
            this.state.listOfItems ?
                <div className="weather">
                    <div className={this.getScenario()}>
                        <InputCity />
                        <CurrentDayHeader city={this.state.city} wday={this.state.data.list[0]} />
                        <BadgeContainer list={this.state.listOfItems} />
                    </div>
                </div>
                : <h2>Loading...</h2>
        )
    }
}

export default Weather;