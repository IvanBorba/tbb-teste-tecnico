import Image from "next/image";
import { BannerProps } from "./types";
import "./styles.scss";
import { CtaButton } from "..";

const Banner = ({ imagePath, title, description, left }: BannerProps) => {
  return (
    <div className={`banner-container ${left && "left"}`}>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
        <CtaButton text="View details" />
      </div>
      <Image width={940} height={528} alt="" src={imagePath} />
    </div>
  );
};

export default Banner;
