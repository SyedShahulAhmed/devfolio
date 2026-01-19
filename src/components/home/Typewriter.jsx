import { useEffect, useState } from "react";

const Typewriter = ({ text, speed = 40, delay = 500 }) => {
  const [out, setOut] = useState("");

  useEffect(() => {
    setOut("");

    const startTimer = setTimeout(() => {
      let i = 0;

      const typingTimer = setInterval(() => {
        setOut(text.slice(0, i + 1));
        i++;

        if (i >= text.length) {
          clearInterval(typingTimer);
        }
      }, speed);
    }, delay);

    return () => {
      clearTimeout(startTimer);
    };
  }, [text, speed, delay]);

  return <>{out}</>;
};

export default Typewriter;
