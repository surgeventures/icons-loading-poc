import * as React from "react";

const SvgComponentInstance = (props) => (
  <svg
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.146 1.49a.5.5 0 0 1 .708 0l5.657 5.656a.5.5 0 0 1 0 .708L7.854 13.51a.5.5 0 0 1-.708 0L1.49 7.854a.5.5 0 0 1 0-.708L7.146 1.49ZM7.5 2.55 2.55 7.5l4.95 4.95 4.95-4.95L7.5 2.55Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgComponentInstance;
