import React from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './title/Title';
import Counter from './counter/Counter';
import FormTitle from './formTitle/FormTitle';
import Weather from './weather/Weather';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: this.props.name ? capitalize(this.props.name) : null,
    }
  }

  setName = (e) => {
    // console.log('title', e.target.value)
    this.setState({ name: capitalize(e.target.value) })
  }

  render() {
    let title;
    if (!this.state.name) {
      title = null;
    } else {
      title = <Title name={this.state.name} />;
    }

    return (
      <div className="App">
        {/*  <header className="App-header">
          {title}
          <Counter />
          <FormTitle onChange={this.setName} />

          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
        </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
        </a>
        </header> */}


        <Weather />

      </div>
    );
  }
}

export default App;

function capitalize(params) {
  return params.charAt(0).toUpperCase() + params.slice(1);
}
