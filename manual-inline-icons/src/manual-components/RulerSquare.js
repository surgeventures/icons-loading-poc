import * as React from "react";

const SvgRulerSquare = (props) => (
  <svg
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M.5 0a.5.5 0 0 0-.5.5v14a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5V5h9.5a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-.5-.5H.5ZM1 4.075V1h3.075v3.075H1Zm0 .85V14h3v-1.075H2.75a.425.425 0 1 1 0-.85H4v-1.15H2.25a.425.425 0 0 1 0-.85H4v-1.15H2.75a.425.425 0 1 1 0-.85H4v-1.15H2.75a.425.425 0 1 1 0-.85H4v-1.15H1ZM4.925 4h1.15V2.75a.425.425 0 0 1 .85 0V4h1.15V2.75a.425.425 0 0 1 .85 0V4h1.15V2.25a.425.425 0 1 1 .85 0V4h1.15V2.75a.425.425 0 0 1 .85 0V4H14V1H4.925v3Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgRulerSquare;
