import * as React from "react";

const SvgBorderDashed = (props) => (
  <svg
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 7.5A.5.5 0 0 1 .5 7H3a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5Zm5.75 0a.5.5 0 0 1 .5-.5h2.5a.5.5 0 0 1 0 1h-2.5a.5.5 0 0 1-.5-.5ZM12 7a.5.5 0 0 0 0 1h2.5a.5.5 0 0 0 0-1H12Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgBorderDashed;
