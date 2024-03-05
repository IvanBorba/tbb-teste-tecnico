import * as React from "react";
import { SVGProps } from "react";

const MuteIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M14.667 6.667 8 12H2.667v8H8l6.667 5.334V6.667ZM30.667 12l-8 8M22.667 12l8 8"
    />
  </svg>
);

export default MuteIcon;
