import React from "react";
import { useNavigate } from "react-router-dom";

export const BackButton = () => {
  const navigate = useNavigate();

  return (
    <div>
      <button
        onClick={() => navigate("/")}
        className="absolute top-4 left-4 p-2 text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none font-bold rounded-lg text-md px-5 py-2.5 text-center me-2 mb-2"
      >
        Back
      </button>
    </div>
  );
};
