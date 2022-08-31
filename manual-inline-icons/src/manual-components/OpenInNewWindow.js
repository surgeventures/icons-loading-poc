import * as React from "react";

const SvgOpenInNewWindow = (props) => (
  <svg
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13 12a1 1 0 0 1-1 1H8.5a.5.5 0 0 1 0-1H12V3H3v3.5a.5.5 0 0 1-1 0V3a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v9Z"
      fill="currentColor"
    />
    <path
      d="M5.5 6.5h3v3"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="m2.5 12.5 6-6" stroke="currentColor" strokeLinecap="round" />
  </svg>
);

export default SvgOpenInNewWindow;
