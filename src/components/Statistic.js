import React, { Component } from 'react'
import axios from 'axios'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'

// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import { fetchStatistics } from '../actions/statisticActions';

import moment from "moment"

// import { Provider } from 'react-redux';

// import store from '../store';

export default class Statistic extends Component{
    constructor(props){
        super(props);

        // fetchStatistics = this.props.fetchStatistics.bind(this);
        // this.submitHandler = this.submitHandler.bind(this);

        this.state = {
            
            statistics: [],
            statErrorMsg: ''
            
        }
    }

    componentDidMount(){
        // this.props.fetchStatistics();
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
                this.setState({ statistics: response.data.response })
            })
            .catch(error => {
                // console.log(error)
                this.setState({statErrorMsg: 'Error retrieving data'})
            })

    }

    // submitHandler = e => {
    //     axios

    //         .get('https://covid-19-data.p.rapidapi.com/country', {
    //             headers: {

    //                 // 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content'),
    //                 'Content-Type': 'application/json',
    //                 // 'x-rapidapi-host': 'covid-193.p.rapidapi.com',
    //                 // 'x-rapidapi-key': '8cfca8918dmsh742a6ebe24cf1c7p1af6e3jsn3bfa6e435b76',
    //                 "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
	// 	            "x-rapidapi-key": "8cfca8918dmsh742a6ebe24cf1c7p1af6e3jsn3bfa6e435b76",
    //                 // 'Authorization': 'Bearer '+a,
    //                 // 'withCredentials': true
    //             }
    //         })
    //         .then(response => {
    //             console.log(response)
    //             this.setState({ countries: response.data.response })
    //         })
    //         .catch(error => {
    //             console.log(error)
    //             this.setState({errorMsg: 'Error retrieving data'})
    //         })
    // }

    render(){
        const { statistics, statErrorMsg } = this.state
        // const { statistics, statErrorMsg } = this.props

        // const postItems = this.props.statistics.map(post => (
        //     <div key={post.id}>
        //       <h3>{post.country}</h3>
        //     </div>
        //   ));

        //Comparer Function  
        function GetSortOrder(prop) {  
            return function(a, b) {  
                if (a[prop] > b[prop]) {  
                    return 1;  
                } else if (a[prop] < b[prop]) {  
                    return -1;  
                }  
                return 0;  
            }  
        }

        statistics.sort(GetSortOrder("country")); //Pass the attribute to be sorted on  
        // document.write("Sorted Active cases : ");  
        // for (var item in statistics) {  
        //     // document.write("<br>" + statistics[item].country);  
        // }  
        
        return(
            // <Provider store={store}>
            <div className="container-fluid">

                {/* <form method="GET" onSubmit={this.submitHandler}>
                    <label htmlFor="">Name</label>
                    <input type="text" name="name" />
                    <input value="sub" type="submit" />
                </form>
                <br /> */}
                {/* {statistics.length ? */}
                {/* // countries.map(country=><div key={country.id}> {country.Title} </div>): */}
                {/* {statistics.map(statistic=> */}
                    {/* {postItems} */}
                    <div className="table100 ver3 m-b-110 over">

					<div className="table100-body js-pscroll">
						<table>
                            <thead>
								<tr className="row100 head fixed">
									<th className="cell100 column1" style={{flex:1}}>Countries</th>
									<th className="cell100 column2" style={{flex:1}}>New cases</th>
									<th className="cell100 column3" style={{flex:1}}>Active cases</th>
									<th className="cell100 column4" style={{flex:1}}>Critical cases</th>
									<th className="cell100 column5" style={{flex:1}}>Recovered cases</th>
                                    <th className="cell100 column6" style={{flex:1}}>Total cases</th>
                                    <th className="cell100 column7" style={{flex:1}}>Recent deaths</th>
                                    <th className="cell100 column8" style={{flex:1}}>Total deaths</th>
                                    <th className="cell100 column8" style={{flex:1}}>Total tests</th>
                                    <th className="cell100 column9" style={{flex:1}}>Date</th>
                                    <th className="cell100 column10" style={{flex:1}}>Time</th>
								</tr>
							</thead>
							<tbody>
                            {statistics.length ?
                            statistics.map(statistic=>
								<tr className="row100 body" key={statistic.country}>
                                    
									<td className="cell100 column1"> {statistic.country}</td>
									<td className="cell100 column2"> {statistic.cases.new} </td>
									<td className="cell100 column3"> {statistic.cases.active} </td>
									<td className="cell100 column4"> {statistic.cases.critical} </td>
									<td className="cell100 column5"> {statistic.cases.recovered} </td>
                                    <td className="cell100 column6"> {statistic.cases.total} </td>
									<td className="cell100 column7"> {statistic.deaths.new} </td>
									<td className="cell100 column8"> {statistic.deaths.total} </td>
                                    <td className="cell100 column8"> {statistic.tests.total} </td>
									<td className="cell100 column9"> {moment(statistic.day).format("MMM Do YYYY")} </td>
									<td className="cell100 column10"> {moment(statistic.time).fromNow()} </td>
                                    
                                </tr>
                                ):
                                null}
                                {statErrorMsg ? <div className="text-center">{statErrorMsg}</div> : null}

							</tbody>
						</table>
					</div>
                </div>
            </div>
            // {/* </Provider> */}
        )
    }
}

// Statistic.propTypes = {
//     fetchStatistics: PropTypes.func.isRequired,
//     statistics: PropTypes.array.isRequired,
//     // newPost: PropTypes.object
// };

// const mapStateToProps = state => ({
//     statistics: state.statistics.items,
//     // newPost: state.posts.item
// });
  
// export default connect(mapStateToProps, { fetchStatistics })(Statistic);

if (document.getElementById('statistics')) {
    ReactDOM.render(<Statistic />, document.getElementById('statistics'));
}
