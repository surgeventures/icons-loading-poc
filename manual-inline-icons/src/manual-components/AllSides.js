import * as React from "react";

const SvgAllSides = (props) => (
  <svg
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.5.75 9.75 3h-4.5L7.5.75Zm0 13.5L9.75 12h-4.5l2.25 2.25Zm-4.5-9L.75 7.5 3 9.75v-4.5ZM14.25 7.5 12 5.25v4.5l2.25-2.25Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgAllSides;
