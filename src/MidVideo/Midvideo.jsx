import { useState, useRef } from "react";
import midvide from "../video/mid-video.mp4";

import Playbutton from "./Playbutton";

export default function Midvideo() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handlePlay = () => {
    videoRef.current.play();
    setIsPlaying(true);
  };

  return (
    <>
      <div className="relative w-full h-[500px] overflow-hidden">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          loop
          muted
          style={{ display: "block" }}
        >
          <source src={midvide} type="video/mp4" />
        </video>
        {!isPlaying && <Playbutton onClick={handlePlay} />}
      </div>
    </>
  );
}
