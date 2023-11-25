"use client";
import { IoArrowBack } from "react-icons/io5";

const BackButton = () => {
  return (
    <button
      className="absolute top-5 left-4"
      onClick={() => window.history.back()}
      title="Back"
    >
      <IoArrowBack size={24} />
    </button>
  );
};

export default BackButton;
