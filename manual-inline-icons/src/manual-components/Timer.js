import * as React from "react";

const SvgTimer = (props) => (
  <svg
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.5.85a.5.5 0 0 0-.5.5v2.172a.5.5 0 1 0 1 0v-1.65a5.65 5.65 0 1 1-4.81 1.974.5.5 0 1 0-.762-.647A6.65 6.65 0 1 0 7.5.85Zm-.76 7.23L4.224 4.573a.25.25 0 0 1 .348-.348L8.081 6.74a.96.96 0 1 1-1.34 1.34Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgTimer;
