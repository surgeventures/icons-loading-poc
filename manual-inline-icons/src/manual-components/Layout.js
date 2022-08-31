import * as React from "react";

const SvgLayout = (props) => (
  <svg
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9 2H6v11h3V2Zm1 0v11h2.5a.5.5 0 0 0 .5-.5v-10a.5.5 0 0 0-.5-.5H10ZM2.5 2H5v11H2.5a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5Zm0-1A1.5 1.5 0 0 0 1 2.5v10A1.5 1.5 0 0 0 2.5 14h10a1.5 1.5 0 0 0 1.5-1.5v-10A1.5 1.5 0 0 0 12.5 1h-10Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgLayout;
