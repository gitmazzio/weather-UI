import React, { Component } from 'react';
import { Badge } from 'react-bootstrap';

class CurrentDayHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            wday: this.props.wday,
        }
    }

    getDay = () => {
        const actualDate = new Date(this.props.dayTime * 1000).toLocaleDateString('it-IT');
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
        return 'image-' + this.props.weather;
    }

    render() {
        return (<header className={this.getScenario()}>
            {/* return `/png/${this.props.data.weather[0].main.toLowerCase()}.png` */}

            {/* <img src="/png/clear.png" alt="" /> */}
            <Badge variant='light'>{this.getDay()}</Badge>
            <h1>{this.props.city}</h1>
            <p className="current_temp current_temp__max"><span className="current_temp--label">max</span>{Math.ceil(this.props.wday.temp.max)}°C</p>
            <p className="current_temp current_temp__min"><span className="current_temp--label">min</span>{Math.floor(this.props.wday.temp.min)}°C</p>
        </header>);
    }
}

export default CurrentDayHeader;