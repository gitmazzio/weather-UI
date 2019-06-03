import React, { Component } from 'react';
import { Badge } from 'react-bootstrap';

class CurrentDayHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            /* currentWeather: null,
            currentMainInfo: null,
            currentSys: null */
        }
    }

    getDay = () => {
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
        console.log(this.getCurrentWeather().description.replace(/\s/g, '').toLowerCase())
        return 'header-backgroud image-' + this.getCurrentWeather().description.replace(/\s/g, '').toLowerCase();
    }

    getMainInfo = () => {
        return this.props.currentWeather.main;
    }

    getCurrentWeather = () => {
        return this.props.currentWeather.weather[0];
    }

    render() {
        return (<header className={this.getScenario()}>
            <Badge variant='light'>{this.getDay()}</Badge>
            <h1>{this.props.city}</h1>
            <p className="w-current__description">{this.getCurrentWeather().description}</p>
            <p className="current_temp current_temp__max"><span className="current_temp--label">temperature </span>{Math.ceil(this.getMainInfo().temp)}<span className="current_temp--label">°C</span></p>
            <p className="current_temp current_temp__max"><span className="current_temp--label">wind </span>{this.props.currentWeather.wind.speed}<span className="current_temp--label">km/h</span></p>
            <p className="current_temp current_temp__max"><span className="current_temp--label">humidity </span>{Math.ceil(this.getMainInfo().humidity)}</p>


        </header>);
    }
}

export default CurrentDayHeader;