import * as React from "react";

const SvgDesktop = (props) => (
  <svg
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1 3.25A.25.25 0 0 1 1.25 3h12.5a.25.25 0 0 1 .25.25v7.5a.25.25 0 0 1-.25.25H1.25a.25.25 0 0 1-.25-.25v-7.5ZM1.25 2C.56 2 0 2.56 0 3.25v7.5C0 11.44.56 12 1.25 12h3.823l-.243 1.299a.55.55 0 0 0 .54.651h4.26a.55.55 0 0 0 .54-.651L9.927 12h3.823c.69 0 1.25-.56 1.25-1.25v-7.5C15 2.56 14.44 2 13.75 2H1.25Zm7.76 10H5.99l-.198 1.05h3.416L9.01 12Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgDesktop;
