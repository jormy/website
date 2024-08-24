import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import Navbar from "./components/navbar/Navbar";
import Cursor from "./components/Cursor";
import Footer from "./components/Footer";
import TransitionPage from "./components/TransitionPage";

function App() {
  return (
    <>
      <Router>
        <Cursor />

        <div className="absolute inset-0 min-h-screen overflow-auto bg-denim-950 bg-[linear-gradient(to_right,#191d24_1px,transparent_1px),linear-gradient(to_bottom,#191d24_1px,transparent_1px)] bg-[size:75px_75px]">
          <div className="min-h-screen bg-gradient-to-t from-denim-950 via-transparent">
            <div
              id="wrapper"
              className="mx-auto flex min-h-screen max-w-4xl flex-col px-8 py-10 font-body text-denim-300"
            >
              <Navbar />
              <TransitionPage>
                <div className="flex-grow py-16 sm:py-24">
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="*" element={<Error />} />
                  </Routes>
                </div>
              </TransitionPage>
              <Footer />
            </div>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
