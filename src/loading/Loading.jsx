import React, { Component } from 'react';
import './Loading.css';

class Loading extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (<div className="wrap">
            <div className="loading">
                <div className="bounceball"></div>
                <div className="text">NOW LOADING</div>
            </div>
        </div>);
    }
}

export default Loading;