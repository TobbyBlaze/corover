import React from 'react';
import ReactDOM from 'react-dom';

function Support() {
  return (
    <div style={styles.container}>
      <div style={styles.row}>
        {/* Technical Support / FAQ Card */}
        <div style={styles.cardLarge}>
          <h4 style={styles.header}>Technical Support</h4>
          <p style={styles.text}>
            Welcome to Corover Support. If you encounter any issues or have questions about using the app,
            please review our FAQ below or contact our support team for assistance. Our resources cover troubleshooting,
            app performance, and navigation tips to ensure you get the most out of Corover.
          </p>
          <p style={styles.text}>
            For detailed help, please visit our FAQ section (accessible from the footer ) or contact us directly.
          </p>
        </div>
        {/* Download Card */}
        {/* <div style={styles.cardMedium}>
          <h4 style={styles.header}>Download the Android App</h4>
          <p style={styles.text}>
            For the best experience on mobile devices, please download the latest version of the Corover Android app by clicking{' '}
            <a href="Corover_v1.apk" style={styles.link} download>
              here
            </a>.
          </p>
        </div> */}
        {/* Contact Support Card */}
        <div style={styles.cardSmall}>
          <h4 style={styles.header}>Contact Support</h4>
          <p style={styles.text}>
            Need help? Please email our support team with a description of your issue or any feedback.
          </p>
          <p style={styles.text}>
            <strong>Email:</strong> <a href="mailto:muritala.mt@outlook.com" style={styles.link}>muritala.mt@outlook.com</a>
          </p>
        </div>
      </div>
      <div style={styles.contact}>
        <p style={styles.contactText}>
          Additionally, you can consult our FAQ section within the app for answers to common questions.
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
    padding: '20px',
    boxSizing: 'border-box'
  },
  cardMedium: {
    flex: '1 1 30%',
    backgroundColor: '#fff',
    color: '#333',
    borderRadius: '8px',
    padding: '20px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    boxSizing: 'border-box'
  },
  cardSmall: {
    flex: '1 1 25%',
    backgroundColor: '#fff',
    color: '#333',
    borderRadius: '8px',
    padding: '20px',
    textAlign: 'center',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    boxSizing: 'border-box'
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
  contact: {
    marginTop: '20px',
    textAlign: 'center'
  },
  contactText: {
    fontSize: '16px'
  }
};

if (document.getElementById('support')) {
  ReactDOM.render(<Support />, document.getElementById('support'));
}

export default Support;
