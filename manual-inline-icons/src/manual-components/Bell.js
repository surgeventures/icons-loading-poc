import * as React from "react";

const SvgBell = (props) => (
  <svg
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.601 1.25a1.1 1.1 0 0 1-.8 1.06A4.5 4.5 0 0 1 12 6.8v3.45c0 .806.033 1.457.724 1.803A.5.5 0 0 1 12.5 13H8.161a1 1 0 1 1-1.323 0H2.5a.5.5 0 0 1-.224-.947c.691-.346.724-.997.724-1.803V6.8a4.5 4.5 0 0 1 4.2-4.49 1.1 1.1 0 1 1 1.401-1.06ZM7.5 3.3A3.5 3.5 0 0 0 4 6.8v3.5c0 .446.001 1.108-.3 1.7h7.6c-.301-.592-.3-1.254-.3-1.7V6.8a3.5 3.5 0 0 0-3.5-3.5Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgBell;
