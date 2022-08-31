import * as React from "react";

const SvgButton = (props) => (
  <svg
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2 5h11a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1ZM0 6a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6Zm4.5.75a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm2.25.75a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0Zm3.75-.75a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgButton;
