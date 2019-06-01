import React from 'react';
import './BadgeWeather.css'

class BadgeWeather extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dayTime: this.props.data.dt,
            pressure: this.props.data.pressure,
            temp: this.props.data.temp,
            weather: this.props.data.weather[0]
        }
    }

    /* setIcon = () => {
        if ()
    } */

    getWeatherHours = () => {
        const actualDate = new Date(this.state.dayTime * 1000);
        return actualDate.toLocaleDateString('it-IT');

    }

    render() {
        return (
            <div className="badge">
                <h4>
                    {this.state.weather.main}
                </h4>
                <p>{this.state.weather.description}</p>
                <p>{this.getWeatherHours()}</p>
            </div>
        );
    }
}

export default BadgeWeather;