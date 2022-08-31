import * as React from "react";

const SvgCountdownTimer = (props) => (
  <svg
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.15 7.5c0-2.835-2.21-5.65-5.65-5.65-2.778 0-4.151 2.056-4.737 3.15H4.5a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 1 0v1.813C2.705 3.071 4.334.85 7.5.85c4.063 0 6.65 3.335 6.65 6.65 0 3.315-2.587 6.65-6.65 6.65-1.944 0-3.562-.77-4.715-1.942a6.772 6.772 0 0 1-1.427-2.167.5.5 0 1 1 .925-.38c.28.681.692 1.314 1.216 1.846.972.99 2.336 1.643 4.001 1.643 3.44 0 5.65-2.815 5.65-5.65ZM7 10V5h1v5H7Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgCountdownTimer;
