import React from "react";

const Success = ({ nextStep, prevStep }: any) => {
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
        <h1>Thank You For Your Submission</h1>
        <p>You will get an email with further instructions.</p>
      </div>
      <div>
        {/* <button onClick={backHandler}>Back</button> */}
        {/* You might want to add some logic for what should happen when the user clicks "Next" in the success screen */}
        {/* <button onClick={continueHandler}>Next</button> */}
      </div>
    </div>
  );
};

export default Success;
