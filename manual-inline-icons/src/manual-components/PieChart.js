import * as React from "react";

const SvgPieChart = (props) => (
  <svg
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.85 7.5a5.65 5.65 0 1 1 11.3 0 5.65 5.65 0 0 1-11.3 0ZM7.5.85a6.65 6.65 0 1 0 0 13.3 6.65 6.65 0 0 0 0-13.3ZM7 8V3.128A4.4 4.4 0 0 1 11.872 8H7Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgPieChart;
