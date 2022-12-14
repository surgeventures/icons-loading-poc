import * as React from "react";

const SvgSquare = (props) => (
  <svg
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1 1h13v13H1V1Zm1 1v11h11V2H2Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgSquare;
