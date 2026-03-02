import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/Other/ScrollToTop";
import { LandingPage } from "./pages/LandingPage";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Stats from "./pages/Stats";
import Achievements from "./pages/Achievements";
import { BootingPage } from "./pages/BootingPage";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import Projects from "./pages/Projects";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />   {/* 👈 ADD HERE */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/boot" element={<BootingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/stats" element={<Stats />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}