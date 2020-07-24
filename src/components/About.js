import React, { Component } from 'react'
import ReactDOM from 'react-dom';

export default class About extends Component{

    render(){
        return(
            <div>
                <div className="row">
                    <div className="col-lg-5">
                        <div className="jumbotron hea">
                            <h4 className="text-center">About</h4>
                            <p>
                                Corover is a website specifically developed to get live updates about the pandemic coronavirus(COVID-19) disease globally and help quickly diagnose anyone suspicious of the disease.  
                            </p>
                            <p>
                                Please stay at home and adhere to every precaution against the spread of the coronavirus in your country. God bless.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="jumbotron hea">
                            <p>Download the android app <a href="Corover.apk" download>here</a> </p>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <img className="rounded-circle" width="200" src="pic1.jpg" />
                        <p>Muritala Tobi</p>
                        <p>Humanitarian</p>
                        <p>Full stack developer</p>
                        <p>Data science enthusiast</p>
                    </div>
                </div>
                <div>
                    <p>
                        Contact <a href="mailto:muritala.mt@gmail.com">muritala.mt@gmail.com</a> for any issue pertaining to the website.
                    </p>
                </div>
            </div>
        )
    }
}

if (document.getElementById('about')) {
    ReactDOM.render(<About />, document.getElementById('about'));
}