import * as React from "react";

const SvgStopwatch = (props) => (
  <svg
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.5.5A.5.5 0 0 1 6 0h3a.5.5 0 0 1 0 1H8v1.12a6.363 6.363 0 0 1 2.992 1.016.638.638 0 0 1 .066-.078l.8-.8a.625.625 0 0 1 .884.884l-.775.775A6.4 6.4 0 1 1 7 2.119V1H6a.5.5 0 0 1-.5-.5Zm-3.4 8a5.4 5.4 0 1 1 10.8 0 5.4 5.4 0 0 1-10.8 0Zm5.9-4a.5.5 0 0 0-1 0v5a.5.5 0 1 0 1 0v-5Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgStopwatch;
