import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Landing from './components/Landing';
import Statistic from './components/Statistic';
import Diagnosis from './components/Diagnosis';
import About from './components/About';
import Support from './components/Support';
import Faq from './components/Faq';
// import ChartComponent from './components/Chart';
import Youtube from './components/Youtube';
import Footer from './components/Footer';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Landing />
          <Routes>
            <Route path="/" element={<Statistic />} />
            <Route path="/diagnosis" element={<Diagnosis />} />
            <Route path="/about" element={<About />} />
            <Route path="/support" element={<Support />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/privacy-policy" element={<Privacy />} />
          </Routes>
          {/* <ChartComponent /> */}
          <Youtube />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

if (document.getElementById('app')) {
  ReactDOM.render(<App />, document.getElementById('app'));
}
