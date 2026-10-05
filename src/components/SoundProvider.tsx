"use client";

import { useEffect } from "react";
import { bind, setEnabled } from "cuelume";

export default function SoundProvider() {
  useEffect(() => {
    const saved = localStorage.getItem("portfolio-sound-enabled");
    if (saved !== null) {
      setEnabled(saved === "true");
    }
    bind();
  }, []);

  return null;
}
