import React, { Component } from 'react';
import './checkout.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';

class checkout extends Component {


    render() {

        return (
            <div className="App">
                <hr />
                <div className="container">
                    <div className="row">
                        <div className="col-sm-8" id="checkout">< br />
                            <div className="container">
                                <div className="row">
                                    <div className="col" id="card">Hello</div>
                                </div>
                            </div><br />
                            <div className="container">
                                <div className="row">
                                    <div className="col" id="card">
                                        Shop for Rs 500 to get <strong>Free Delivery</strong>
                                    </div>
                                </div>
                            </div>< br />
                            <div className="container">
                                <div className="row" id="card">
                                    <div className="col-sm-10">
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <img src="http://placekitten.com/200/126" width="150px" height="170px" />
                                            </div>
                                            <div className="col-sm-9">
                                                Hello
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-2">
                                        Rs 600
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="container">
                                <div><strong>COUPONS</strong></div>< br />
                                <div className="row">
                                    <div className="col-sm-9">
                                        <strong>Apply Coupons</strong>
                                    </div>
                                    <div className="col-sm-3">
                                        <button>Apply</button>
                                    </div>
                                </div>
                            </div>
                            < hr />
                            <div className="container">
                                <div><strong>PRICE DETAILS</strong></div><br />
                                <div className="row">
                                    <div className="col-sm-9">
                                        <div className="orderPadding">
                                            <div>Bag Total</div>
                                            <div>Coupon Discount</div>
                                            <div>Order Total</div>
                                            <div>Delivery Charges</div>
                                        </div>
                                    </div>
                                    <div className="col-sm-3">
                                        <div className="orderPadding">
                                            <div>Rs 600</div>
                                            <button>Apply</button>
                                            <div>Rs 600</div>
                                            <div>Rs 50</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div className="container">
                                <div className="row">
                                    <div className="col-sm-9">
                                        <strong>Total</strong>
                                    </div>
                                    <div className="col-sm-3">
                                        <strong>Rs 650</strong>
                                    </div>
                                </div>
                            </div>< br />
                            <div className="container">
                                <div className="row">
                                    <div className="col">
                                        <Link to="/address">
                                        <button className="button">Place Order</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}
export default checkout;