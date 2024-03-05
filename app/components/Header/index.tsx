"use client";
import Image from "next/image";
import "./styles.scss";
import MessageCircleIcon from "@/app/icons/MessageCircle";
import ShoppingBagIcon from "@/app/icons/ShoppingBag";
import SearchIcon from "@/app/icons/Search";
import { useEffect, useState } from "react";
import Menu from "../Menu";
import { smoothScroll } from "@/app/utils/smoothScroll";

const Header = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 1024);

    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleShowMenu = () => setOpenMenu(!openMenu);

  useEffect(() => {
    smoothScroll();
  }, []);

  return (
    <>
      <header className={`${openMenu && "hidden"}`}>
        <div className="logo-container">
          <Image width={48} height={48} alt="" src="/assets/lego-logo.png" />
          <Image
            className="categories"
            width={80}
            height={80}
            alt=""
            src="/assets/categories.png"
            onClick={handleShowMenu}
          />
        </div>
        {!isMobile && (
          <div className="desktop-navigation-container">
            <a href="#gifting">Gifting</a>
            <a href="#travel">Travel</a>
            <a href="#adults">Adults Welcome</a>
            <a href="#art">Art & Home Décor </a>
            <a href="#space">Space</a>
            <a href="#pop">Pop Culture</a>
            <a href="#toddlers">Toddlers</a>
            <a href="#playing">Real World Role Playing</a>
          </div>
        )}
        <div className="icons-container">
          {!isMobile && (
            <div className="icon">
              <MessageCircleIcon />
              <p>Contact us</p>
            </div>
          )}
          <div className="icon">
            <ShoppingBagIcon />
            <p>Request</p>
          </div>
          <div className="icon">
            <SearchIcon />
            <p>Search</p>
          </div>
        </div>
      </header>
      <Menu open={openMenu} close={handleShowMenu} />
    </>
  );
};

export default Header;
