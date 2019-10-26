
import React, { Component } from 'react';
import './Header.css';
import ModalLogin from '../Modal/ModalLogin';
import ModalLoginRegister from '../LoginRegisterModal/ModalLoginRegister'
export default class Header extends Component {


    render() {
        return (
            <div className="App">
                <div className="bs-example">
                    <nav className="navbar navbar-expand-md navbar-light white">
                        <a href="#" className="navbar-brand">Brand</a>
                        <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                            <div className="navbar-nav">
                                <a href="#" className="nav-item nav-link active">Home</a>
                                <a href="#" className="nav-item nav-link">Profile</a>
                                <div className="nav-item dropdown">
                                    <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Messages</a>
                                    <div className="dropdown-menu">
                                        <a href="#" className="dropdown-item">Inbox</a>
                                        <a href="#" className="dropdown-item">Sent</a>
                                        <a href="#" className="dropdown-item">Drafts</a>
                                    </div>
                                </div>
                            </div>
                            <form className="form-inline">
                                <div className="input-group">
                                    <input id="inputType" type="text"  placeholder="Search" />
                                    <div className="input-group-append">
                                        <button id="searchButton" type="button"><i className="fa fa-search"></i></button>
                                    </div>
                                </div>
                            </form>

                            <div className="navbar-nav">
                                <ModalLoginRegister />
                                <div className="cart"><i className="fa fa-shopping-cart fa_custom fa-2x"></i></div>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        )
    }
}