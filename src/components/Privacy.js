import React from 'react';
import ReactDOM from 'react-dom';

function Privacy() {
  return (
    <div style={styles.container}>
      <div style={styles.row}>
        <div style={styles.cardLarge}>
          <h4 style={styles.header}>Privacy Policy for Corover</h4>
          <p style={styles.text}>
            <strong>Last Updated:</strong> 11th of April, 2025.
          </p>
          <p style={styles.text}>
            <strong>1. Introduction</strong><br />
            Corover is dedicated to providing live COVID-19 updates and a quick self-diagnosis tool.
            We value your privacy and are committed to ensuring that your information remains secure.
            This Privacy Policy explains how our app available on both mobile and web—handles your data.
          </p>
          <p style={styles.text}>
            <strong>2. Data We Collect</strong><br />
            Corover does not collect any personal data. You are not required to register or log in to use the app,
            and we do not ask for any personally identifiable information (PII).
          </p>
          <p style={styles.text}>
            <strong>3. Health and Symptom Data</strong><br />
            When using our self-assessment tool, you may enter symptoms such as fever, cough, or fatigue using our provided scales.
            This data is processed solely on your device in real time to generate a diagnosis and is not stored or logged.
          </p>
          <p style={styles.text}>
            <strong>4. Usage Data and Tracking</strong><br />
            Corover does not actively track your app usage or behavior. No extra analytics or tracking tools are implemented beyond those inherent in our open-source libraries.
            Any data processed by these libraries stays local to your device and is not transmitted.
          </p>
          <p style={styles.text}>
            <strong>5. Third-Party Services</strong><br />
            {/* Corover uses only the libraries and dependencies specified in our package.json file. */}
            No third-party services receive, access, or store your data.
          </p>
          <p style={styles.text}>
            <strong>6. Data Sharing and Storage</strong><br />
            We do not store or share any information from our users. All data entered in the self-assessment tool is used solely for real-time processing
            and is never retained or logged.
          </p>
          <p style={styles.text}>
            <strong>7. Security</strong><br />
            Since Corover does not collect or store personal or health data, the risk of data breaches is minimal.
            All processing occurs directly on your device, ensuring that your privacy is maintained.
          </p>
          <p style={styles.text}>
            <strong>8. Updates to This Privacy Policy</strong><br />
            We may update this Privacy Policy occasionally to reflect changes in our practices or improvements in the app.
            Any updates will be posted within the app and on our website. We recommend reviewing this policy periodically.
          </p>
          <p style={styles.text}>
            <strong>9. Contact Us</strong><br />
            If you have any questions or concerns about this Privacy Policy or how Corover handles your data,
            please contact us at <a href="mailto:muritala.mt@outlook.com">muritala.mt@outlook.com</a>.
          </p>
          <p style={styles.text}>
            By using Corover, you agree to the terms of this Privacy Policy. We appreciate your trust in Corover as your reliable source for COVID-19 updates and self-diagnosis.
          </p>
        </div>
        {/* <div style={styles.cardMedium}>
          
        </div> */}
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
  }
};

if (document.getElementById('privacy')) {
  ReactDOM.render(<Privacy />, document.getElementById('privacy'));
}

export default Privacy;
