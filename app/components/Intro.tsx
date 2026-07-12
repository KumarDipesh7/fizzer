"use client";

import {
  Trophy,
  Users,
  Smartphone,
  Gamepad2,
} from "lucide-react";

const stats = [
  {
    icon: Trophy,
    text: "Led Recording Team — KRAFTON Tap-A-Tips S3 (5.77M+ views)",
  },
  {
    icon: Users,
    text: "100K+ YouTube Subscribers",
  },
  {
    icon: Smartphone,
    text: "41K+ Instagram Community",
  },
  {
    icon: Gamepad2,
    text: "500+ Players & Creators Guided",
  },
];

export default function Intro() {
  return (
    <section className="bg-[#ef0d1b] text-white">
      <div className="mx-auto max-w-7xl px-6 py-6">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="flex items-center justify-center gap-3 text-center md:text-left"
              >
                <Icon size={18} className="shrink-0" />

                <p className="font-mono text-sm font-medium leading-relaxed">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}