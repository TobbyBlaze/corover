import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function Diagnosis() {
  // State variables for each symptom
  const [fever, setFever] = useState('');
  const [cough, setCough] = useState('');
  const [tiredness, setTiredness] = useState('');
  const [breath, setBreath] = useState('');
  const [muscle, setMuscle] = useState('');
  const [headaches, setHeadaches] = useState('');
  const [throat, setThroat] = useState('');
  const [nose, setNose] = useState('');
  const [sneezing, setSneezing] = useState('');

  // Determine diagnosis based on symptom severity
  let disease = '';
  if (
    fever === 'Severe' &&
    cough === 'Severe' &&
    (tiredness === 'Moderate' || tiredness === 'Severe') &&
    breath === 'Severe' &&
    (muscle === 'Moderate' || muscle === 'Severe') &&
    (headaches === 'Moderate' || headaches === 'Severe') &&
    (throat === 'Moderate' || throat === 'Severe') &&
    nose === 'Barely' &&
    sneezing === 'None'
  ) {
    disease =
      'You probably have Coronavirus. Please call your emergency line to get tested.';
  } else if (
    fever === 'Severe' &&
    cough === 'Severe' &&
    tiredness === 'Severe' &&
    (breath === 'None' || breath === 'Barely') &&
    muscle === 'Severe' &&
    headaches === 'Severe' &&
    (throat === 'Severe' || throat === 'Moderate') &&
    nose === 'Moderate' &&
    (sneezing === 'None' || sneezing === 'Barely' || sneezing === 'Mild')
  ) {
    disease = 'You probably have a Flu. Please consult your doctor.';
  } else if (
    (fever === 'Barely' || fever === 'None') &&
    (cough === 'Severe' || cough === 'Moderate') &&
    (tiredness === 'Moderate' || tiredness === 'Mild') &&
    (breath === 'None' || breath === 'Barely') &&
    (muscle === 'Severe' || muscle === 'Moderate' || muscle === 'Mild') &&
    (headaches === 'Barely' || headaches === 'None') &&
    (throat === 'Severe' || throat === 'Moderate') &&
    nose === 'Severe' &&
    sneezing === 'Severe'
  ) {
    disease = 'You probably have a common cold. Please consider seeing a doctor.';
  } else if (
    !fever &&
    !cough &&
    !tiredness &&
    !breath &&
    !muscle &&
    !headaches &&
    !throat &&
    !nose &&
    !sneezing
  ) {
    disease =
      'Please select the symptoms you are experiencing using the options provided.';
  } else {
    disease =
      'You are not showing significant symptoms of coronavirus or related illnesses.';
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // The diagnosis is calculated on render based on state values.
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.mainHeader}>CoRover Self-Diagnosis</h2>
      <div style={styles.mainContent}>
        {/* Form Section */}
        <div style={styles.formContainer}>
          <form onSubmit={handleSubmit} style={styles.form}>
            <h3 style={styles.formTitle}>Enter Your Symptoms</h3>

            <div style={styles.formGroup}>
              <label style={styles.label} htmlFor="fever">
                Fever
              </label>
              <select
                name="fever"
                id="fever"
                style={styles.select}
                value={fever}
                onChange={(e) => setFever(e.target.value)}
              >
                <option value="" disabled>
                  Select severity
                </option>
                <option value="None">Not at all -- 0</option>
                <option value="Barely">Barely -- 1</option>
                <option value="Mild">Mildly -- 2</option>
                <option value="Moderate">More often -- 3</option>
                <option value="Severe">Severely -- 4</option>
              </select>
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label} htmlFor="cough">
                Cough
              </label>
              <select
                name="cough"
                id="cough"
                style={styles.select}
                value={cough}
                onChange={(e) => setCough(e.target.value)}
              >
                <option value="" disabled>
                  Select severity
                </option>
                <option value="None">Not at all -- 0</option>
                <option value="Barely">Barely -- 1</option>
                <option value="Mild">Mildly -- 2</option>
                <option value="Moderate">More often -- 3</option>
                <option value="Severe">Severely -- 4</option>
              </select>
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label} htmlFor="tiredness">
                Tiredness
              </label>
              <select
                name="tiredness"
                id="tiredness"
                style={styles.select}
                value={tiredness}
                onChange={(e) => setTiredness(e.target.value)}
              >
                <option value="" disabled>
                  Select severity
                </option>
                <option value="None">Not at all -- 0</option>
                <option value="Barely">Barely -- 1</option>
                <option value="Mild">Mildly -- 2</option>
                <option value="Moderate">More often -- 3</option>
                <option value="Severe">Severely -- 4</option>
              </select>
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label} htmlFor="breath">
                Shortness of Breath
              </label>
              <select
                name="breath"
                id="breath"
                style={styles.select}
                value={breath}
                onChange={(e) => setBreath(e.target.value)}
              >
                <option value="" disabled>
                  Select severity
                </option>
                <option value="None">Not at all -- 0</option>
                <option value="Barely">Barely -- 1</option>
                <option value="Mild">Mildly -- 2</option>
                <option value="Moderate">More often -- 3</option>
                <option value="Severe">Severely -- 4</option>
              </select>
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label} htmlFor="muscle">
                Muscle Aches
              </label>
              <select
                name="muscle"
                id="muscle"
                style={styles.select}
                value={muscle}
                onChange={(e) => setMuscle(e.target.value)}
              >
                <option value="" disabled>
                  Select severity
                </option>
                <option value="None">Not at all -- 0</option>
                <option value="Barely">Barely -- 1</option>
                <option value="Mild">Mildly -- 2</option>
                <option value="Moderate">More often -- 3</option>
                <option value="Severe">Severely -- 4</option>
              </select>
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label} htmlFor="headaches">
                Headaches
              </label>
              <select
                name="headaches"
                id="headaches"
                style={styles.select}
                value={headaches}
                onChange={(e) => setHeadaches(e.target.value)}
              >
                <option value="" disabled>
                  Select severity
                </option>
                <option value="None">Not at all -- 0</option>
                <option value="Barely">Barely -- 1</option>
                <option value="Mild">Mildly -- 2</option>
                <option value="Moderate">More often -- 3</option>
                <option value="Severe">Severely -- 4</option>
              </select>
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label} htmlFor="throat">
                Sore Throat
              </label>
              <select
                name="throat"
                id="throat"
                style={styles.select}
                value={throat}
                onChange={(e) => setThroat(e.target.value)}
              >
                <option value="" disabled>
                  Select severity
                </option>
                <option value="None">Not at all -- 0</option>
                <option value="Barely">Barely -- 1</option>
                <option value="Mild">Mildly -- 2</option>
                <option value="Moderate">More often -- 3</option>
                <option value="Severe">Severely -- 4</option>
              </select>
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label} htmlFor="nose">
                Stuffy/Runny Nose
              </label>
              <select
                name="nose"
                id="nose"
                style={styles.select}
                value={nose}
                onChange={(e) => setNose(e.target.value)}
              >
                <option value="" disabled>
                  Select severity
                </option>
                <option value="None">Not at all -- 0</option>
                <option value="Barely">Barely -- 1</option>
                <option value="Mild">Mildly -- 2</option>
                <option value="Moderate">More often -- 3</option>
                <option value="Severe">Severely -- 4</option>
              </select>
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label} htmlFor="sneezing">
                Sneezing
              </label>
              <select
                name="sneezing"
                id="sneezing"
                style={styles.select}
                value={sneezing}
                onChange={(e) => setSneezing(e.target.value)}
              >
                <option value="" disabled>
                  Select severity
                </option>
                <option value="None">Not at all -- 0</option>
                <option value="Barely">Barely -- 1</option>
                <option value="Mild">Mildly -- 2</option>
                <option value="Moderate">More often -- 3</option>
                <option value="Severe">Severely -- 4</option>
              </select>
            </div>

            <button type="submit" style={styles.button}>Quick Diagnosis</button>
          </form>
        </div>

        {/* Results Section */}
        <div style={styles.resultsContainer}>
          <h3 style={styles.resultsHeader}>Results</h3>
          <p style={styles.resultText}>{disease}</p>
          <h4 style={styles.summaryHeader}>Your Answers</h4>
          <p style={styles.summaryText}>Fever: {fever}</p>
          <p style={styles.summaryText}>Cough: {cough}</p>
          <p style={styles.summaryText}>Tiredness: {tiredness}</p>
          <p style={styles.summaryText}>Shortness of Breath: {breath}</p>
          <p style={styles.summaryText}>Muscle Aches: {muscle}</p>
          <p style={styles.summaryText}>Headaches: {headaches}</p>
          <p style={styles.summaryText}>Sore Throat: {throat}</p>
          <p style={styles.summaryText}>Stuffy/Runny Nose: {nose}</p>
          <p style={styles.summaryText}>Sneezing: {sneezing}</p>
        </div>
      </div>

      {/* Disclaimer */}
      <div style={styles.disclaimer}>
        <h4 style={styles.disclaimerHeader}>Disclaimer</h4>
        <p style={styles.disclaimerText}>
          The results provided by this tool are based on a symptom analysis guided by recommended health practices. They do not constitute professional medical advice. Please seek medical attention if you have any concerns about your health.
        </p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '1200px',
    margin: 'auto',
    padding: '20px',
    backgroundColor: '#f3f6fa',
    fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif'
  },
  mainHeader: {
    textAlign: 'center',
    color: 'navy',
    fontSize: '28px',
    marginBottom: '20px'
  },
  mainContent: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px'
  },
  formContainer: {
    flex: '1 1 45%',
    backgroundColor: '#FFF',
    borderRadius: '8px',
    padding: '20px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px'
  },
  formTitle: {
    marginBottom: '10px',
    fontSize: '22px',
    color: 'navy'
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column'
  },
  label: {
    fontSize: '16px',
    marginBottom: '5px',
    color: '#333'
  },
  select: {
    padding: '8px',
    fontSize: '16px',
    borderRadius: '4px',
    border: '1px solid #ccc'
  },
  button: {
    backgroundColor: 'navy',
    color: '#FFF',
    padding: '10px',
    fontSize: '18px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer'
  },
  resultsContainer: {
    flex: '1 1 45%',
    backgroundColor: 'navy',
    padding: '20px',
    borderRadius: '8px',
    color: '#FFF',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
  },
  resultsHeader: {
    marginBottom: '10px',
    fontSize: '24px'
  },
  resultText: {
    fontSize: '18px',
    marginBottom: '15px'
  },
  summaryHeader: {
    textDecoration: 'underline',
    fontSize: '20px'
  },
  summaryText: {
    fontSize: '16px',
    margin: '4px 0'
  },
  disclaimer: {
    marginTop: '20px',
    backgroundColor: '#FFF',
    borderRadius: '8px',
    padding: '20px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
  },
  disclaimerHeader: {
    textAlign: 'center',
    color: 'red',
    fontSize: '20px',
    textDecoration: 'underline'
  },
  disclaimerText: {
    fontSize: '16px',
    color: '#333',
    lineHeight: '1.5'
  }
};

export default Diagnosis;

if (document.getElementById('diagnosis')) {
  ReactDOM.render(<Diagnosis />, document.getElementById('diagnosis'));
}
