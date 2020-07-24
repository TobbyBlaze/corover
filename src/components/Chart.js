import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
import ReactDOM from 'react-dom'
import {Pie, Bar} from 'react-chartjs-2';

export default class Chart extends Component{
//   displayName: 'BarExample',

    constructor(props){
        super(props);

        this.state = {
            
            worldData: {},
            africaData: {}, //221
            nAmericaData: {}, //216
            sAmericaData: {}, //219
            asiaData: {}, //218
            europeData: {}, //217
            oceaniaData: {}, //220
            statistics: [],
            statErrorMsg: '',
            Data: {}
            
        }
    }
    

    componentDidMount(){
        axios

            .get('https://covid-193.p.rapidapi.com/statistics', {
                headers: {

                    // 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content'),
                    'Content-Type': 'application/json',
                    'x-rapidapi-host': 'covid-193.p.rapidapi.com',
                    'x-rapidapi-key': '8cfca8918dmsh742a6ebe24cf1c7p1af6e3jsn3bfa6e435b76',
                    // 'Authorization': 'Bearer '+a,
                    // 'withCredentials': true
                }
            })
            .then(response => {
                // console.log(response.data.response)
                // this.setState({ statistics: response.data.response })

                const statistics = response.data.response;
                // console.log(statistics[0].cases)
                // let stat_date = [];
                // let stat_total_cases = [];
                // statistics.forEach(element => {
                //     stat_date.push(element.date);
                //     stat_total_cases.push(element.total_cases);
                // });

                this.setState({ 
                    worldData: {
                      labels: ['New cases', 'Active cases', 'Critical cases', 'Recovered cases', 'Total cases', 'New deaths', 'Total deaths'],
                      datasets:[
                         {
                            label:statistics[189].country,
                            data: [...Object.values(statistics[189].cases), ...Object.values(statistics[189].deaths)],
                            backgroundColor:[
                             'rgba(185,198,11,1.0)',
                             'rgba(0,255,255,1.0)',
                             'rgba(255,0,0,1.0)',
                             'rgba(0,128,0,1.0)',
                             'rgba(0,0,128,1.0)',
                             'rgba(134,7,7,1.0)',
                             'rgba(0,0,0,1.0)',
                          ]
                         }
                         
                      ]
                   },
                   africaData: {
                    labels: ['New cases', 'Active cases', 'Critical cases', 'Recovered cases', 'Total cases', 'New deaths', 'Total deaths'],
                    datasets:[
                       {
                          label:statistics[221].country,
                          // data: stat_total_cases ,
                          // data: [23, 43, 21, 65],
                          // data: statistics[0].cases,
                          // data: Object.values({...statistics[189].cases, ...statistics[189].deaths}),
                          // data: Object.values(statistics[189].cases).concat(Object.values(statistics[189].deaths.total)),
                          data: [...Object.values(statistics[221].cases), ...Object.values(statistics[221].deaths)],
                          backgroundColor:[
                            'rgba(185,198,11,1.0)',
                            'rgba(0,255,255,1.0)',
                            'rgba(255,0,0,1.0)',
                            'rgba(0,128,0,1.0)',
                            'rgba(0,0,128,1.0)',
                            'rgba(134,7,7,1.0)',
                            'rgba(0,0,0,1.0)',
                        ]
                       }
                       
                    ]
                 },
                 nAmericaData: {
                    labels: ['New cases', 'Active cases', 'Critical cases', 'Recovered cases', 'Total cases', 'New deaths', 'Total deaths'],
                    datasets:[
                       {
                          label:statistics[216].country,
                          // data: stat_total_cases ,
                          // data: [23, 43, 21, 65],
                          // data: statistics[0].cases,
                          // data: Object.values({...statistics[189].cases, ...statistics[189].deaths}),
                          // data: Object.values(statistics[189].cases).concat(Object.values(statistics[189].deaths.total)),
                          data: [...Object.values(statistics[216].cases), ...Object.values(statistics[216].deaths)],
                          backgroundColor:[
                            'rgba(185,198,11,1.0)',
                            'rgba(0,255,255,1.0)',
                            'rgba(255,0,0,1.0)',
                            'rgba(0,128,0,1.0)',
                            'rgba(0,0,128,1.0)',
                            'rgba(134,7,7,1.0)',
                            'rgba(0,0,0,1.0)',
                        ]
                       }
                       
                    ]
                 },
                 sAmericaData: {
                    labels: ['New cases', 'Active cases', 'Critical cases', 'Recovered cases', 'Total cases', 'New deaths', 'Total deaths'],
                    datasets:[
                       {
                          label:statistics[219].country,
                          // data: stat_total_cases ,
                          // data: [23, 43, 21, 65],
                          // data: statistics[0].cases,
                          // data: Object.values({...statistics[189].cases, ...statistics[189].deaths}),
                          // data: Object.values(statistics[189].cases).concat(Object.values(statistics[189].deaths.total)),
                          data: [...Object.values(statistics[219].cases), ...Object.values(statistics[219].deaths)],
                          backgroundColor:[
                            'rgba(185,198,11,1.0)',
                            'rgba(0,255,255,1.0)',
                            'rgba(255,0,0,1.0)',
                            'rgba(0,128,0,1.0)',
                            'rgba(0,0,128,1.0)',
                            'rgba(134,7,7,1.0)',
                            'rgba(0,0,0,1.0)',
                        ]
                       }
                       
                    ]
                 },
                 asiaData: {
                    labels: ['New cases', 'Active cases', 'Critical cases', 'Recovered cases', 'Total cases', 'New deaths', 'Total deaths'],
                    datasets:[
                       {
                          label:statistics[218].country,
                          // data: stat_total_cases ,
                          // data: [23, 43, 21, 65],
                          // data: statistics[0].cases,
                          // data: Object.values({...statistics[189].cases, ...statistics[189].deaths}),
                          // data: Object.values(statistics[189].cases).concat(Object.values(statistics[189].deaths.total)),
                          data: [...Object.values(statistics[218].cases), ...Object.values(statistics[218].deaths)],
                          backgroundColor:[
                            'rgba(185,198,11,1.0)',
                            'rgba(0,255,255,1.0)',
                            'rgba(255,0,0,1.0)',
                            'rgba(0,128,0,1.0)',
                            'rgba(0,0,128,1.0)',
                            'rgba(134,7,7,1.0)',
                            'rgba(0,0,0,1.0)',
                        ]
                       }
                       
                    ]
                 },
                 europeData: {
                    labels: ['New cases', 'Active cases', 'Critical cases', 'Recovered cases', 'Total cases', 'New deaths', 'Total deaths'],
                    datasets:[
                       {
                          label:statistics[217].country,
                          // data: stat_total_cases ,
                          // data: [23, 43, 21, 65],
                          // data: statistics[0].cases,
                          // data: Object.values({...statistics[189].cases, ...statistics[189].deaths}),
                          // data: Object.values(statistics[189].cases).concat(Object.values(statistics[189].deaths.total)),
                          data: [...Object.values(statistics[217].cases), ...Object.values(statistics[217].deaths)],
                          backgroundColor:[
                            'rgba(185,198,11,1.0)',
                            'rgba(0,255,255,1.0)',
                            'rgba(255,0,0,1.0)',
                            'rgba(0,128,0,1.0)',
                            'rgba(0,0,128,1.0)',
                            'rgba(134,7,7,1.0)',
                            'rgba(0,0,0,1.0)',
                        ]
                       }
                       
                    ]
                 },
                 oceaniaData: {
                    labels: ['New cases', 'Active cases', 'Critical cases', 'Recovered cases', 'Total cases', 'New deaths', 'Total deaths'],
                    datasets:[
                       {
                          label:statistics[220].country,
                          // data: stat_total_cases ,
                          // data: [23, 43, 21, 65],
                          // data: statistics[0].cases,
                          // data: Object.values({...statistics[189].cases, ...statistics[189].deaths}),
                          // data: Object.values(statistics[189].cases).concat(Object.values(statistics[189].deaths.total)),
                          data: [...Object.values(statistics[220].cases), ...Object.values(statistics[220].deaths)],
                          backgroundColor:[
                            'rgba(185,198,11,1.0)',
                            'rgba(0,255,255,1.0)',
                            'rgba(255,0,0,1.0)',
                            'rgba(0,128,0,1.0)',
                            'rgba(0,0,128,1.0)',
                            'rgba(134,7,7,1.0)',
                            'rgba(0,0,0,1.0)',
                        ]
                       }
                       
                    ]
                 }
                   });
            })
            .catch(error => {
                console.log(error)
                this.setState({statErrorMsg: 'Error retrieving data'})
            })

            

    }

