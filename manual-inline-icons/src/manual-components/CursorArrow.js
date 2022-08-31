import * as React from "react";

const SvgCursorArrow = (props) => (
  <svg
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.292.049a.5.5 0 0 1 .535.077L12.86 7.95a.5.5 0 0 1-.306.878l-3.334.147 1.931 4.244a.5.5 0 0 1-.247.662l-2.153.98a.5.5 0 0 1-.662-.247L6.153 10.37l-2.29 2.416A.5.5 0 0 1 3 12.44V.504a.5.5 0 0 1 .292-.455ZM4 1.599v9.589l1.938-2.044a.5.5 0 0 1 .818.137l2.035 4.463 1.242-.566-2.031-4.463a.5.5 0 0 1 .433-.707l2.82-.124L4 1.599Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgCursorArrow;
