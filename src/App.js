import React from 'react';
import './App.css';
import Weather from './weather/Weather';

import 'bootstrap/dist/css/bootstrap.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: this.props.name ? capitalize(this.props.name) : null,
    }
  }

  setName = (e) => {
    // console.log('title', e.target.value)
    this.setState({
      name: capitalize(e.target.value)
    })
  }

  render() {

    return (<div className="App" >
      <Weather />

    </div>
    );
  }
}

export default App;

function capitalize(params) {
  return params.charAt(0).toUpperCase() + params.slice(1);
}