  render() {
    const { statistics, statErrorMsg } = this.state
    return (
        <div>
            <div className="jumbotron">
                <div className="">
                    <h2 className="text-center">World</h2>
                    <Bar
                    data = {this.state.worldData}
                    // options = {{ maintainAspectRatio: false }}
                    />
                </div>
            </div>
            <div className="row">
                <div className="jumbotron col-lg-6">
                    <h2 className="text-center">Africa</h2>
                    <Bar
                    data = {this.state.africaData}
                    // options = {{ maintainAspectRatio: false }}
                    />
                </div>
                <div className="jumbotron col-lg-6">
                    <h2 className="text-center">Europe</h2>
                    <Bar
                    data = {this.state.europeData}
                    // options = {{ maintainAspectRatio: false }}
                    />
                </div>
            </div>
            <div className="row">
                <div className="jumbotron col-lg-6">
                    <h2 className="text-center">Asia</h2>
                    <Bar
                    data = {this.state.asiaData}
                    // options = {{ maintainAspectRatio: false }}
                    />
                </div>
                <div className="jumbotron col-lg-6">
                    <h2 className="text-center">Oceania</h2>
                    <Bar
                    data = {this.state.oceaniaData}
                    // options = {{ maintainAspectRatio: false }}
                    />
                </div>
            </div>
            <div className="row">
                <div className="jumbotron col-lg-6">
                    <h2 className="text-center">North America</h2>
                    <Bar
                    data = {this.state.nAmericaData}
                    // options = {{ maintainAspectRatio: false }}
                    />
                </div>
                <div className="jumbotron col-lg-6">
                    <h2 className="text-center">South America</h2>
                    <Bar
                    data = {this.state.sAmericaData}
                    // options = {{ maintainAspectRatio: false }}
                    />
                </div>
            </div>
        </div>
    );
  }
};