import * as React from "react";

const SvgListBullet = (props) => (
  <svg
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.5 5.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM4 4.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5ZM4.5 7a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9Zm0 3a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9ZM2.25 7.5a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm-.75 3.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgListBullet;
