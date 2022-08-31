import * as React from "react";

const SvgViewVertical = (props) => (
  <svg
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 2h5.5a.5.5 0 0 1 .5.5v10a.5.5 0 0 1-.5.5H8V2ZM7 2H1.5a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5H7V2Zm-7 .5A1.5 1.5 0 0 1 1.5 1h12A1.5 1.5 0 0 1 15 2.5v10a1.5 1.5 0 0 1-1.5 1.5h-12A1.5 1.5 0 0 1 0 12.5v-10Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgViewVertical;
