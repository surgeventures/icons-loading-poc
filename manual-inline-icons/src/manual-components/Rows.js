import * as React from "react";

const SvgRows = (props) => (
  <svg
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14 12.85H1v1.3h13v-1.3Zm0-4H1v1.3h13v-1.3Zm-13-4h13v1.3H1v-1.3Zm13-4H1v1.3h13V.85Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgRows;
