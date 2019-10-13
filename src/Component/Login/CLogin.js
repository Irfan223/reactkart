import React, { Component } from 'react';
import './CLogin.css';
const axios = require('axios');
const qs = require('qs');
const form = new FormData();
export default class CLogin extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userEmail: '',
            userPassword: ''
        };
        // this.handleChange = this.handleChange.bind(this);
        // this.login = this.login.bind(this);
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
        this.setState({ [event.target.name]: event.target.value });
    }

    login = event => {
        // alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
        const email = this.state.userEmail;
        const password = this.state.userPassword;
        axios.post('http://localhost:4000/api/CusLogin?email='+email+'&password='+password)
        .then(function (response) {
            console.log(response);
        })
            .catch(function (error) {
                console.log(error);
            });
    }

    // componentDidMount() {
    // }

    render() {
        return (
            <div>
                <div className="logintitle">Log In</div>
                <br /><div className="title">Discover Fashion!</div>
                <div className="texttitle">You're just one step away from signing up</div><br />
                <div className="socialLogin">
                    <button className="fb">Facebook</button>&nbsp;&nbsp;
              <button className="google">Google</button>
                </div><br />
                <hr />
                <div className="or">Or</div><br />
                <form onSubmit={this.login}>
                    <input className="input" type="text" name="userEmail" value={this.state.userEmail} onChange={this.handleChange} placeholder="Please Enter Email/Phone" required /><br /><br />
                    <input className="input" type="password" name="userPassword" value={this.state.userPassword} onChange={this.handleChange} placeholder="Please Enter Password" required />
                    <br /><br /><input type="submit" className="loginButton" value="Login" />
                </form>
            </div>
        );
    }
}