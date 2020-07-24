import React, { Component } from 'react'
import ReactDOM from 'react-dom';

// import moment from "moment";

export default class Diagnosis extends Component{

    constructor(props){
        super(props);

        this.state = {
            // diagNosis: {
            //     title : '',
            //     body : '',
            //     file : '',
            // }
            diagnosis: [],
            
        }
    }

    changeHandler = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    submitHandler = e => {
        e.preventDefault();
        var symptoms = this.state;
        // console.log(symptoms);
    }

    render(){
        const { fever, cough, tiredness, breath, muscle, headaches, throat, nose, sneezing } = this.state

        var disease = null;
        if((fever == "Severe")&&(cough == "Severe")&&((tiredness == "Moderate")||(tiredness == "Severe"))&&(breath == "Severe")&&((muscle == "Moderate")||(muscle == "Severe"))&&((headaches == "Moderate")||(headaches == "Severe"))&&((throat == "Moderate")||(throat == "Severe"))&&(nose == "Barely")&&(sneezing == "None")){
            disease = "You probably have Coronavirus, you may want to call any of the emergency lines in your country in order to get tested.";
        }else if((fever == "Severe")&&(cough == "Severe")&&(tiredness == "Severe")&&((breath == "None")||(breath == "Barely"))&&(muscle == "Severe")&&(headaches == "Severe")&&((throat == "Severe")||(throat == "Moderate"))&&(nose == "Moderate")&&((sneezing == "None")||(sneezing == "Barely")||(sneezing == "Mild"))){
            disease = "You probably have a Flu. You may want to see your doctor.";
        }else if(((fever == "Barely")||(fever == "None"))&&((cough == "Severe")||(cough == "Moderate"))&&((tiredness == "Moderate")||(tiredness == "Mild"))&&((breath == "None")||(breath == "Barely"))&&((muscle == "Severe")||(muscle == "Moderate")||(muscle == "Mild"))&&((headaches == "Barely")||(headaches == "None"))&&((throat == "Severe")||(throat == "Moderate"))&&(nose == "Severe")&&(sneezing == "Severe")){
            disease = "You probably have a common cold. You may want to see your doctor.";
        }else if((fever == null)&&(cough == null)&&(tiredness == null)&&(breath == null)&&(muscle == null)&&(headaches == null)&&(throat == null)&&(nose == null)&&(sneezing == null)){
            disease = "Please select the symptoms you are showing in the appropriate scale.";
        }else{
            disease = "You are not showing any symptom for the coronavirus and it's related diseases.";
        }

        return(
            <div>
                <a name="top"></a>
                <br />
                <br />
                <div className="row">
                    <div className="col-lg-6">
                        <div className="jumbotron hea">
                        <form onSubmit={this.submitHandler} className="" >
                        <h4>Results</h4>
                            <div className="jumbotron" style={{backgroundColor: "red"}}>
                                <h4> {disease} </h4>
                            </div>
                            <br />
                            <h4>Please select the symptoms you are showing in the appropriate scale.</h4>
                            
                            <br />
                            <div className="form-group">
                                <label className="text-left h4" htmlFor="fever">Fever</label>
                                <select name="fever" id="fever" className="form-control h4 selectpicker mdb-select md-form" value={fever} onChange={this.changeHandler} >
                                    <option value="" disabled selected >Do you have fever?</option>
                                    <option value="None">Not at all -- 0</option>
                                    <option value="Barely">Barely -- 1</option>
                                    <option value="Mild">Mildly -- 2</option>
                                    <option value="Moderate">More often -- 3</option>
                                    <option value="Severe">Severely -- 4</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label className="text-left h4" htmlFor="cough">Cough</label>
                                <select name="cough" id="cough" className="form-control h4 selectpicker mdb-select md-form" value={cough} onChange={this.changeHandler} >
                                    <option value="" disabled selected >Have you been coughing?</option>
                                    <option value="None">Not at all -- 0</option>
                                    <option value="Barely">Barely -- 1</option>
                                    <option value="Mild">Mildly -- 2</option>
                                    <option value="Moderate">More often -- 3</option>
                                    <option value="Severe">Severely -- 4</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label className="text-left h4" htmlFor="tiredness">Tiredness</label>
                                <select name="tiredness" id="tiredness" className="form-control h4 selectpicker mdb-select md-form" value={tiredness} onChange={this.changeHandler} >
                                    <option value="" disabled selected >Have you been feeling tired?</option>
                                    <option value="None">Not at all -- 0</option>
                                    <option value="Barely">Barely -- 1</option>
                                    <option value="Mild">Mildly -- 2</option>
                                    <option value="Moderate">More often -- 3</option>
                                    <option value="Severe">Severely -- 4</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label className="text-left h4" htmlFor="breath">Shortness of breath</label>
                                <select name="breath" id="breath" className="form-control h4 selectpicker mdb-select md-form" value={breath} onChange={this.changeHandler} >
                                    <option value="" disabled selected >Do you have difficulty breathing?</option>
                                    <option value="None">Not at all -- 0</option>
                                    <option value="Barely">Barely -- 1</option>
                                    <option value="Mild">Mildly -- 2</option>
                                    <option value="Moderate">More often -- 3</option>
                                    <option value="Severe">Severely -- 4</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label className="text-left h4" htmlFor="muscle">Muscle Aches</label>
                                <select name="muscle" id="muscle" className="form-control h4 selectpicker mdb-select md-form" value={muscle} onChange={this.changeHandler} >
                                    <option value="" disabled selected >Does your muscle ache?</option>
                                    <option value="None">Not at all -- 0</option>
                                    <option value="Barely">Barely -- 1</option>
                                    <option value="Mild">Mildly -- 2</option>
                                    <option value="Moderate">More often -- 3</option>
                                    <option value="Severe">Severely -- 4</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label className="text-left h4" htmlFor="headaches">HeadAches</label>
                                <select name="headaches" id="headaches" className="form-control h4 selectpicker mdb-select md-form" value={headaches} onChange={this.changeHandler} >
                                    <option value="" disabled selected >Do you have headache?</option>
                                    <option value="None">Not at all -- 0</option>
                                    <option value="Barely">Barely -- 1</option>
                                    <option value="Mild">Mildly -- 2</option>
                                    <option value="Moderate">More often -- 3</option>
                                    <option value="Severe">Severely -- 4</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label className="text-left h4" htmlFor="throat">Sore throat</label>
                                <select name="throat" id="throat" className="form-control h4 selectpicker mdb-select md-form" value={throat} onChange={this.changeHandler} >
                                    <option value="" disabled selected >Do you have a sore throat?</option>
                                    <option value="None">Not at all -- 0</option>
                                    <option value="Barely">Barely -- 1</option>
                                    <option value="Mild">Mildly -- 2</option>
                                    <option value="Moderate">More often -- 3</option>
                                    <option value="Severe">Severely -- 4</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label className="text-left h4" htmlFor="nose">Stuffy or Runny Nose</label>
                                <select name="nose" id="nose" className="form-control h4 selectpicker mdb-select md-form" value={nose} onChange={this.changeHandler} >
                                    <option value="" disabled selected >Do you have a stuffy or runny Nose?</option>
                                    <option value="None">Not at all -- 0</option>
                                    <option value="Barely">Barely -- 1</option>
                                    <option value="Mild">Mildly -- 2</option>
                                    <option value="Moderate">More often -- 3</option>
                                    <option value="Severe">Severely -- 4</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label className="text-left h4" htmlFor="sneezing">Sneezing</label>
                                <select name="sneezing" id="sneezing" className="form-control h4 selectpicker mdb-select md-form" value={sneezing} onChange={this.changeHandler} >
                                    <option value="" disabled selected >Have you been sneezing?</option>
                                    <option value="None">Not at all -- 0</option>
                                    <option value="Barely">Barely -- 1</option>
                                    <option value="Mild">Mildly -- 2</option>
                                    <option value="Moderate">More often -- 3</option>
                                    <option value="Severe">Severely -- 4</option>
                                </select>
                            </div>
                            <a href="#top" className="btn btn-primary" type="submit">Quick diagnosis</a>
                        </form>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="jumbotron hea">
                            <h4>Results</h4>
                            <br />
                            <h4>Fever: {fever} </h4>
                            <br />
                            <br />
                            <h4>Cough: {cough} </h4>
                            <br />
                            <br />
                            <h4>Tiredness: {tiredness} </h4>
                            <br />
                            <br />
                            <h4>Shortness of breath: {breath} </h4>
                            <br />
                            <br />
                            <h4>Muscle Aches: {muscle} </h4>
                            <br />
                            <br />
                            <h4>HeadAches: {headaches} </h4>
                            <br />
                            <br />
                            <h4>Sore Throat: {throat} </h4>
                            <br />
                            <br />
                            <h4>Stuffy or Runny nose: {nose} </h4>
                            <br />
                            <br />
                            <h4>Sneezing: {sneezing} </h4>
                            <br />
                            <br />
                            
                        </div>
                    </div>
                </div>
                <div className="jumbotron hea">
                    <h4>Disclaimer</h4>
                    <p>
                        The results based on the symptoms provided in this website is based on WHO(World Health Organisation)'s suggested likely disease based on symptoms. The results gotten from this website are not conclusive as no standard medical testing kits were used, seek medical attentions first. 
                    </p>
                </div>
            </div>
        )
    }
}

if (document.getElementById('diagnosis')) {
    ReactDOM.render(<Diagnosis />, document.getElementById('diagnosis'));
}