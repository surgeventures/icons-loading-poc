import * as React from "react";

const SvgCamera = (props) => (
  <svg
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2 3a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H2ZM0 4a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2 .25A.25.25 0 0 1 2.25 4h2.5a.25.25 0 0 1 .25.25v1.505a.25.25 0 0 1-.25.25h-2.5a.25.25 0 0 1-.25-.25V4.25Zm10.101 3.334a2.601 2.601 0 1 1-5.202 0 2.601 2.601 0 0 1 5.202 0Zm1 0a3.601 3.601 0 1 1-7.202 0 3.601 3.601 0 0 1 7.202 0Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgCamera;
