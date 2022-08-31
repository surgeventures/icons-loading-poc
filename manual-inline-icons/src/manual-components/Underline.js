import * as React from "react";

const SvgUnderline = (props) => (
  <svg
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5 2.75a.5.5 0 0 0-1 0v5.3a3.5 3.5 0 0 0 7 0v-5.3a.5.5 0 1 0-1 0v5.3a2.5 2.5 0 1 1-5 0v-5.3ZM3.5 13.1a.4.4 0 1 0 0 .8h8a.4.4 0 0 0 0-.8h-8Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgUnderline;
