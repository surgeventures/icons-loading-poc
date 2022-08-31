import * as React from "react";

const SvgStrikethrough = (props) => (
  <svg
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5 3.25a.5.5 0 0 0-1 0V7.1H2.5a.4.4 0 1 0 0 .8H4v.65a3.5 3.5 0 1 0 7 0V7.9h1.5a.4.4 0 0 0 0-.8H11V3.25a.5.5 0 1 0-1 0V7.1H5V3.25ZM5 7.9v.65a2.5 2.5 0 0 0 5 0V7.9H5Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgStrikethrough;
