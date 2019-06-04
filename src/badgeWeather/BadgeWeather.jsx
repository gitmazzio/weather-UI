import React from 'react';
import './BadgeWeather.css'

class BadgeWeather extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            /* dayTime: this.props.data.dt,
            pressure: this.props.data.pressure,
            temp: this.props.data.temp,
            weather: this.props.data.weather[0] */
        }
    }

    /* setIcon = () => {
        if ()
    } */

    getDay = () => {
        const options = { month: '2-digit', day: 'numeric' };
        const actualDate = new Date(this.props.data.dt * 1000).toLocaleDateString('it-IT', options);
        const today = new Date();
        let tomorrow = new Date();
        tomorrow.setDate(today.getDate() + 1);

        if (actualDate === today.toLocaleDateString('it-IT', options)) {
            return 'Today'
        }
        if (actualDate === tomorrow.toLocaleDateString('it-IT', options)) {
            return 'Tomorrow';
        }
        else {
            return actualDate;
        }
    }

    getPicUrl = () => {
        return `/png/${this.props.data.weather[0].description.replace(/\s/g, '').toLowerCase()}.png`
    }

    render() {
        return (
            <div className="w-badge">
                <p className="w-day">{this.getDay()}</p>
                <img src={this.getPicUrl()} alt="" className="w-img" />

                <h4>
                    {this.props.data.weather.main}
                </h4>
                <p>{this.props.data.weather.main}</p>
                <p>
                    <span className="max">{Math.ceil(this.props.data.temp.max)}°C</span>
                    <span className="min">{Math.floor(this.props.data.temp.min)}°C</span>
                </p>
            </div>
        );
    }
}

export default BadgeWeather;