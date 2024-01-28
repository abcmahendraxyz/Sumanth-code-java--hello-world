import React from "react";

const Section = ({ title, desc, id, toggle }: any) => {
  return (
    <div style={{ width: "50vw" }}>
      <div style={{ backgroundColor: "black", color: "white", padding: 3 }}>
        {id === toggle ? (toggle === null ? "\u2193" : "\u2191") : "\u2193"}
        {title}
      </div>
      <div style={{ display: id === toggle ? "block" : "none" }}>{desc}</div>
    </div>
  );
};

export default Section;
