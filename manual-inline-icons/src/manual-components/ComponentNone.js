import * as React from "react";

const SvgComponentNone = (props) => (
  <svg
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.854 1.49a.5.5 0 0 0-.708 0L1.49 7.146a.5.5 0 0 0 0 .708l2.474 2.474-2.318 2.318a.5.5 0 0 0 .708.708l2.318-2.318 2.474 2.474a.5.5 0 0 0 .708 0l5.657-5.656a.5.5 0 0 0 0-.708l-2.475-2.474 2.318-2.318a.5.5 0 1 0-.708-.708l-2.318 2.318L7.854 1.49ZM9.62 4.672 7.5 2.55 2.55 7.5l2.122 2.121 4.95-4.95ZM5.38 10.328 7.5 12.45l4.95-4.95-2.121-2.121-4.95 4.95Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgComponentNone;
