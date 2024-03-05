import Image from "next/image";
import "./styles.scss";
import { MenuProps } from "./types";
import CloseIcon from "@/app/icons/Close";
import HomeIcon from "@/app/icons/Home";
import ShoppingBagIcon from "@/app/icons/ShoppingBag";
import MessageCircleIcon from "@/app/icons/MessageCircle";

const Menu = ({ open, close }: MenuProps) => {
  return (
    <div className={`menu-container ${open && "open"}`}>
      <div className="menu-content">
        <div className="menu-options">
          <div className="logo-container">
            <Image width={48} height={48} alt="" src="/assets/lego-logo.png" />
            <CloseIcon onClick={close} />
          </div>
          <div className="menu-icons">
            <div className="icon">
              <p>
                <HomeIcon />
                Home
              </p>
            </div>
            <div className="icon">
              <p>
                <ShoppingBagIcon /> Requests
              </p>
            </div>
            <div className="icon">
              <p>
                <MessageCircleIcon />
                Contact us
              </p>
            </div>
          </div>
          <div className="themes">
            <span>Themes</span>
            <div>
              <p>Gifting</p>
            </div>
            <div>
              <p>Travel</p>
            </div>
            <div>
              <p>Adults Welcome</p>
            </div>
            <div>
              <p>Art & Home Décor</p>
            </div>
            <div>
              <p>Space</p>
            </div>
            <div>
              <p>Pop Culture</p>
            </div>
            <div>
              <p>Toddlers</p>
            </div>
            <div>
              <p>Real World Role Playing</p>
            </div>
          </div>
        </div>
        <div className="menu-categories">
          <div className="category-card">
            <Image
              width={140}
              height={140}
              alt=""
              src="/assets/category-1.png"
            />
          </div>
          <div className="category-card">
            <Image
              width={140}
              height={140}
              alt=""
              src="/assets/category-2.png"
            />
          </div>
          <div className="category-card">
            <Image
              width={140}
              height={140}
              alt=""
              src="/assets/category-3.png"
            />
          </div>
          <div className="category-card">
            <Image
              width={140}
              height={140}
              alt=""
              src="/assets/category-4.png"
            />
          </div>
          <div className="category-card">
            <Image
              width={140}
              height={140}
              alt=""
              src="/assets/category-5.png"
            />
          </div>
          <div className="category-card">
            <Image
              width={140}
              height={140}
              alt=""
              src="/assets/category-6.png"
            />
          </div>
          <div className="category-card">
            <Image
              width={140}
              height={140}
              alt=""
              src="/assets/category-7.png"
            />
          </div>
          <div className="category-card">
            <Image
              width={140}
              height={140}
              alt=""
              src="/assets/category-8.png"
            />
          </div>
          <div className="category-card">
            <Image
              width={140}
              height={140}
              alt=""
              src="/assets/category-9.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
