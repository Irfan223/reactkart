import React, { Component } from 'react';
import './address.css';
import { Link } from 'react-router-dom';
class Address extends Component {

    render() {

        return (
            <div className="App">
                <Link to="/payment"><button>Continue</button></Link>
            </div>
        );
    }
}
export default Address;