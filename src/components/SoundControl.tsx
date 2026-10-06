"use client";

import React, { useState } from "react";
import { Volume2, VolumeX, Sparkles, Check, ExternalLink } from "lucide-react";
import { useSound } from "@/context/SoundContext";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Slider } from "@/components/ui/slider";
import { motion, AnimatePresence } from "framer-motion";
import type { ThemeName, SoundName } from "cuelume";

interface ThemeOption {
  id: ThemeName;
  name: string;
  tag: string;
  desc: string;
  accent: string;
}

const THEMES: ThemeOption[] = [
  {
    id: "press",
    name: "Press",
    tag: "Tactile",
    desc: "Crisp trackpad click & tactile switch",
    accent: "bg-blue-500/10 text-blue-500 border-blue-500/30",
  },
  {
    id: "mech",
    name: "Mech",
    tag: "Mechanical",
    desc: "Dry mechanical switch & latch",
    accent: "bg-amber-500/10 text-amber-500 border-amber-500/30",
  },
  {
    id: "default",
    name: "Default",
    tag: "Glass & Air",
    desc: "Warm glass, soft mallet & air",
    accent: "bg-teal-500/10 text-teal-500 border-teal-500/30",
  },
  {
    id: "bubble",
    name: "Bubble",
    tag: "Playful",
    desc: "Pops, drips, corks & kalimba",
    accent: "bg-pink-500/10 text-pink-500 border-pink-500/30",
  },
];

const AUDITION_CUES: { id: SoundName; label: string; desc: string }[] = [
  { id: "tap", label: "Tap", desc: "Buttons & cards" },
  { id: "select", label: "Select", desc: "Choices & tabs" },
  { id: "open", label: "Open", desc: "Drawers & modals" },
  { id: "toggle", label: "Toggle", desc: "Switches & state" },
  { id: "success", label: "Success", desc: "Completed action" },
  { id: "ready", label: "Ready", desc: "Finished cue" },
];

