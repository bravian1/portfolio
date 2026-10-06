"use client";

import React, { createContext, useContext, useEffect, useState, useCallback } from "react";
import {
  play,
  bind,
  setEnabled as cuelumeSetEnabled,
  setVolume as cuelumeSetVolume,
  setTheme as cuelumeSetTheme,
  type SoundName,
  type ThemeName,
  type PlayOptions,
} from "cuelume";

export interface SoundContextType {
  enabled: boolean;
  theme: ThemeName;
  volume: number; // 0 to 1
  activeCue: string | null;
  toggleEnabled: () => void;
  setTheme: (theme: ThemeName) => void;
  setVolume: (volume: number) => void;
  playCue: (cue?: SoundName, options?: PlayOptions) => void;
}

const SoundContext = createContext<SoundContextType | null>(null);

const STORAGE_KEY_ENABLED = "portfolio-sound-enabled";
const STORAGE_KEY_THEME = "portfolio-sound-theme";
const STORAGE_KEY_VOLUME = "portfolio-sound-volume";

export function SoundProvider({ children }: { children?: React.ReactNode }) {
  const [enabled, setEnabledState] = useState<boolean>(true);
  const [theme, setThemeState] = useState<ThemeName>("press");
  const [volume, setVolumeState] = useState<number>(0.75);
  const [activeCue, setActiveCue] = useState<string | null>(null);

  useEffect(() => {
    let initialEnabled = true;
    let initialTheme: ThemeName = "press";
    let initialVolume = 0.75;

    try {
      const savedEnabled = localStorage.getItem(STORAGE_KEY_ENABLED);
      if (savedEnabled !== null) {
        initialEnabled = savedEnabled === "true";
      }

      const savedTheme = localStorage.getItem(STORAGE_KEY_THEME);
      if (savedTheme && ["press", "mech", "default", "bubble"].includes(savedTheme)) {
        initialTheme = savedTheme as ThemeName;
      }

      const savedVolume = localStorage.getItem(STORAGE_KEY_VOLUME);
      if (savedVolume !== null) {
        const parsed = parseFloat(savedVolume);
        if (!isNaN(parsed) && parsed >= 0 && parsed <= 1) {
          initialVolume = parsed;
        }
      }
    } catch {
      // Ignore localStorage read errors in restricted contexts
    }

    setEnabledState(initialEnabled);
    setThemeState(initialTheme);
    setVolumeState(initialVolume);

    cuelumeSetEnabled(initialEnabled);
    cuelumeSetTheme(initialTheme);
    cuelumeSetVolume(initialVolume);
    bind();
  }, []);

  const toggleEnabled = useCallback(() => {
    setEnabledState((prev) => {
      const next = !prev;
      cuelumeSetEnabled(next);
      try {
        localStorage.setItem(STORAGE_KEY_ENABLED, String(next));
      } catch {}
      if (next) {
        play("ready", { emphasis: "subtle" });
      }
      return next;
    });
  }, []);

  const handleSetTheme = useCallback((newTheme: ThemeName) => {
    setThemeState(newTheme);
    cuelumeSetTheme(newTheme);
    try {
      localStorage.setItem(STORAGE_KEY_THEME, newTheme);
    } catch {}
    // Live audition feedback on theme switch
    play("select", { theme: newTheme, emphasis: "normal" });
    setActiveCue("select");
    setTimeout(() => setActiveCue(null), 300);
  }, []);

  const handleSetVolume = useCallback((newVolume: number) => {
    const clamped = Math.max(0, Math.min(1, newVolume));
    setVolumeState(clamped);
    cuelumeSetVolume(clamped);
    try {
      localStorage.setItem(STORAGE_KEY_VOLUME, String(clamped));
    } catch {}
  }, []);

  const playCue = useCallback((cue: SoundName = "tap", options?: PlayOptions) => {
    play(cue, options);
    setActiveCue(cue);
    setTimeout(() => setActiveCue(null), 350);
  }, []);

  return (
    <SoundContext.Provider
      value={{
        enabled,
        theme,
        volume,
        activeCue,
        toggleEnabled,
        setTheme: handleSetTheme,
        setVolume: handleSetVolume,
        playCue,
      }}
    >
      {children}
    </SoundContext.Provider>
  );
}

export function useSound() {
  const context = useContext(SoundContext);
  if (!context) {
    throw new Error("useSound must be used within a SoundProvider");
  }
  return context;
}
