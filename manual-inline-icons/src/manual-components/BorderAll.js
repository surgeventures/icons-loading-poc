import * as React from "react";

const SvgBorderAll = (props) => (
  <svg
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M.25 1A.75.75 0 0 1 1 .25h13a.75.75 0 0 1 .75.75v13a.75.75 0 0 1-.75.75H1A.75.75 0 0 1 .25 14V1Zm1.5.75v11.5h11.5V1.75H1.75Z"
      fill="currentColor"
    />
    <rect x={7} y={5} width={1} height={1} rx={0.5} fill="currentColor" />
    <rect x={7} y={3} width={1} height={1} rx={0.5} fill="currentColor" />
    <rect x={7} y={7} width={1} height={1} rx={0.5} fill="currentColor" />
    <rect x={5} y={7} width={1} height={1} rx={0.5} fill="currentColor" />
    <rect x={3} y={7} width={1} height={1} rx={0.5} fill="currentColor" />
    <rect x={9} y={7} width={1} height={1} rx={0.5} fill="currentColor" />
    <rect x={11} y={7} width={1} height={1} rx={0.5} fill="currentColor" />
    <rect x={7} y={9} width={1} height={1} rx={0.5} fill="currentColor" />
    <rect x={7} y={11} width={1} height={1} rx={0.5} fill="currentColor" />
  </svg>
);

export default SvgBorderAll;
