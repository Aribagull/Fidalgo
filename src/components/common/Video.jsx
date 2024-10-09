import backgroundVideo from "../../video/backgroundVideo.mp4";
import Header from "./Header";

export default function Video() {
  return (
    <>
      <div className="relative w-[99%] h-[700px] overflow-hidden">
        <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-[900px] object-cover m-3 pt-3"
        >
          <source src={backgroundVideo} type="video/mp4" />
        </video>
        <Header />
      </div>
    </>
  );
}
