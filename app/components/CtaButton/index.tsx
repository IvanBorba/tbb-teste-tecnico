import { CtaButtonProps } from "./types";
import "./styles.scss";
import ArrowRightIcon from "@/app/icons/ArrowRight";

const CtaButton = ({ text, ...rest }: CtaButtonProps) => {
  return (
    <button {...rest}>
      {text}
      <span>
        <ArrowRightIcon />
      </span>
    </button>
  );
};

export default CtaButton;
