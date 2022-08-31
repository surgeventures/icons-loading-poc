import * as React from "react";

const SvgIdCard = (props) => (
  <svg
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14 11V4H1v7h13Zm1-7v7a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1ZM2 5.25A.25.25 0 0 1 2.25 5h3.5a.25.25 0 0 1 .25.25v4.5a.25.25 0 0 1-.25.25h-3.5A.25.25 0 0 1 2 9.75v-4.5ZM7.5 7a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3ZM7 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5ZM7.5 5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgIdCard;
