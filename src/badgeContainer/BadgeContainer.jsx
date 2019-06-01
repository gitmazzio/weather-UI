import React, { Component } from 'react';
import BadgeWeather from './../badgeWeather/BadgeWeather'
import './BadgeContainer.css'


class BadgeContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    listOfItems = () => this.props.list.map((elem) => <BadgeWeather key={elem.dt} data={elem} />);

    render() {
        return (
            <div className="badge-container">
                {
                    this.listOfItems()
                }
            </div>);
    }
}

export default BadgeContainer;