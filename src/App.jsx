import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import Navbar from "./components/navbar/Navbar";
import Cursor from "./components/Cursor";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Router>
        <Cursor />
        <div className="min-h-screen bg-denim-950 absolute inset-0 bg-[linear-gradient(to_right,#191d24_1px,transparent_1px),linear-gradient(to_bottom,#191d24_1px,transparent_1px)] bg-[size:75px_75px] overflow-auto">
          <div className="min-h-screen bg-gradient-to-t from-denim-950 via-transparent">
            <div
              id="wrapper"
              className="mx-auto max-w-4xl py-10 px-8 font-body text-denim-300 min-h-screen  flex flex-col"
            >
              <Navbar />
              <div className="py-16 sm:py-24 flex-grow">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/projects" element={<Projects />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="*" element={<Error />} />
                </Routes>
              </div>
              <Footer />
            </div>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
