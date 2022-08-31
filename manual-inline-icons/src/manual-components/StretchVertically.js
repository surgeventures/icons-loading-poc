import * as React from "react";

const SvgStretchVertically = (props) => (
  <svg
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1 .5a.5.5 0 0 1 .5-.5h12a.5.5 0 0 1 0 1h-12A.5.5 0 0 1 1 .5ZM9 14V1H6v13H1.5a.5.5 0 0 0 0 1h12a.5.5 0 0 0 0-1H9Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgStretchVertically;
