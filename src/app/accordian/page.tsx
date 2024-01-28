"use client";
import React, { useState } from "react";
import Section from "./section"; // Corrected capitalization

const array = [
  {
    question: "How many bones does a cat have?",
    answer: "A cat has 230 bones - 6 more than a human",
  },
  {
    question: "How much do cats sleep?",
    answer: "The average cat sleeps 12-16 hours per day",
  },
  {
    question: "How long do cats live",
    answer:
      "Outdoor cats live 5 years on average. Indoor\ncats live 15 years on average.",
  },
];

const Accordion = () => {
  const [data, setData] = useState<any>(null); // Updated initial state
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "30vh",
        cursor: "pointer",
      }}
    >
      {array.map((element, index) => (
        <div
          style={{
            padding: 5,
          }}
          key={index}
          onClick={() => {
            setData(data === index ? null : index); // Toggle the selected section
          }}
        >
          <Section
            title={element.question}
            desc={element.answer}
            id={index}
            toggle={data}
          />
        </div>
      ))}
    </div>
  );
};

export default Accordion;
