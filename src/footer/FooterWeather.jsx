import React, { Component } from 'react';
import './FooterWeather.css'

class FooterWeather extends Component {
    constructor(props) {
        super(props);
        console.log('footer')
        this.state = {}
    }

    footerStyle = {
        fontStyle: 'small'
    };

    render() {
        return (<footer>
            <span>
                Made with ❤️ with
      <a target="_blank" rel="noopener noreferrer" href="https://reactjs.org/https://github.com/vuejs/vue"> React.js</a>
            </span>
        </footer >);
    }
}

export default FooterWeather;