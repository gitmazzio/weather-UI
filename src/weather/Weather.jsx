import React from 'react';
import BadgeContainer from './../badgeContainer/BadgeContainer';
import CurrentDayHeader from './../currentDayHeader/CurrentDayHeader';
import InputCity from './../inputCity/InputCity';

/* URL https://openweathermap.org/ */

import './Weather.css'
import Loading from '../loading/Loading';

class Weather extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataCurrentWeather: null,
            data10days: null,
            city: null,
            listOfItems10days: null,
            API_URL: 'https://openweathermap.org/data/2.5',
            inputCity: '',
            defaultCity: 'Milan'
        }
    }

    componentWillMount() {
        this.getCity(this.state.defaultCity);
    }


    getCity = (city) => {
        fetch(`${this.state.API_URL}/weather?q=${city}&appid=b6907d289e10d714a6e88b30761fae22&units=metric`)
            .then(response => response.json())
            .then(data => {
                this.setState({ dataCurrentWeather: data })
                this.getWeather(data.id)
            })
            .catch((err) => console.log(err))
    }

    getWeather = (id) => {
        //api.openweathermap.org/data/2.5/forecast/daily?id={city ID}&cnt={cnt}
        fetch(`${this.state.API_URL}/forecast/daily?id=${id}&cnt=10&appid=b6907d289e10d714a6e88b30761fae22&units=metric`)
            .then(response => response.json())
            .then(data => {
                this.setState({ data10days: data })
                this.setState({ city: data.city.name })
                this.setState({ listOfItems10days: data.list })
            })
            .catch((err) => console.log(err))

        this.forceUpdate();
    }

    getScenario = () => {
        return 'scenario image ' + this.state.dataCurrentWeather.weather[0].description.replace(/\s/g, '').toLowerCase();
    }

    handleCity = (value) => {
        this.setState({
            inputCity: value
        });
        this.getCity(value);
    }

    getActualCity = () => this.state.city;

    render() {
        return (
            this.state.listOfItems10days ?
                <div className="weather">
                    <div className={this.getScenario()}>
                        <InputCity handlerFromParent={this.handleCity} API_URL={this.state.API_URL} />
                        <CurrentDayHeader city={this.getActualCity()} API_URL={this.state.API_URL} currentWeather={this.state.dataCurrentWeather}/* weather={this.state.data10days.list[0].weather[0].main.toLowerCase()} wday={this.state.data10days.list[0]} dayTime={this.state.listOfItems10days[0].dt} */ />
                        <BadgeContainer list={this.state.listOfItems10days} />
                    </div>
                </div>
                : <Loading />
        )
    }
}

export default Weather;