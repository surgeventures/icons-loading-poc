import * as React from "react";

const SvgComponentBoolean = (props) => (
  <svg
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.854 1.49a.5.5 0 0 0-.707 0L1.49 7.146a.5.5 0 0 0 0 .708l5.657 5.656a.5.5 0 0 0 .707 0l5.657-5.656a.5.5 0 0 0 0-.708L7.854 1.49ZM7.5 2.55 2.55 7.5l4.95 4.95v-9.9Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgComponentBoolean;
