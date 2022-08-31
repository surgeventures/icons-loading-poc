import * as React from "react";

const SvgBorderWidth = (props) => (
  <svg
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1 3h13v1H1V3Zm0 3h13v2H1V6Zm13 4.25H1v2.5h13v-2.5Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgBorderWidth;
