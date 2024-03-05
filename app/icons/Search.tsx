import * as React from "react";
import { SVGProps } from "react";

const SearchIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M16.5 16.81A8 8 0 1 0 5.5 5.19a8 8 0 0 0 11 11.619Zm0 0 5.5 5.5"
    />
  </svg>
);

export default SearchIcon;
