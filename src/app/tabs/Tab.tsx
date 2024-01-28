// Tab.tsx
import React from "react";

const Tab = ({ children }: any) => {
  return <div>{children}</div>;
};

Tab.Heads = ({ children }: any) => {
  return (
    <div
      className="heads"
      style={{
        borderRadius: "5px",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
      }}
    >
      {children}
    </div>
  );
};

Tab.Item = ({ label, index, onChange, value }: any) => {
  return (
    <div
      onClick={() => onChange(index)}
      style={{
        backgroundColor: index === value ? "green" : "lightblue",
        color: "white",
        padding: "10px",
        width: "100%",
        cursor: "pointer",
        margin: 5,
      }}
    >
      {label}
    </div>
  );
};

Tab.ContentWrapper = ({ children, index, value }: any) => {
  return (
    <div
      style={{
        backgroundColor: value === index ? "grey" : "",
      }}
    >
      {value === index && children}
    </div>
  );
};

export default Tab;
