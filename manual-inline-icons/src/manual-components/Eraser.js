import * as React from "react";

const SvgEraser = (props) => (
  <svg
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.36.73a.5.5 0 0 1 .708 0l5.203 5.202a.5.5 0 0 1 0 .707l-5.316 5.316-1.608 1.609a1.5 1.5 0 0 1-2.122 0l-3.789-3.79a1.5 1.5 0 0 1 0-2.12l1.609-1.61L8.36.73Zm.354 1.06L4.106 6.398l4.496 4.496 4.608-4.608L8.714 1.79Zm-.82 9.811L3.398 7.106 2.143 8.36a.5.5 0 0 0 0 .708l3.79 3.789a.5.5 0 0 0 .706 0l1.255-1.255Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgEraser;
