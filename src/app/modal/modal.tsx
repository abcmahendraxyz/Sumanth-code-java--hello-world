// components/ModalPage.js
"use client";
import React from "react";
import ReactDOM from "react-dom";

const ModalPage = ({
  title,
  desc,
  closeModal,
  open,
  children,
  onClose,
}: any) => {
  const portalContainer = document.getElementById("portal");

  if (!portalContainer) {
    console.error("Portal container not found");
    return null; // or return an error message, throw an error, etc.
  }
  return ReactDOM.createPortal(
    <>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, .7)",
          zIndex: 1000,
        }}
      />
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, .7)",
          zIndex: 1000,
        }}
      >
        <button onClick={onClose}>Close Modal</button>
        {children}
      </div>
    </>,
    portalContainer
  );
};

export default ModalPage;
