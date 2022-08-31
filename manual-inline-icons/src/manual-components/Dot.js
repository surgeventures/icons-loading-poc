import * as React from "react";

const SvgDot = (props) => (
  <svg
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.5 9.125a1.625 1.625 0 1 0 0-3.25 1.625 1.625 0 0 0 0 3.25Zm0 1a2.625 2.625 0 1 0 0-5.25 2.625 2.625 0 0 0 0 5.25Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgDot;
