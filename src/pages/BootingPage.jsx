import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import BootLayout from "../components/boot/BootLayout";
import BootWindow from "../components/boot/BootWindow";
import BootHeader from "../components/boot/BootHeader";
import BootTerminal from "../components/boot/BootTerminal";
import BootProgress from "../components/boot/BootProgress";

const BOOT_LINES = [
  "Initializing core system kernel...",
  "Loading portfolio modules...",
  "Establishing secure connection...",
  "Decrypting user profile...",
  "Syncing project repositories...",
  "Launching interactive interface...",
  "Finalizing boot sequence...",
  "System ready. Welcome, developer. 😊",
];

export const BootingPage = () => {
  const navigate = useNavigate();
  const [lineIndex, setLineIndex] = useState(0);

  useEffect(() => {
    const textTimer = setInterval(() => {
      setLineIndex((i) => {
        if (i >= BOOT_LINES.length - 1) {
          clearInterval(textTimer);

          setTimeout(() => {
            navigate("/home", { replace: true });
          }, 1200);

          return i;
        }

        return i + 1;
      });
    }, 650);

    return () => clearInterval(textTimer);
  }, [navigate]);

  return (
    <BootLayout>
      <BootWindow>
        <BootHeader />

        <BootTerminal
          lines={BOOT_LINES}
          currentIndex={lineIndex}
        />

        <BootProgress
          currentIndex={lineIndex}
          totalLines={BOOT_LINES.length}
        />
      </BootWindow>
    </BootLayout>
  );
};