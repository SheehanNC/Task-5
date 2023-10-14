import React, { useState } from 'react';
import './Age.css'; // Create a CSS file for custom styling

function Age() {
  const [dob, setDob] = useState('');
  const [age, setAge] = useState('');

  const calculateAge = () => {
    const dobDate = new Date(dob);
    const today = new Date();
    const ageInMilliseconds = today - dobDate;
    const ageInYears = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25);
    setAge(Math.floor(ageInYears));
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <div className="age-calculator">
            <h2 className="text-primary">Age Calculator</h2>
            <div className="form-group">
              <label htmlFor="dob">Date of Birth:</label>
              <input
                type="date"
                className="form-control"
                id="dob"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
              />
            </div>
            <button
              className="btn btn-primary mt-3"
              onClick={calculateAge}
            >
              Calculate Age
            </button>
            {age && (
              <div className="result mt-4">
                <h4 className="text-primary">Result</h4>
                <p>Your age is: {age} years</p>
              </div>
            )}
          </div>
        </div>
        <div className="col-md-3"></div>
      </div>
    </div>
  );
}

export default Age;
