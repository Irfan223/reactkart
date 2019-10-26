import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import Home from './Component/Home/Home';
import CLogin from './Component/Login/CLogin';
import CRegister from './Component/Register/CRegister';
import * as serviceWorker from './serviceWorker';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

ReactDOM.render(<Home />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
const routing = (
  <Router>
    <div>
      <Route path="/" component={Home} />
      <Route path="/Register" component={CRegister} />
      <Route path="/Login" component={CLogin} />
    </div>
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'))
serviceWorker.unregister();
