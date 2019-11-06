import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './home';
import DealDetailPage from './components/dealdetailpage';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
const routing = (
    <Router>
        <Switch>
            <Route exact path='/deals/:specificDeals' component={DealDetailPage} />
            <Route exact path='/' component={Home} />
        </Switch>
    </Router>
);
ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
