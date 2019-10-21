
import React, { Component } from 'react';
import './Header.css';
import ModalLogin from '../Modal/ModalLogin';
export default class Header extends Component {


    render() {
        return (
            <div className="App">
                {/* <div classNameName="topnav">
                    <a classNameName="active" href="#">MYWEBSITE</a>
                    <a href="MEN">MEN</a>
                    <a href="WOMEN">WOMEN</a>
                    <a href="MOBILE">MOBILE COVERS</a>
                    <input type="text" placeholder="Search by Product, Category or Collection "></input>
                    <ModalLogin />
                    <div classNameName="cart"><i classNameName="fa fa-shopping-cart fa_custom fa-2x"></i></div>
                </div> */}
                <div className="bs-example">
                    <nav className="navbar navbar-expand-md navbar-light white">
                        <a href="#" className="navbar-brand">Brand</a>
                        <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                            <span className="navbar-toggler-icon"></span>
                        </button>

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
                                    <input type="text" className="form-control" placeholder="Search" />
                                    <div className="input-group-append">
                                        <button type="button" className="btn btn-secondary"><i className="fa fa-search"></i></button>
                                    </div>
                                </div>
                            </form>

                            <div className="navbar-nav">
                                <ModalLogin />
                                <div classNameName="cart"><i className="fa fa-shopping-cart fa_custom fa-2x"></i></div>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        )
    }
}