import React from "react";
import "../styles/tailwind.css";

interface ButtonStandardProps {
  label: string;
  styles?: string;
}

export const ButtonStandard = ({ label, styles }: ButtonStandardProps) => {
  return (
    <button
      className={
        "text-white text-base bg-primary-medium hover:bg-primary-darkest focus:ring-4 focus:ring-primary-lightest font-medium rounded-lg text-sm px-5 py-2.5 text-center" +
        styles
      }
    >
      {label}
    </button>
  );
};

export default ButtonStandard;
