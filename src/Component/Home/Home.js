import React, { Component } from 'react';
import './Home.css';
import Header from '../Header/Header';
import { format } from 'path';


class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
        }
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    items: json,
                });
            });
        console.log(this.setState.json)
    }
    render() {
        var { isLoaded, items } = this.state;
        if (!isLoaded) {
            return <div>Loading....</div>
        } else {
            return (
                <div className="App">
                    <Header />
                    <section>
                          <div className="content">
                            {/* <img src={require('../../assets/bg-form.jpg')} /> */}

                            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                                <ol className="carousel-indicators">
                                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                                </ol>
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img className="d-block w-100" src={require('../../assets/bg-form.jpg')} alt="First slide"></img>
                                    </div>
                                    <div className="carousel-item">
                                        <img className="d-block w-100" src={require('../../assets/bg-form2.jpg')} alt="Second slide"></img>
                                    </div>
                                    <div className="carousel-item">
                                        <img className="d-block w-100" src={require('../../assets/bg-form2.jpg')} />
                                    </div>
                                </div>
                                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Previous</span>
                                </a>
                                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Next</span>
                                </a>
                              </div>

                            {items.map(item => (
                                <span key={item.id}>
                                    <p>Title: {item.title}</p>
                                </span>
                            ))}
                        </div>
                    </section>
                </div>
            );
        }
    }
}
export default Home;
