import * as React from "react";

const SvgPadding = (props) => (
  <svg
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.857 2h9.286c.473 0 .857.384.857.857v9.286a.857.857 0 0 1-.857.857H2.857A.857.857 0 0 1 2 12.143V2.857C2 2.384 2.384 2 2.857 2ZM1 2.857C1 1.831 1.831 1 2.857 1h9.286C13.168 1 14 1.831 14 2.857v9.286A1.857 1.857 0 0 1 12.143 14H2.857A1.857 1.857 0 0 1 1 12.143V2.857ZM7.5 5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Zm-3 6a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1ZM5 7.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM4.5 5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Zm6.5 5.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM10.5 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Zm.5-3.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM7.5 11a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgPadding;
