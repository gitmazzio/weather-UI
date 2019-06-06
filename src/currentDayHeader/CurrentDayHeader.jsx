import React, { Component } from 'react';
import { Badge } from 'react-bootstrap';
/* import './details.css'; */

class CurrentDayHeader extends Component {
    constructor(props) {
        super(props);
        this.getHourlyWeather();
        this.state = {
            hourlyWeather: null
            /* currentWeather: null,
            currentMainInfo: null,
            currentSys: null */
        }
    }

    getHourlyWeather = () => {
        //api.openweathermap.org/data/2.5/forecast/daily?id={city ID}&cnt={cnt}
        fetch(`${this.props.API_URL}/forecast/hourly?id=${this.props.idCity}&cnt=10&appid=b6907d289e10d714a6e88b30761fae22&units=metric`)
            .then(response => response.json())
            .then(data => {
                let options = { month: '2-digit', day: 'numeric' };
                const today = new Date().toLocaleDateString('it-IT', options);
                let hourlyWeather = data.list.filter((elem) => new Date(elem.dt * 1000).toLocaleDateString('it-IT', options) === today);
                console.log(hourlyWeather);
                this.setState({ hourlyWeather })
            })
            .catch((err) => console.log(err))
    }

    getDayToString = () => {
        const actualDate = new Date(this.props.currentWeather.dt * 1000).toLocaleDateString('it-IT');
        const today = new Date();
        let tomorrow = new Date();
        tomorrow.setDate(today.getDate() + 1);

        if (actualDate === today.toLocaleDateString('it-IT')) {
            return 'Today'
        }
        if (actualDate === tomorrow.toLocaleDateString('it-IT')) {
            return 'Tomorrow';
        }
        else {
            return actualDate;
        }
    }

    getScenario = () => {
        return 'header-backgroud image-' + this.getCurrentWeather().description.replace(/\s/g, '').toLowerCase();
    }

    getMainInfo = () => {
        return this.props.currentWeather.main;
    }

    getCurrentWeather = () => {
        return this.props.currentWeather.weather[0];
    }

    getMoreDetails = () => {
        document.getElementsByTagName('body')[0].classList.add('search-active');
    }

    render() {
        return (
            <React.Fragment>
                <header className={this.getScenario()}>
                    <Badge variant='light'>{this.getDayToString()}</Badge>
                    <h1>{this.props.city}</h1>
                    <p className="w-current__description">{this.getCurrentWeather().description}</p>
                    <p className="current_temp current_temp__max"><span className="current_temp--label">temperature </span>{Math.ceil(this.getMainInfo().temp)}<span className="current_temp--label">°C</span></p>
                    <p className="current_temp current_temp__max"><span className="current_temp--label">wind </span>{this.props.currentWeather.wind.speed}<span className="current_temp--label">km/h</span></p>
                    <p className="current_temp current_temp__max"><span className="current_temp--label">humidity </span>{Math.ceil(this.getMainInfo().humidity)}<span className="current_temp--label">%</span></p>
                </header>
            </React.Fragment>);
    }
}

export default CurrentDayHeader;