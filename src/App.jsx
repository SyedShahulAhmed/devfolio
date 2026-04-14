import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Suspense, lazy, memo } from "react";
import { Analytics } from "@vercel/analytics/react"
import ScrollToTop from "./components/Other/ScrollToTop";
import GameNavbar from "./components/Other/GameNavbar";
import Loader from "./components/Other/Loader";
// import CustomCursor from "./components/Other/CustomCursor";

// NORMAL IMPORT (No Lazy Loading)
import {LandingPage} from "./pages/LandingPage";
import {BootingPage} from "./pages/BootingPage";

// Lazy Load Remaining Pages
const HomePage = lazy(() => import("./pages/HomePage"));
const About = lazy(() => import("./pages/About"));
const Skills = lazy(() => import("./pages/Skills"));
const Achievements = lazy(() => import("./pages/Achievements"));
const Contact = lazy(() => import("./pages/Contact"));
const Resume = lazy(() => import("./pages/Resume"));
const Projects = lazy(() => import("./pages/Projects"));
const Blogs = lazy(() => import("./pages/Blogs"));

const AppContent = memo(() => {
  const location = useLocation();

  // Hide navbar on specific pages
  const hideNavbar =
    location.pathname === "/" || location.pathname === "/boot";

  return (
    <>
      <ScrollToTop />
      {/* <CustomCursor /> */}

      {!hideNavbar && <GameNavbar />}

      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/boot" element={<BootingPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>
    </>
  );
});

AppContent.displayName = "AppContent";

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
      <Analytics />
    </BrowserRouter>
  );
}