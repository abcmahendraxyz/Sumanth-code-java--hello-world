import React from "react";

const FormPersonalDetails = ({
  values,
  handleChange,
  nextStep,
  prevStep,
}: any) => {
  const continueHandler = (e: any) => {
    e.preventDefault();
    nextStep();
  };

  const backHandler = (e: any) => {
    e.preventDefault();
    prevStep();
  };

  return (
    <div>
      <div>
        <h2>Enter Personal Details</h2>
      </div>
      <div>
        <label htmlFor="occupation">Occupation:</label>
        <input
          type="text"
          id="occupation"
          placeholder="Enter Your Occupation"
          value={values.occupation}
          onChange={(e) => handleChange("occupation")(e)}
        />
      </div>
      <div>
        <label htmlFor="city">City:</label>
        <input
          type="text"
          id="city"
          placeholder="Enter Your City"
          value={values.city}
          onChange={(e) => handleChange("city")(e)}
        />
      </div>
      <div>
        <label htmlFor="bio">Bio:</label>
        <input
          type="text"
          id="bio"
          placeholder="Enter Your Bio"
          value={values.bio}
          onChange={(e) => handleChange("bio")(e)}
        />
      </div>
      <div>
        <button onClick={backHandler}>Back</button>
        <button onClick={continueHandler}>Continue</button>
      </div>
    </div>
  );
};

export default FormPersonalDetails;
