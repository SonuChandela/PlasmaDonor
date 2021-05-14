import React from 'react';
import './Condition.css';

const Condition = () => {
  return (
    <div className="d-flex bg-bright">
      <div className="container mt-5 mb-5">
        <div className="row conditions">
          <div className="col-md-6 col-12">
            <h3>You CAN donate plasma if</h3>
            <ol className="mt-4 mb-4">
              <li>You were tested positive for COVID-19</li>
              <li>You have fully recovered and are free of symptoms for 14 days</li>
              <li>You are between 18-60 years old</li>
            </ol>
          </div>
          <div className="col-md-6 col-12">
            <h3>You cannot donate plasma if</h3>
            <ol className="mt-4 mb-4">
              <li>Your weight is less than 50 kg</li>
              <li>You have ever been pregnant</li>
              <li>You are diabetic on insulin</li>
              <li>Your Blood Pressure is more than 140 and diastolic less than 60 or more than 90</li>
              <li>You have uncontrolled diabetes or hypertension with change in medication in last 28 days</li>
              <li>You are a Cancer Survivor</li>
              <li>You have chronic kidney/heart/lung or liver disease.</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Condition;
