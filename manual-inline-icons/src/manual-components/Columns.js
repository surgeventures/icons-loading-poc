import * as React from "react";

const SvgColumns = (props) => (
  <svg
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.15 14V1H.85v13h1.3Zm4 0V1h-1.3v13h1.3Zm4-13v13h-1.3V1h1.3Zm4 13V1h-1.3v13h1.3Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgColumns;
