import * as React from "react";

const SvgMaskOff = (props) => (
  <svg
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1 2h13v11H1V2ZM0 2a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V2Zm4.875 5.5a2.625 2.625 0 1 1 5.25 0 2.625 2.625 0 0 1-5.25 0ZM7.5 3.875a3.625 3.625 0 1 0 0 7.25 3.625 3.625 0 0 0 0-7.25Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgMaskOff;
