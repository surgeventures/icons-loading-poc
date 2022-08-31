import * as React from "react";

const SvgViewHorizontal = (props) => (
  <svg
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.5 2h12a.5.5 0 0 1 .5.5V7H1V2.5a.5.5 0 0 1 .5-.5ZM1 8v4.5a.5.5 0 0 0 .5.5h12a.5.5 0 0 0 .5-.5V8H1ZM0 2.5A1.5 1.5 0 0 1 1.5 1h12A1.5 1.5 0 0 1 15 2.5v10a1.5 1.5 0 0 1-1.5 1.5h-12A1.5 1.5 0 0 1 0 12.5v-10Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgViewHorizontal;
