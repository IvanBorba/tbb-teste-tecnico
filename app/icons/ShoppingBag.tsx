import * as React from "react";
import { SVGProps } from "react";

const ShoppingBagIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill="#000"
      fillRule="evenodd"
      d="M5.2 1.4A1 1 0 0 1 6 1h12a1 1 0 0 1 .8.4l2.994 3.992c.13.168.206.38.206.608v14a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V6c0-.229.077-.44.206-.608L5.2 1.4ZM17.5 3 19 5H5l1.5-2h11ZM4 20V7h16v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1Zm5-10a1 1 0 1 0-2 0 5 5 0 1 0 10 0 1 1 0 1 0-2 0 3 3 0 0 1-6 0Z"
      clipRule="evenodd"
    />
  </svg>
);

export default ShoppingBagIcon;
