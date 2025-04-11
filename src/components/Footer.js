import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';

const styles = {
  footer: {
    backgroundColor: 'navy',
    color: '#fff',
    padding: '20px',
    textAlign: 'center',
    marginTop: 'auto'
  },
  linkContainer: {
    marginBottom: '10px',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '15px'
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '16px'
  },
  copy: {
    fontSize: '14px'
  }
};

export default class Footer extends Component {
  render() {
    return (
      <footer style={styles.footer}>
        <div style={styles.linkContainer}>
          <Link to="/" style={styles.link}>Home</Link>
          <Link to="/diagnosis" style={styles.link}>Quick Diagnosis</Link>
          <Link to="/about" style={styles.link}>About</Link>
          <Link to="/faq" style={styles.link}>FAQ</Link>
          <Link to="/privacy-policy" style={styles.link}>Privacy</Link>
          <Link to="/support" style={styles.link}>Support</Link>
        </div>
        <div style={styles.copy}>
          <p>&copy; {new Date().getFullYear()} Corover</p>
        </div>
      </footer>
    );
  }
}

if (document.getElementById('footer')) {
  ReactDOM.render(<Footer />, document.getElementById('footer'));
}
