"use client";

import { SoundProvider as Provider } from "@/context/SoundContext";

export default function SoundProvider({ children }: { children?: React.ReactNode }) {
  return <Provider>{children}</Provider>;
}
