import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Tech from "./components/Tech";
import Contact from "./components/Contact";
import Works from "./components/Works";
import Thanks from "./components/Thanks";
import Experience from "./components/Experience";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <div className="relative z-0 bg-primary">
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar />
            <Hero />
          </div>
          <About />
          <Experience />
          <Tech />
          <Works />
          {/* <Feedbacks /> */}
          <div className="relative z-0">
            <Contact />
            {/* <StarsCanvas /> */}
          </div>
          <Thanks />
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
