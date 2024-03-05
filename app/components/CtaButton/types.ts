import { DetailedHTMLProps, ButtonHTMLAttributes } from "react";

export interface CtaButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  text: string;
}
