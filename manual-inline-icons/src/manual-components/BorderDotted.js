import * as React from "react";

const SvgBorderDotted = (props) => (
  <svg
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.5 6.625a.875.875 0 1 0 0 1.75.875.875 0 0 0 0-1.75Zm4 0a.875.875 0 1 0 0 1.75.875.875 0 0 0 0-1.75Zm4 0a.875.875 0 1 0 0 1.75.875.875 0 0 0 0-1.75Zm3.125.875a.875.875 0 1 1 1.75 0 .875.875 0 0 1-1.75 0Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgBorderDotted;
