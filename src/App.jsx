import { BrowserRouter, Routes, Route } from "react-router-dom";
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
import Assignments from "./components/Assignments"; // Import your Projects component

const App = () => {
  const TRACKING_ID = "G-VNF5JE3HEJ";
  ReactGA.initialize(TRACKING_ID);
  ReactGA.send({ hitType: "pageview", page: "/", title: "Home View" });

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <StarCanvas />
        <div className="bg-cover bg-no-repeat bg-center">
          <Navbar />
        </div>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <About />
                <Experience />
                <Tech />
                <Works />
                <Feedbacks />
                <Contact />
              </>
            }
          />
          <Route path="/assignments" element={<Assignments />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
