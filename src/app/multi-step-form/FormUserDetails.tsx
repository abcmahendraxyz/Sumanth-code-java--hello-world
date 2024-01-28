import React from "react";

const FormUserDetails = ({ values, handleChange, nextStep }: any) => {
  const continueHandler = (e: any) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <div>
      <div>
        <h2>Enter User Details</h2>
      </div>
      <div>
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          placeholder="Enter Your First Name"
          value={values.firstName}
          onChange={(e) => handleChange("firstName")(e)}
        />
      </div>
      <div>
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          placeholder="Enter Your Last Name"
          value={values.lastName}
          onChange={(e) => handleChange("lastName")(e)}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          id="email"
          placeholder="Enter Your Email"
          value={values.email}
          onChange={(e) => handleChange("email")(e)}
        />
      </div>
      <div>
        <button onClick={continueHandler}>Continue</button>
      </div>
    </div>
  );
};

export default FormUserDetails;
