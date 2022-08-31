import * as React from "react";

const SvgMaskOn = (props) => (
  <svg
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1 1a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H1Zm6.5 9.625a3.125 3.125 0 1 0 0-6.25 3.125 3.125 0 0 0 0 6.25Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgMaskOn;
