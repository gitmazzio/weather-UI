import React from 'react';
import App from './../App';

class FormTitle extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            text: 'ciao'
        };
    };



    render() {
        return (
            <React.Fragment>
                <input type="text" placeholder="Write new Name" onChange={this.props.onChange}></input>
            </React.Fragment>
        )
    }

    editTitle = (e) => {
        let text = e.target.value;
        console.log(text);
        App.setName(text);
    }
}

export default FormTitle;

