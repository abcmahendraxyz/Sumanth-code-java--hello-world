import React from "react";

const Confirm = ({ values, nextStep, prevStep }: any) => {
  const continueHandler = (e: any) => {
    e.preventDefault();
    // PROCESS FORM //
    nextStep();
  };

  const backHandler = (e: any) => {
    e.preventDefault();
    prevStep();
  };

  return (
    <div>
      <div>
        <h2>Confirm User Data</h2>
      </div>
      <ul>
        <li>
          <strong>First Name:</strong> {values.firstName}
        </li>
        <li>
          <strong>Last Name:</strong> {values.lastName}
        </li>
        <li>
          <strong>Email:</strong> {values.email}
        </li>
        <li>
          <strong>Occupation:</strong> {values.occupation}
        </li>
        <li>
          <strong>City:</strong> {values.city}
        </li>
        <li>
          <strong>Bio:</strong> {values.bio}
        </li>
      </ul>
      <div>
        <button onClick={backHandler}>Back</button>
        <button onClick={continueHandler}>Confirm & Continue</button>
      </div>
    </div>
  );
};

export default Confirm;
