import React, { Component } from 'react';

class CurrentDayHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            city: this.props.city,
            wday: this.props.wday,
            minTemp: Math.floor(this.props.wday.temp.min),
            maxTemp: Math.ceil(this.props.wday.temp.max),
        }
    }


    render() {
        return (<header>
            <h1>{this.state.city}</h1>
            <p><span>max</span>{this.state.maxTemp}°C</p>
            <p><span>min</span>{this.state.minTemp}°C</p>
        </header>);
    }
}

export default CurrentDayHeader;