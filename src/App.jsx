import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Partners from "./pages/Partners";
import PartnertsMobile from "./pages/PartnertsMobile";
import About from "./pages/About";
import Features from "./pages/Features";
import PreRoadmap from "./pages/PreRoadMap";
import SectionStats from "./pages/SectionStats";
import Roadmap from "./pages/Roadmap";
import LearnMore from "./pages/LearnMore";
import Footer from "./pages/Footer";
import Demo from "./pages/Demo";

function App() {
  return (
    <div className="page-wrapper background-color-black">
      {/* <main className="main-wrapper">
        <section className="section_hero">
          <Navbar />
          <div className="w-full flex items-center justify-center gap-20 background-style-2 py-16 text-black text-sm font-sora">
            <button className="flex items-center justify-center gap-2 bg-gradient-to-br from-green-400 to-indigo-400 rounded-full py-1 px-3">
              Coingecko <FaArrowRight className="text-[#CFCDE0]" />
            </button>
            <button className="flex items-center justify-center gap-2 bg-gradient-to-br from-green-400 to-indigo-400 rounded-full py-1 px-3">
              Coinmarketcap <FaArrowRight className="text-[#CFCDE0]" />
            </button>
          </div>
          <div className="w-full flex items-start justify-center background-style-1 ">
            <Home />
          </div>
          <Demo />
          <div>
            <Partners />
          </div>
        </section>
      </main> */}
      <div className="empty">
        <div className="global-styles w-embed">
          <style></style>
        </div>
      </div>
      <main className="object-fill h-auto min-h-auto">
        <section className="mb-[35rem]">
          <div className="background-style-1">
            <Navbar />
            <Home />
          </div>
        </section>
        <Partners />
        <PartnertsMobile />
        <About />
        <Features />
        <PreRoadmap />
        <SectionStats />
        <Roadmap />
        <LearnMore />
        <Footer />
      </main>
    </div>
  );
}

export default App;
