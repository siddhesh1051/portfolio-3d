import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";
import ReactGA from "react-ga4";
import StarCanvas from "./components/canvas/StarCanvas";

const App = () => {
  const TRACKING_ID = "G-VNF5JE3HEJ";
  ReactGA.initialize(TRACKING_ID);
  ReactGA.send({ hitType: "pageview", page: "/", title: "Home View" });

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <StarCanvas />

        <div className=" bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className="relative z-0">
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
