import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './Header';
// import Country from './Country';
import Statistic from './Statistic';
// import History from './History';
import Landing from './Landing';
import Diagnosis from './Diagnosis';
import About from './About';
import Chart from './Chart';
import Youtube from './Youtube';
import Footer from './Footer';

// import { Provider } from 'react-redux';

// import { createStore, applyMiddleware } from 'redux';

import store from '../store';

// const store = createStore(() => [], {}, applyMiddleware());

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
            <BrowserRouter>
                <div>
                    <Header />
                    <Landing />
                    <Switch>
                        {/* <Route exact path='/Corover/public/' component={Country} /> */}
                        <Route exact path='/' component={Statistic} />
                        {/* <Route exact path='/project/Corover/public/' component={Statistic} /> */}
                        {/* <Route exact path='/Corover/public/histories' component={History} /> */}
                        <Route exact path='/diagnosis' component={Diagnosis} />
                        {/* <Route exact path='/project/Corover/public/diagnosis' component={Diagnosis} /> */}
                        <Route exact path='/about' component={About} />
                        {/* <Route exact path='/project/Corover/public/about' component={About} /> */}
                    </Switch>
                    <Chart />
                    <Youtube />
                    <Footer />
                </div>
            </BrowserRouter>
            </Provider>
        );
    }
}

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}