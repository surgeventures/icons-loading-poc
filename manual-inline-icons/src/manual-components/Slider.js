import * as React from "react";

const SvgSlider = (props) => (
  <svg
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.3 7.5a1.8 1.8 0 1 1-3.6 0 1.8 1.8 0 0 1 3.6 0Zm.905.5a2.751 2.751 0 0 1-5.41 0H.5a.5.5 0 0 1 0-1h5.295a2.751 2.751 0 0 1 5.41 0H14.5a.5.5 0 0 1 0 1h-3.295Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgSlider;
