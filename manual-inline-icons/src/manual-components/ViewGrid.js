import * as React from "react";

const SvgViewGrid = (props) => (
  <svg
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7 2H1.5a.5.5 0 0 0-.5.5V7h6V2Zm1 0v5h6V2.5a.5.5 0 0 0-.5-.5H8ZM7 8H1v4.5a.5.5 0 0 0 .5.5H7V8Zm1 5V8h6v4.5a.5.5 0 0 1-.5.5H8ZM1.5 1A1.5 1.5 0 0 0 0 2.5v10A1.5 1.5 0 0 0 1.5 14h12a1.5 1.5 0 0 0 1.5-1.5v-10A1.5 1.5 0 0 0 13.5 1h-12Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgViewGrid;
