import * as React from "react";

const SvgCheckbox = (props) => (
  <svg
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3 3h9v9H3V3ZM2 3a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3Zm8.35 2.511a.5.5 0 0 0-.825-.566L6.64 9.15l-1.443-1.74a.5.5 0 0 0-.77.638l1.866 2.25a.5.5 0 0 0 .797-.037l3.26-4.749Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgCheckbox;
