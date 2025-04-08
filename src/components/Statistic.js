import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import moment from 'moment';

export default function Statistic() {
  const [statistics, setStatistics] = useState([]);
  const [statErrorMsg, setStatErrorMsg] = useState('');

  useEffect(() => {
    axios.get('https://covid-193.p.rapidapi.com/statistics', {
      headers: {
        'Content-Type': 'application/json',
        'x-rapidapi-host': 'covid-193.p.rapidapi.com',
        'x-rapidapi-key': '8cfca8918dmsh742a6ebe24cf1c7p1af6e3jsn3bfa6e435b76',
      }
    })
    .then(response => {
      const data = response.data.response || [];
      // Sort data alphabetically by country name
      data.sort((a, b) => (a.country > b.country ? 1 : -1));
      setStatistics(data);
    })
    .catch(error => {
      console.error(error);
      setStatErrorMsg('Error retrieving data');
    });
  }, []);

  return (
    <div style={styles.container}>
      {/* Header Section */}
      <header style={styles.header}>
        <img src="./corover1.png" alt="CoRover Logo" style={styles.logo} />
        <h1 style={styles.headerText}>Live COVID-19 Statistics</h1>
      </header>

      {statErrorMsg && <div style={styles.errorMsg}>{statErrorMsg}</div>}

      {/* Data Cards */}
      <div style={styles.content}>
        {statistics.length ? 
          statistics.map((statistic) => (
            <div key={statistic.country} style={styles.card}>
              <h2 style={styles.countryName}>{statistic.country}</h2>
              
              <div style={styles.statsRow}>
                <div style={styles.statItem}>
                  <span style={styles.label}>New Cases</span>
                  <span style={styles.value}>{statistic.cases.new || '0'}</span>
                </div>
                <div style={styles.statItem}>
                  <span style={styles.label}>Active Cases</span>
                  <span style={styles.value}>{statistic.cases.active || '0'}</span>
                </div>
                <div style={styles.statItem}>
                  <span style={styles.label}>Critical</span>
                  <span style={styles.value}>{statistic.cases.critical || '0'}</span>
                </div>
              </div>

              <div style={styles.statsRow}>
                <div style={styles.statItem}>
                  <span style={styles.label}>Recovered</span>
                  <span style={styles.value}>{statistic.cases.recovered || '0'}</span>
                </div>
                <div style={styles.statItem}>
                  <span style={styles.label}>Total Cases</span>
                  <span style={styles.value}>{statistic.cases.total || '0'}</span>
                </div>
                <div style={styles.statItem}>
                  <span style={styles.label}>New Deaths</span>
                  <span style={styles.value}>{statistic.deaths.new || '0'}</span>
                </div>
              </div>

              <div style={styles.statsRow}>
                <div style={styles.statItem}>
                  <span style={styles.label}>Total Deaths</span>
                  <span style={styles.value}>{statistic.deaths.total || '0'}</span>
                </div>
                <div style={styles.statItem}>
                  <span style={styles.label}>Total Tests</span>
                  <span style={styles.value}>{statistic.tests.total || '0'}</span>
                </div>
              </div>

              <div style={styles.statsRow}>
                <div style={styles.statItem}>
                  <span style={styles.label}>Date</span>
                  <span style={styles.value}>{moment(statistic.day).format("MMM Do YYYY")}</span>
                </div>
                <div style={styles.statItem}>
                  <span style={styles.label}>Time</span>
                  <span style={styles.value}>{moment(statistic.time).fromNow()}</span>
                </div>
              </div>
            </div>
          ))
          : <p style={styles.noData}>No statistics available</p>
        }
      </div>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
    backgroundColor: '#F5F7FA',
    padding: '20px',
    maxWidth: '1200px',
    margin: 'auto'
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'navy',
    padding: '10px 20px',
    borderRadius: '8px',
    marginBottom: '20px'
  },
  logo: {
    width: '50px',
    height: '50px',
    marginRight: '12px'
  },
  headerText: {
    color: '#FFF',
    fontSize: '24px',
    fontWeight: 'bold'
  },
  errorMsg: {
    color: 'red',
    textAlign: 'center',
    marginBottom: '10px'
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px'
  },
  card: {
    backgroundColor: '#FFF',
    borderRadius: '8px',
    padding: '15px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
  },
  countryName: {
    color: 'navy',
    marginBottom: '10px'
  },
  statsRow: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '8px'
  },
  statItem: {
    flex: '1',
    textAlign: 'center'
  },
  label: {
    fontSize: '14px',
    color: '#888',
    display: 'block',
    marginBottom: '4px'
  },
  value: {
    fontSize: '16px',
    fontWeight: '500',
    color: '#333'
  },
  noData: {
    textAlign: 'center',
    color: '#333'
  }
};

if (document.getElementById('statistics')) {
  ReactDOM.render(<Statistic />, document.getElementById('statistics'));
}
