import * as React from "react";

const SvgBorderSplit = (props) => (
  <svg
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect x={7} y={5.025} width={1} height={1} rx={0.5} fill="currentColor" />
    <rect x={7} y={3.025} width={1} height={1} rx={0.5} fill="currentColor" />
    <rect x={7} y={7.025} width={1} height={1} rx={0.5} fill="currentColor" />
    <rect x={7} y={13.025} width={1} height={1} rx={0.5} fill="currentColor" />
    <rect x={7} y={1.025} width={1} height={1} rx={0.5} fill="currentColor" />
    <rect x={13} y={7.025} width={1} height={1} rx={0.5} fill="currentColor" />
    <rect x={5} y={7.025} width={1} height={1} rx={0.5} fill="currentColor" />
    <rect x={3} y={7.025} width={1} height={1} rx={0.5} fill="currentColor" />
    <rect x={9} y={7.025} width={1} height={1} rx={0.5} fill="currentColor" />
    <rect x={11} y={7.025} width={1} height={1} rx={0.5} fill="currentColor" />
    <rect x={7} y={9.025} width={1} height={1} rx={0.5} fill="currentColor" />
    <rect x={7} y={11.025} width={1} height={1} rx={0.5} fill="currentColor" />
    <rect x={1} y={7.025} width={1} height={1} rx={0.5} fill="currentColor" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1 1.5a.5.5 0 0 1 .5-.5H6v1H2v4H1V1.5ZM13 2H9V1h4.5a.5.5 0 0 1 .5.5V6h-1V2ZM1 13.5V9h1v4h4v1H1.5a.5.5 0 0 1-.5-.5Zm12-.5V9h1v4.5a.5.5 0 0 1-.5.5h-4v-1H13Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgBorderSplit;
