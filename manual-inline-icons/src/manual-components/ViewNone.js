import * as React from "react";

const SvgViewNone = (props) => (
  <svg
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14 2.587 1.852 13H13.5a.5.5 0 0 0 .5-.5V2.587ZM.763 13.807l.062.073.03-.026c.195.094.414.146.645.146h12a1.5 1.5 0 0 0 1.5-1.5v-10a1.5 1.5 0 0 0-.763-1.307l-.062-.073-.03.025A1.494 1.494 0 0 0 13.5 1h-12A1.5 1.5 0 0 0 0 2.5v10c0 .56.307 1.05.763 1.307ZM1 12.413 13.148 2H1.5a.5.5 0 0 0-.5.5v9.913Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgViewNone;
