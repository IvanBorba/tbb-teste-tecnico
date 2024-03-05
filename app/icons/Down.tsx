import * as React from "react";
import { SVGProps } from "react";

const DownIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={28}
    height={30}
    fill="none"
    {...props}
  >
    <g
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      filter="url(#a)"
    >
      <path d="m9 16 5 5 5-5M9 9l5 5 5-5" />
    </g>
    <defs>
      <filter
        id="a"
        width={40}
        height={40}
        x={-6}
        y={-5}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset />
        <feGaussianBlur stdDeviation={4} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0" />
        <feBlend
          in2="BackgroundImageFix"
          result="effect1_dropShadow_1205_9494"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_1205_9494"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export default DownIcon;