export default function SoundControl() {
  const { enabled, theme, volume, activeCue, toggleEnabled, setTheme, setVolume, playCue } = useSound();
  const [open, setOpen] = useState(false);
  const [testingCue, setTestingCue] = useState<string | null>(null);

  const currentTheme = THEMES.find((t) => t.id === theme) || THEMES[0];

  const handleAudition = (cue: SoundName) => {
    playCue(cue);
    setTestingCue(cue);
    setTimeout(() => setTestingCue(null), 300);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <button
          type="button"
          data-cuelume-toggle=""
          aria-label="Sound settings and material theme options"
          className="group relative flex items-center gap-2 px-2.5 py-1.5 rounded-full border border-foreground/10 bg-foreground/[0.03] hover:bg-foreground/[0.08] active:scale-95 transition-all outline-none"
        >
          {enabled ? (
            <div className="relative flex items-center justify-center">
              <Volume2 className="w-3.5 h-3.5 text-foreground/80 group-hover:text-foreground transition-colors" />
              {activeCue && (
                <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
              )}
            </div>
          ) : (
            <VolumeX className="w-3.5 h-3.5 text-foreground/40 group-hover:text-foreground/60 transition-colors" />
          )}

          <span className="text-[11px] font-bold uppercase tracking-wider text-foreground/70 group-hover:text-foreground hidden sm:inline-block">
            {enabled ? currentTheme.name : "Muted"}
          </span>

          <span
            className={`w-1.5 h-1.5 rounded-full transition-colors ${
              enabled ? "bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" : "bg-foreground/20"
            }`}
          />
        </button>
      </PopoverTrigger>

      <PopoverContent
        align="end"
        sideOffset={10}
        className="w-[calc(100vw-2rem)] sm:w-[360px] p-0 rounded-2xl border border-foreground/15 bg-background/95 backdrop-blur-2xl shadow-2xl overflow-hidden text-foreground z-50"
      >
        {/* Header */}
        <div className="p-4 border-b border-foreground/10 flex items-center justify-between bg-foreground/[0.02]">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <h4 className="text-xs font-bold uppercase tracking-widest text-foreground">
              Audio Synthesis
            </h4>
            <span className="text-[10px] font-medium text-foreground/40 tracking-normal px-1.5 py-0.5 rounded bg-foreground/5">
              Live
            </span>
          </div>

          <button
            type="button"
            onClick={toggleEnabled}
            data-cuelume-toggle=""
            className={`text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border transition-all ${
              enabled
                ? "bg-foreground text-background border-foreground hover:bg-foreground/90"
                : "bg-foreground/5 text-foreground/60 border-foreground/10 hover:bg-foreground/10"
            }`}
          >
            {enabled ? "Enabled" : "Muted"}
          </button>
        </div>

        <div className="p-4 space-y-5 max-h-[75vh] overflow-y-auto">
          {/* Material Switcher */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold uppercase tracking-wider text-foreground/50">
                Material Theme
              </span>
              <span className="text-[10px] text-foreground/40 font-mono">
                {currentTheme.tag}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2">
              {THEMES.map((item) => {
                const isSelected = theme === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setTheme(item.id)}
                    className={`relative p-2.5 rounded-xl border text-left transition-all group ${
                      isSelected
                        ? "border-foreground bg-foreground/[0.05] shadow-xs"
                        : "border-foreground/10 bg-foreground/[0.02] hover:border-foreground/20 hover:bg-foreground/[0.04]"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-bold text-foreground">
                        {item.name}
                      </span>
                      {isSelected ? (
                        <Check className="w-3.5 h-3.5 text-foreground" />
                      ) : (
                        <span className="text-[9px] uppercase font-semibold text-foreground/40">
                          {item.tag}
                        </span>
                      )}
                    </div>
                    <p className="text-[10px] text-foreground/50 leading-snug line-clamp-1">
                      {item.desc}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Volume Control */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold uppercase tracking-wider text-foreground/50">
                Loudness
              </span>
              <span className="text-xs font-mono font-bold text-foreground">
                {Math.round(volume * 100)}%
              </span>
            </div>

            <div className="pt-1 pb-1">
              <Slider
                value={[Math.round(volume * 100)]}
                max={100}
                min={0}
                step={5}
                onValueChange={(val) => {
                  const newVol = val[0] / 100;
                  setVolume(newVol);
                }}
                className="w-full cursor-pointer"
              />
            </div>

            {/* Quick volume presets */}
            <div className="flex gap-1.5 pt-1">
              {[
                { label: "Quiet", value: 0.35 },
                { label: "Normal", value: 0.75 },
                { label: "Full", value: 1.0 },
              ].map((preset) => (
                <button
                  key={preset.label}
                  type="button"
                  onClick={() => {
                    setVolume(preset.value);
                    playCue("select", { volume: preset.value });
                  }}
                  className={`flex-1 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider border transition-all ${
                    Math.abs(volume - preset.value) < 0.08
                      ? "bg-foreground/10 border-foreground/30 text-foreground"
                      : "bg-foreground/[0.02] border-foreground/5 text-foreground/50 hover:bg-foreground/[0.05]"
                  }`}
                >
                  {preset.label}
                </button>
              ))}
            </div>
          </div>

          {/* Interactive Soundboard / Audition Lab */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold uppercase tracking-wider text-foreground/50">
                Audition Cues
              </span>
              <span className="text-[10px] text-foreground/40">
                Click to preview
              </span>
            </div>

            <div className="grid grid-cols-3 gap-1.5">
              {AUDITION_CUES.map((cue) => {
                const isPlaying = testingCue === cue.id;
                return (
                  <button
                    key={cue.id}
                    type="button"
                    onClick={() => handleAudition(cue.id)}
                    className={`p-2 rounded-xl border text-center transition-all ${
                      isPlaying
                        ? "border-emerald-500 bg-emerald-500/10 text-emerald-600 scale-[0.98]"
                        : "border-foreground/10 bg-foreground/[0.02] hover:bg-foreground/[0.06] text-foreground active:scale-95"
                    }`}
                  >
                    <div className="text-xs font-bold leading-none mb-1">
                      {cue.label}
                    </div>
                    <div className="text-[9px] text-foreground/40 leading-tight">
                      {cue.desc}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Footer info */}
        <div className="p-3 bg-foreground/[0.02] border-t border-foreground/10 flex items-center justify-between text-[10px] text-foreground/50">
          <div className="flex items-center gap-1.5">
            <Sparkles className="w-3 h-3 text-foreground/40" />
            <span>Zero audio files • 6.4 kB</span>
          </div>

          <a
            href="https://cuelume.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 font-semibold text-foreground/70 hover:text-foreground transition-colors"
          >
            cuelume.dev
            <ExternalLink className="w-2.5 h-2.5" />
          </a>
        </div>
      </PopoverContent>
    </Popover>
  );
}
