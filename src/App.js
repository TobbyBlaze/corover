import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
// import Country from './Country';
import Statistic from './components/Statistic';
// import History from './History';
import Landing from './components/Landing';
import Diagnosis from './components/Diagnosis';
import About from './components/About';
import Chart from './components/Chart';
import Youtube from './components/Youtube';
import Footer from './components/Footer';

// import { Provider } from 'react-redux';

// import { createStore, applyMiddleware } from 'redux';

// import store from '../store';

// const store = createStore(() => [], {}, applyMiddleware());

export default class App extends Component {
    render() {
        return (
            // <Provider store={store}>
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
            // </Provider>
        );
    }
}

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}