import * as React from "react";

const SvgOuterShadow = (props) => (
  <svg
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      opacity={0.05}
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.14 3.886a6 6 0 1 1-8.244 8.269l.425-.263a5.5 5.5 0 1 0 7.557-7.58l.262-.426Z"
      fill="currentColor"
    />
    <path
      opacity={0.2}
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.851 5.073a5.5 5.5 0 1 1-7.778 7.778l.357-.35a5 5 0 1 0 7.07-7.07l.351-.358Z"
      fill="currentColor"
    />
    <path
      opacity={0.35}
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.302 6.45a5 5 0 0 1-6.9 6.822l.26-.427a4.5 4.5 0 0 0 6.21-6.14l.43-.254Z"
      fill="currentColor"
    />
    <path
      opacity={0.5}
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.374 7.94a4.5 4.5 0 0 1-5.502 5.417l.126-.484a4 4 0 0 0 4.89-4.816l.486-.117Z"
      fill="currentColor"
    />
    <path
      opacity={0.65}
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.915 9.821a4.005 4.005 0 0 1-3.123 3.1l-.098-.49a3.505 3.505 0 0 0 2.732-2.712l.49.102Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.277 7.503a6.225 6.225 0 1 1 12.45 0 6.225 6.225 0 0 1-12.45 0Zm6.225-5.275a5.275 5.275 0 1 0 0 10.55 5.275 5.275 0 0 0 0-10.55Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgOuterShadow;
