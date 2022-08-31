import * as React from "react";

const SvgBookmark = (props) => (
  <svg
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3 2.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v11a.5.5 0 0 1-.765.424L7.5 11.59l-3.735 2.334A.5.5 0 0 1 3 13.5v-11ZM4 3v9.598l2.97-1.856a1 1 0 0 1 1.06 0L11 12.598V3H4Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgBookmark;
