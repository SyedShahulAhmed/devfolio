import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

import LandingLayout from "../components/landing/LandingLayout";
import HudLeft from "../components/landing/HudLeft";
import HudRight from "../components/landing/HudRight";
import QuoteRotator from "../components/landing/QuoteRotator";
import TitleBlock from "../components/landing/TitleBlock";
import StartButton from "../components/landing/StartButton";
import Footer from "../components/landing/Footer";

const CYBERPUNK_QUOTES = [
  "THE FUTURE IS NOW",
  "WELCOME TO THE GRID",
  "SYSTEM INITIALIZED",
  "READY PLAYER ONE",
  "CORE SYSTEMS ONLINE",
  "BEGIN EXECUTION",
];

export const LandingPage = () => {
  const navigate = useNavigate();
  const [showContent, setShowContent] = useState(false);
  const [currentQuote, setCurrentQuote] = useState(0);
  const [isPressed, setIsPressed] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShowContent(true), 500);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!showContent) return;
    const i = setInterval(
      () => setCurrentQuote((p) => (p + 1) % CYBERPUNK_QUOTES.length),
      3000
    );
    return () => clearInterval(i);
  }, [showContent]);

  const handleStart = () => {
    setIsPressed(true);
    setTimeout(() => navigate("/boot"), 800);
  };

  return (
    <LandingLayout isPressed={isPressed}>
      <AnimatePresence>
        {showContent && (
          <>
            <HudLeft />
            <HudRight />
            <QuoteRotator
              quotes={CYBERPUNK_QUOTES}
              currentQuote={currentQuote}
            />
            <TitleBlock />
            <StartButton isPressed={isPressed} onClick={handleStart} />
            <Footer />
          </>
        )}
      </AnimatePresence>
    </LandingLayout>
  );
};
