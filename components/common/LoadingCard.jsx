"use client";
import React from "react";

const LoadingCard = () => {
  return (
    <div
      className="spinner-grow mx-auto"
      style={{ width: "3rem", height: "3rem" }}
      role="status"
    >
      <span className="visually-hidden">Loading...</span>
    </div>
  );
};

export default LoadingCard;
