"use client";
import React, { useState, useEffect } from "react";

const page = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [status, setStatus] = useState("");
  const [xIsNext, setXIsNext] = useState(true);

  useEffect(() => {
    const calculateWinner = (squares) => {
      const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];

      for (const [a, b, c] of lines) {
        if (
          squares[a] &&
          squares[a] === squares[b] &&
          squares[a] === squares[c]
        ) {
          return squares[a];
        }
      }

      return null;
    };

    const winner = calculateWinner(squares);
    const isBoardFull = squares.every((square) => square !== null);

    if (winner) {
      setStatus(`Winner is ${winner}`);
    } else if (isBoardFull) {
      setStatus("Draw");
    } else {
      setStatus(`Next player: ${xIsNext ? "X" : "O"}`);
    }
  }, [squares, xIsNext]);

  const handleClick = (i) => {
    if (squares[i] || status.includes("Winner") || status.includes("Draw")) {
      return;
    }

    const newSquares = squares.slice();
    newSquares[i] = xIsNext ? "X" : "O";
    setSquares(newSquares);
    setXIsNext(!xIsNext);
  };
  return (
    <div>
      <h1>Tic Tac Toe Game</h1>
      <div className="status">{status}</div>
      <div
        className="boardRow"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 150px)",
        }}
      >
        {squares.map((element, i) => (
          <div key={i}>
            <button
              style={{
                width: "100px",
                height: "100px",
                margin: "5px",
                backgroundColor: "lightgray",
              }}
              onClick={() => handleClick(i)}
            >
              {squares[i]}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
