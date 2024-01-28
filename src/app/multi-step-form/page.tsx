"use client";

import React, { useState } from "react";
import FormUserDetails from "./FormUserDetails";
import FormPersonalDetails from "./FormPersonalDetails";
import Confirm from "./Confirm";
import Success from "./Success";

const UserForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    occupation: "",
    city: "",
    bio: "",
  });

  // Proceed to next step
  const nextStep = () => {
    setStep(step + 1);
  };

  // Go back to prev step
  const prevStep = () => {
    setStep(step - 1);
  };

  // Handle fields change
  const handleChange = (input: any) => (e: any) => {
    setFormData({ ...formData, [input]: e.target.value });
  };

  const WrapperContainer = ({ children }: any) => {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          width: "70vw",
          height: "40vh",
          gap: 5,
          border: "2px solid gray",
          boxShadow: "2px 3px 4px",
        }}
      >
        <h4>Multi-Form</h4>
        {children}
      </div>
    );
  };

  const values = { ...formData };

  switch (step) {
    case 1:
      return (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            marginTop: "50px",
          }}
        >
          <WrapperContainer>
            <FormUserDetails
              nextStep={nextStep}
              handleChange={handleChange}
              values={values}
            />
          </WrapperContainer>
        </div>
      );
    case 2:
      return (
        <WrapperContainer>
          <FormPersonalDetails
            nextStep={nextStep}
            prevStep={prevStep}
            handleChange={handleChange}
            values={values}
          />
        </WrapperContainer>
      );
    case 3:
      return (
        <WrapperContainer>
          <Confirm nextStep={nextStep} prevStep={prevStep} values={values} />
        </WrapperContainer>
      );
    case 4:
      return <Success />;
    default:
      return <div>This is a multi-step form built with React.</div>;
  }
};

export default UserForm;
