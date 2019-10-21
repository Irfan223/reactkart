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
                        
                    </section>
                </div>
            );
        }
    }
}
export default Home;
