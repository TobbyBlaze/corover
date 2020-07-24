import React, { Component } from 'react'
import ReactDOM from 'react-dom';

export default class Landing extends Component{
    render(){
        return(
            <div>
                <section className="hero-equal-height pt-165 pb-100 overflow-hidden">
                    <div className="hero-shape"></div>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-12 col-lg-6">
                                <div className="hero-slider-content">
                                    <h1>Corover</h1>
                                    <p className="lead">Get live updates on the pandemic coronavirus and quickly diagnose yourself. </p>
                                </div>
                            </div>
                            <div className="col-md-12 col-lg-6">
                                <div className="hero-animation-img">
                                    <img src="img/hero-animation-01.svg" alt="hero" className="img-fluid d-none d-lg-block animation-two" width="150" />

                                    <img src="img/hero-single-img-1.svg" alt="hero" className="animation-one" />
                                    <img src="img/hero-animation-03.svg" alt="hero" className="img-fluid d-none d-lg-block animation-four" width="250" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
