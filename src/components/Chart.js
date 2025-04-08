import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Bar, Pie } from 'react-chartjs-2';
import ReactDOM from 'react-dom';

// Import and register Chart.js components
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

// Helper function: Aggregate data from an array of country records
const aggregateData = (records) => {
  return records.reduce(
    (acc, curr) => {
      const parseValue = (val) => {
        if (typeof val === 'string') {
          return parseInt(val.replace('+', '')) || 0;
        }
        return Number(val) || 0;
      };

      acc.new += parseValue(curr.cases.new);
      acc.active += parseValue(curr.cases.active);
      acc.critical += parseValue(curr.cases.critical);
      acc.recovered += parseValue(curr.cases.recovered);
      acc.total += parseValue(curr.cases.total);
      acc.new_deaths += parseValue(curr.deaths.new);
      acc.total_deaths += parseValue(curr.deaths.total);
      return acc;
    },
    { new: 0, active: 0, critical: 0, recovered: 0, total: 0, new_deaths: 0, total_deaths: 0 }
  );
};

// Helper function: Build chart data from aggregated data
const buildChartData = (label, aggregated) => ({
  labels: [
    'New Cases',
    'Active Cases',
    'Critical',
    'Recovered',
    'Total Cases',
    'New Deaths',
    'Total Deaths'
  ],
  datasets: [
    {
      label: label,
      data: [
        aggregated.new,
        aggregated.active,
        aggregated.critical,
        aggregated.recovered,
        aggregated.total,
        aggregated.new_deaths,
        aggregated.total_deaths
      ],
      backgroundColor: [
        'rgba(185,198,11,1.0)',
        'rgba(0,255,255,1.0)',
        'rgba(255,0,0,1.0)',
        'rgba(0,128,0,1.0)',
        'rgba(0,0,128,1.0)',
        'rgba(134,7,7,1.0)',
        'rgba(0,0,0,1.0)'
      ]
    }
  ]
});

function ChartComponent() {
  const [statistics, setStatistics] = useState([]);
  const [errorMsg, setErrorMsg] = useState('');
  const [chartData, setChartData] = useState({});
  const screenWidth = window.innerWidth;

  useEffect(() => {
    axios
      .get('https://covid-193.p.rapidapi.com/statistics', {
        headers: {
          'Content-Type': 'application/json',
          'x-rapidapi-host': 'covid-193.p.rapidapi.com',
          'x-rapidapi-key': '8cfca8918dmsh742a6ebe24cf1c7p1af6e3jsn3bfa6e435b76'
        }
      })
      .then((response) => {
        const stats = response.data.response || [];
        setStatistics(stats);

        // Remove aggregate rows if any exist
        const unwanted = ['All', 'Worldwide'];
        const validStats = stats.filter(
          (item) => !unwanted.includes(item.country)
        );

        // Aggregate world data (all valid statistics)
        const worldAgg = aggregateData(validStats);

        // Group by continent
        const groupByContinent = (continentName) =>
          validStats.filter((item) => item.continent === continentName);

        const africaAgg = aggregateData(groupByContinent('Africa'));
        const nAmericaAgg = aggregateData(groupByContinent('North-America'));
        const sAmericaAgg = aggregateData(groupByContinent('South-America'));
        const asiaAgg = aggregateData(groupByContinent('Asia'));
        const europeAgg = aggregateData(groupByContinent('Europe'));
        const oceaniaAgg = aggregateData(groupByContinent('Oceania'));

        setChartData({
          worldData: buildChartData('World', worldAgg),
          africaData: buildChartData('Africa', africaAgg),
          nAmericaData: buildChartData('North America', nAmericaAgg),
          sAmericaData: buildChartData('South America', sAmericaAgg),
          asiaData: buildChartData('Asia', asiaAgg),
          europeData: buildChartData('Europe', europeAgg),
          oceaniaData: buildChartData('Oceania', oceaniaAgg)
        });
      })
      .catch((error) => {
        console.error(error);
        setErrorMsg('Error retrieving data');
      });
  }, []);

  if (errorMsg) {
    return <div>{errorMsg}</div>;
  }

  if (!statistics.length || !chartData.worldData) {
    return <div style={{ padding: '20px' }}>Loading chart data...</div>;
  }

  return (
    <div style={styles.container}>
      <h2 style={styles.sectionHeader}>Global COVID-19 Data</h2>

      {/* World Chart */}
      <div style={styles.chartContainer}>
        <h3 style={styles.chartTitle}>World</h3>
        <Bar data={chartData.worldData} options={{ maintainAspectRatio: false }} />
      </div>

      {/* Continent Charts */}
      <div style={styles.row}>
        <div style={styles.chartContainer}>
          <h3 style={styles.chartTitle}>Africa</h3>
          <Bar data={chartData.africaData} options={{ maintainAspectRatio: false }} />
        </div>
        <div style={styles.chartContainer}>
          <h3 style={styles.chartTitle}>Europe</h3>
          <Bar data={chartData.europeData} options={{ maintainAspectRatio: false }} />
        </div>
      </div>
      <div style={styles.row}>
        <div style={styles.chartContainer}>
          <h3 style={styles.chartTitle}>Asia</h3>
          <Bar data={chartData.asiaData} options={{ maintainAspectRatio: false }} />
        </div>
        <div style={styles.chartContainer}>
          <h3 style={styles.chartTitle}>North America</h3>
          <Bar data={chartData.nAmericaData} options={{ maintainAspectRatio: false }} />
        </div>
      </div>
      <div style={styles.row}>
        <div style={styles.chartContainer}>
          <h3 style={styles.chartTitle}>South America</h3>
          <Bar data={chartData.sAmericaData} options={{ maintainAspectRatio: false }} />
        </div>
        <div style={styles.chartContainer}>
          <h3 style={styles.chartTitle}>Oceania</h3>
          <Bar data={chartData.oceaniaData} options={{ maintainAspectRatio: false }} />
        </div>
      </div>

      {/* Example: A Pie Chart for World Data */}
      <div style={styles.chartContainer}>
        <h3 style={styles.chartTitle}>World Distribution (Bar vs. Pie View)</h3>
        <Pie data={chartData.worldData} options={{ maintainAspectRatio: false }} />
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: '20px',
    maxWidth: '1200px',
    margin: 'auto',
    fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif'
  },
  sectionHeader: {
    textAlign: 'center',
    color: 'navy',
    fontSize: '28px',
    marginBottom: '20px'
  },
  chartContainer: {
    backgroundColor: '#fff',
    borderRadius: '8px',
    padding: '20px',
    marginBottom: '20px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
  },
  chartTitle: {
    textAlign: 'center',
    fontSize: '20px',
    marginBottom: '10px',
    color: '#333'
  },
  row: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px'
  }
};

if (document.getElementById('chart')) {
  ReactDOM.render(<ChartComponent />, document.getElementById('chart'));
}

export default ChartComponent;
