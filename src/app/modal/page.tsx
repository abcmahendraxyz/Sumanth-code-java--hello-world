// pages/index.js
"use client";
import React, { useState } from "react";
import ModalPage from "./modal";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <h1>Your Next.js App</h1>
      <button onClick={openModal}>Open Modal</button>

      {isModalOpen && (
        <ModalPage
          open={isModalOpen}
          title="Modal Title"
          desc="Modal Description"
          closeModal={closeModal}
        >
          hello
        </ModalPage>
      )}
    </div>
  );
};

export default Home;
