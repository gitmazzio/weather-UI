import React, { Component } from 'react';
import './FooterWeather.css'

class FooterWeather extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    footerStyle = {
        fontStyle: 'small'
    };

    render() {
        return (<footer>
            <p>

            </p>
            <span>
                Made by <a target="_blank" rel="noopener noreferrer" href="http://matteomazziotti.it" className="me">Matteo Mazziotti</a> with <span role="img" aria-label="heart">❤️</span> with
      <a target="_blank" rel="noopener noreferrer" href="https://reactjs.org/https://github.com/vuejs/vue"> React</a>
            </span>
        </footer >);
    }
}

export default FooterWeather;