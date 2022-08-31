import * as React from "react";

const SvgBlendingMode = (props) => (
  <svg
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3 9c0-2.5 1.5-4.75 4.5-7.5 3 2.75 4.5 5 4.5 7.5a4.5 4.5 0 1 1-9 0Zm7.952-.697c-1.279-.482-2.664.16-3.962.76-1.057.488-2.056.95-2.893.759A3.51 3.51 0 0 1 4 9c0-1.888 1.027-3.728 3.5-6.126 2.168 2.102 3.225 3.776 3.452 5.43Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgBlendingMode;
