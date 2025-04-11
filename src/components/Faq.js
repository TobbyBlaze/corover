import React from 'react';
import ReactDOM from 'react-dom';

function FAQ() {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Frequently Asked Questions</h2>
      
      <div style={styles.faqItem}>
        <h3 style={styles.question}>What is Corover?</h3>
        <p style={styles.answer}>
          Corover is an innovative app that provides real-time COVID‑19 updates and offers a self‑diagnosis tool to help users quickly assess their health.
        </p>
      </div>

      <div style={styles.faqItem}>
        <h3 style={styles.question}>How does the self‑diagnosis tool work?</h3>
        <p style={styles.answer}>
          The app prompts you to rate common symptoms—such as fever, cough, and shortness of breath—using a simple scale.
          It then offers a preliminary evaluation based on your responses. Please note that this assessment is for informational purposes only.
        </p>
      </div>

      <div style={styles.faqItem}>
        <h3 style={styles.question}>Does Corover collect or store my data?</h3>
        <p style={styles.answer}>
          No. The app does not collect or store any personal or health-related information. All data entered for self-assessment is processed locally on your device.
        </p>
      </div>

      <div style={styles.faqItem}>
        <h3 style={styles.question}>Is the health information accurate?</h3>
        <p style={styles.answer}>
          Corover aggregates and displays current COVID‑19 statistics and applies a symptom evaluation based on widely accepted health guidelines.
          However, it does not replace professional medical advice. Always consult a healthcare provider before making medical decisions.
        </p>
      </div>

      <div style={styles.faqItem}>
        <h3 style={styles.question}>How can I get technical support?</h3>
        <p style={styles.answer}>
          If you have any issues or need assistance using Corover, please visit our Support page or contact us directly at{' '}
          <a href="mailto:muritala.mt@outlook.com" style={styles.link}>
            muritala.mt@outlook.com
          </a>.
        </p>
      </div>

      <div style={styles.faqItem}>
        <h3 style={styles.question}>Where can I download the app?</h3>
        <p style={styles.answer}>
          The Android and iOS versions of Corover is available for download on our About page.
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
  title: {
    textAlign: 'center',
    fontSize: '28px',
    color: 'navy',
    marginBottom: '20px'
  },
  faqItem: {
    backgroundColor: '#fff',
    padding: '16px',
    borderRadius: '8px',
    marginBottom: '20px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    boxSizing: 'border-box'
  },
  question: {
    fontSize: '20px',
    color: 'navy',
    marginBottom: '10px'
  },
  answer: {
    fontSize: '16px',
    lineHeight: '1.5',
    color: '#333'
  },
  link: {
    color: 'navy',
    textDecoration: 'underline'
  }
};

if (document.getElementById('faq')) {
  ReactDOM.render(<FAQ />, document.getElementById('faq'));
}

export default FAQ;
