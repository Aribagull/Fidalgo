import Main from "./components/common/main";
import Video from "./components/common/Video";
import Footer from "./FooterDesign/Footer";
import "./App.css";

function App() {
  return (
    <div className=" bg-cyan-600 w-full h-full ">
      <div className="relative">
        <div class="absolute left-[35%] top-0 h-full w-[0.25px] opacity-20 bg-white transform -translate-x-1/2 "></div>
        <div className="absolute left-[35%] w-[0.25px] h-[60px] opacity-[45%] bg-white transform shadow-slate-400 -translate-x-1/2 animate-moving-line"></div>
        <div className="absolute left-[35%] w-[0.25px] h-[60px] opacity-[45%] bg-white transform shadow-slate-400 -translate-x-1/2 animate-moving-line2"></div>
        <div className="absolute left-[35%] w-[0.25px] h-[60px] opacity-[45%] bg-white transform shadow-slate-400 -translate-x-1/2 animate-moving-line3"></div>

        <div class="absolute right-[35%] top-0 h-full w-[0.25px] opacity-20 bg-white transform -translate-x-1/2"></div>
        <div className="absolute right-[35%] w-[0.25px] h-[60px] opacity-[45%] bg-white transform -translate-x-1/2 animate-moving-line"></div>
        <div className="absolute right-[35%] w-[0.25px] h-[60px] opacity-[45%] bg-white transform -translate-x-1/2 animate-moving-line2"></div>
        <div className="absolute right-[35%] w-[0.25px] h-[60px] opacity-[45%] bg-white transform -translate-x-1/2 animate-moving-line3"></div>
        <Video />
        <Main />
      </div>

      <Footer />
    </div>
  );
}

export default App;
