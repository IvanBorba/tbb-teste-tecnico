import * as React from "react";
import { SVGProps } from "react";

const DownloadIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    {...props}
  >
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M11 7.18c0-.652.528-1.18 1.18-1.18H14v3h-3V7.18ZM11 11h3v3h-3v-3Zm0 5h3v3h-3v-3Zm0 5h3v3h-1.82A1.18 1.18 0 0 1 11 22.82V21Zm5 3v-8h8v8h-8Zm10 0v-3h3v1.82A1.18 1.18 0 0 1 27.82 24H26Zm3-5h-3v-3h3v3Zm0-5h-3v-3h3v3Zm0-5h-3V6h1.82c.652 0 1.18.528 1.18 1.18V9Zm-5-3v8h-8V6h8Zm1-2h2.82A3.18 3.18 0 0 1 31 7.18v15.64A3.18 3.18 0 0 1 27.82 26H12.18A3.18 3.18 0 0 1 9 22.82V7.18A3.18 3.18 0 0 1 12.18 4H25Z"
      clipRule="evenodd"
    />
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m17 32 3 3 3-3M20 35v-6"
    />
  </svg>
);

export default DownloadIcon;
