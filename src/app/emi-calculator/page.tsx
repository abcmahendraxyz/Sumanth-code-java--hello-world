"use client";
import React, { useState, useEffect } from "react";

const EmiCalculator = () => {
  const [cost, setCost] = useState<any>(0);
  const [interest, setInterest] = useState<any>(10);
  const [fee, setFee] = useState<any>(1);
  const [downPayment, setDownPayment] = useState<any>(0);
  const [tenure, setTenure] = useState<any>(12);
  const [emi, setEmi] = useState<any>(0);

  const tenureData = [12, 24, 36, 48, 60];

  const calculateEMI = (downpayment: any): any => {
    // EMI amount = [P x R x (1+R)^N]/[(1+R)^N-1]
    if (!cost) return;
    const loanAmt = cost - downpayment;
    const rateOfInterest = interest / 100;
    const numOfYears = tenure / 12;
    const EMI =
      (loanAmt * rateOfInterest * (1 + rateOfInterest) ** numOfYears) /
      ((1 + rateOfInterest) ** numOfYears - 1);
    return Number(EMI / 12).toFixed(0);
  };

  const calculateDP = (emi: any) => {
    if (!cost) return;
    const downPaymentPercent: any = 100 - (emi / calculateEMI(0)) * 100;
    return Number((downPaymentPercent / 100) * cost).toFixed(0);
  };

  useEffect(() => {
    if (!(cost > 0)) {
      setDownPayment(0);
      setEmi(0);
    }
    const emi = calculateEMI(downPayment);
    setEmi(emi);
  }, [tenure, cost]);

  const updateEMI = (e: any) => {
    if (!cost) return;
    const dp = Number(e.target.value);
    setDownPayment(dp.toFixed(0));
    const emi = calculateEMI(dp);
    setEmi(emi);
  };

  const updateDownPayment = (e: any) => {
    if (!cost) return;
    const emi = Number(e.target.value);
    setEmi(emi.toFixed(0));
    const dp = calculateDP(emi);
    setDownPayment(dp);
  };

  const totalDownPayment = () => {
    return (Number(downPayment) + (cost - downPayment) * (fee / 100)).toFixed(
      0
    );
  };

  const totalEMI = () => {
    return (emi * tenure).toFixed(0);
  };

  //   const totalEMI = () => {
  //     return numberWithCommas((emi * tenure).toFixed(0));
  //   };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: 10,
        boxShadow: "2px 2px 2px 3px",
        height: "60vh",
        width: "50vw",
        marginLeft: "25vw",
      }}
    >
      <span className="title" style={{ fontSize: 30, marginTop: 10 }}>
        EMI Calculator
      </span>
      <div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <span
            className="title"
            style={{
              fontWeight: 700,
            }}
          >
            {"Total Cost of Asset"}
          </span>
          <input
            style={{
              color: "grey",
              border: "2px solid grey",
              borderRadius: "20px",
              margin: "1px",
              paddingLeft: "3px",
            }}
            type="number"
            value={cost}
            onChange={(e: any) => setCost(e.target.value)}
            placeholder={"Total Cost of Asset"}
          />
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <span
            className="title"
            style={{
              fontWeight: 700,
            }}
          >
            {"Interest Rate (in %)"}
          </span>
          <input
            style={{
              color: "grey",
              border: "2px solid grey",
              borderRadius: "20px",
              margin: "1px",
              paddingLeft: "3px",
            }}
            type="number"
            value={interest}
            onChange={(e: any) => setInterest(e.target.value)}
            placeholder={"Interest Rate (in %)"}
          />
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <span
            className="title"
            style={{
              fontWeight: 700,
            }}
          >
            {"Processing Fee (in %)"}
          </span>
          <input
            style={{
              color: "grey",
              border: "2px solid grey",
              borderRadius: "20px",
              margin: "1px",
              paddingLeft: "3px",
            }}
            type="number"
            value={fee}
            onChange={(e: any) => setFee(e.target.value)}
            placeholder={"Processing Fee (in %)"}
          />
        </div>

        <div>
          <div>
            <span
              style={{
                fontWeight: 700,
              }}
            >
              {"Down Payment"}
            </span>

            {downPayment > 0 && (
              <span
                className="title"
                style={{
                  textDecoration: "underline",
                  fontSize: "10px",
                  paddingLeft: "5px",
                }}
              >
                {`Total Down Payment - ${totalDownPayment()}`}
              </span>
            )}
          </div>

          <div>
            <input
              style={{
                width: "100%",
              }}
              type="range"
              min={0}
              max={cost}
              onChange={updateEMI}
              value={downPayment}
            />
            <div
              className="lables"
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <label>{0}</label>
              <b>{downPayment}</b>
              <label>{cost}</label>
            </div>
          </div>
        </div>

        <div>
          <div>
            <span
              style={{
                fontWeight: 700,
              }}
            >
              {"Loan per Month"}
            </span>

            {emi > 0 && (
              <span
                className="title"
                style={{
                  textDecoration: "underline",
                  fontSize: "10px",
                  paddingLeft: "5px",
                }}
              >
                {`Total Loan Amount - ${totalEMI()}`}
              </span>
            )}
          </div>

          <div>
            <input
              style={{
                width: "100%",
              }}
              type="range"
              value={emi}
              min={calculateEMI(cost)}
              max={calculateEMI(0)}
              onChange={updateDownPayment}
            />
            <div
              className="lables"
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <label>{calculateEMI(cost)}</label>
              <b>{emi}</b>
              <label>{calculateEMI(0)}</label>
            </div>
          </div>
        </div>

        <span
          className="title"
          style={{
            fontWeight: 700,
          }}
        >
          Tenure
        </span>
        <div
          className="tenureContainer"
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "10px",
          }}
        >
          {tenureData.map((t) => {
            return (
              <button
                style={{
                  width: "6vw",
                  padding: "3px",
                  border: "none",
                  borderRadius: "100px",
                  backgroundColor:
                    t === tenure ? "lightblue" : "rgb(226, 226, 226)",
                }}
                onClick={() => setTenure(t)}
              >
                {t}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default EmiCalculator;
