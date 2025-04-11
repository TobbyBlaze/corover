import React from 'react';
import ReactDOM from 'react-dom';

function About() {
  return (
    <div style={styles.container}>
      <div style={styles.row}>
        <div style={styles.cardLarge}>
          <h4 style={styles.header}>About</h4>
          <p style={styles.text}>
            Corover is a website specifically developed to provide live updates on the global COVID-19 pandemic and offer rapid self‐diagnosis for individuals exhibiting symptoms. 
          </p>
          <p style={styles.text}>
            The platform serves as a reliable resource during these challenging times, urging everyone to stay at home and follow the recommended precautions for preventing the spread of the virus.
          </p>
        </div>
        <div style={styles.cardMedium}>
          <h4 style={styles.header}>Download the Android App</h4>
          {/* <p style={styles.text}>
            For a seamless experience on the go, download the Corover Android app by clicking{' '}
            <a href="Corover_v1.apk" style={styles.link} download>
              here
            </a>.
          </p> */}
          <p style={styles.text}>
            For a seamless experience on the go, download the Corover mobile app on{' '}
            <a href="https://play.google.com/store/apps/details?id=co.uk.tobistech.corover" style={styles.link}>
              Google Play Store
            </a> or {' '}
            <a href="#" style={styles.link}>
              Apple App Store
            </a>.
          </p>
        </div>
        <div style={styles.cardSmall}>
          <img src="pic1.jpg" alt="Muritala Tobi" style={styles.profileImage} />
          <h4 style={styles.profileName}>Tobi Muritala</h4>
          <p style={styles.profileRole}>Software engineer</p>
          <p style={styles.profileRole}>Data scientist</p>
          <p style={styles.profileRole}>Email: muritala.mt@outlook.com</p>
        </div>
      </div>
      <div style={styles.contact}>
        <p style={styles.contactText}>
          Contact <a href="mailto:muritala.mt@outlook.com" style={styles.link}>muritala.mt@outlook.com</a> for any issues pertaining to the website.
        </p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '1200px',
    margin: '20px auto',
    padding: '20px',
    backgroundColor: '#f3f6fa',
    fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
    color: '#333'
  },
  row: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
    justifyContent: 'center'
  },
  cardLarge: {
    flex: '1 1 40%',
    backgroundColor: 'navy',
    color: '#fff',
    borderRadius: '8px',
    padding: '20px'
  },
  cardMedium: {
    flex: '1 1 30%',
    backgroundColor: '#fff',
    color: '#333',
    borderRadius: '8px',
    padding: '20px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
  },
  cardSmall: {
    flex: '1 1 25%',
    backgroundColor: '#fff',
    color: '#333',
    borderRadius: '8px',
    padding: '20px',
    textAlign: 'center',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
  },
  header: {
    textAlign: 'center',
    fontSize: '24px',
    marginBottom: '10px'
  },
  text: {
    fontSize: '16px',
    lineHeight: '1.5',
    marginBottom: '10px'
  },
  link: {
    color: 'navy',
    textDecoration: 'underline'
  },
  profileImage: {
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    margin: '0 auto 10px',
    display: 'block'
  },
  profileName: {
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '5px'
  },
  profileRole: {
    fontSize: '16px',
    margin: '3px 0'
  },
  contact: {
    marginTop: '20px',
    textAlign: 'center'
  },
  contactText: {
    fontSize: '16px'
  }
};

if (document.getElementById('about')) {
  ReactDOM.render(<About />, document.getElementById('about'));
}

export default About;
