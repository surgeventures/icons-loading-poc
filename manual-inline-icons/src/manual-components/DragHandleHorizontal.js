import * as React from "react";

const SvgDragHandleHorizontal = (props) => (
  <svg
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.5 4.1a.4.4 0 1 0 0 .8h10a.4.4 0 0 0 0-.8h-10Zm0 2a.4.4 0 1 0 0 .8h10a.4.4 0 0 0 0-.8h-10Zm-.4 2.4c0-.22.18-.4.4-.4h10a.4.4 0 0 1 0 .8h-10a.4.4 0 0 1-.4-.4Zm.4 1.6a.4.4 0 0 0 0 .8h10a.4.4 0 0 0 0-.8h-10Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgDragHandleHorizontal;
