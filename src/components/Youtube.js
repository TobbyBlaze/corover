import React, { Component } from 'react'
import ReactDOM from 'react-dom';

export default class Youtube extends Component{

    render(){
        return (
            <div
              className="video"
              style={{
                position: "relative",
                paddingBottom: "56.25%" /* 16:9 */,
                paddingTop: 25,
                height: 10
              }}
            >
              
               <iframe width="100%" height="315"
                src="https://www.youtube.com/embed/mOV1aBVYKGA">
                </iframe> 
                <br />
            </div>
        );
    }
}

if (document.getElementById('youtube')) {
    ReactDOM.render(<Youtube />, document.getElementById('youtube'));
}