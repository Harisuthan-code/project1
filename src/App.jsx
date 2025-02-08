import About from "./Comps/About";
import Footer from "./Comps/Footer";
import Hero from "./Comps/Hero";
import Howwork from "./Comps/Howwork";
import Main from "./Comps/Main";
import Usecase from "./Comps/Usecase";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="bg-black text-white tracking-wide">
        <Routes>
          {/* Route for the homepage */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <div id="about">
                  <About />
                </div>
                <div id="usecase">
                  <Usecase />
                </div>
                <div id="howwork">
                  <Howwork />
                </div>

                <Footer/>
              </>
            }
          />

          

          {/* Route for the '/main' page */}
          <Route path="/main" element={<Main />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;



