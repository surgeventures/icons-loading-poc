import * as React from "react";

const SvgDragHandleVertical = (props) => (
  <svg
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.1 12.5a.4.4 0 0 0 .8 0v-10a.4.4 0 0 0-.8 0v10Zm2 0a.4.4 0 0 0 .8 0v-10a.4.4 0 0 0-.8 0v10Zm2.4.4a.4.4 0 0 1-.4-.4v-10a.4.4 0 1 1 .8 0v10a.4.4 0 0 1-.4.4Zm1.6-.4a.4.4 0 0 0 .8 0v-10a.4.4 0 0 0-.8 0v10Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgDragHandleVertical;
