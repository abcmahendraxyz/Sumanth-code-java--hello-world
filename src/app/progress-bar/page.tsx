"use client";

import React, { useState, useEffect } from "react";

const ProgressBar = () => {
  const [value, setValue] = useState<any>(0);
  //   const [value, setValue] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setValue((val: any) => Math.min(val + 0.3, 100));
    }, 20);

    return () => clearInterval(interval);
  }, []);

  const percent = value.toFixed();
  const isSuccess = value >= 100;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "7px",
      }}
    >
      <div
        className="progress"
        style={{
          position: "relative" /* with scale */,
          //   textAlign: "center",
          height: "20px",
          width: "500px",
          backgroundColor: "rgb(233, 236, 239)",
          border: "1px solid #c5c5c5",
          borderRadius: "15px",
          overflow: "hidden",
        }}
      >
        <span
          style={{
            color: percent > 49 ? "white" : "black",
            position: "absolute",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 99,
          }}
        >
          {percent}%
        </span>
        <div
          style={{
            transform: `scaleX(${percent / 100})`,
            transformOrigin: "left",
            backgroundColor: "#00c251",
            color: "#fff",
            height: "100%",
            textAlign: "center",
          }}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={percent}
          role="progressbar"
        ></div>
      </div>
      <span
        style={{
          marginTop: "20px",
          color: isSuccess ? "green" : "red",
        }}
      >
        {isSuccess ? "Complete!" : "Loading..."}
      </span>
    </div>
  );
};

export default ProgressBar;
