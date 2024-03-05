"use client";
import "./styles.scss";
import MuteIcon from "@/app/icons/Mute";
import DownloadIcon from "@/app/icons/Download";
import DownIcon from "@/app/icons/Down";
import { useState, useEffect } from "react";

const VideoPlayer = () => {
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

  return (
    <div className="video-player-container">
      <iframe src="https://www.youtube.com/embed/rwQqkX3qZak?si=PD6Tcq4PCtOuHEN_&autoplay=1&mute=1&controls=0&loop=1&showinfo=0&playlist=rwQqkX3qZak"></iframe>
      <h1>
        Welcome to the
        <br /> Play Matters Interactive Lookbook
      </h1>
      <div className="video-player-controls">
        <div className="mute">
          <MuteIcon />
        </div>
        <div className="download">
          <DownloadIcon />
        </div>
      </div>
      {!isMobile && (
        <div className="scroll-down">
          Scroll down <DownIcon />
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
