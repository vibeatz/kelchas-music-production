"use client";
import { useEffect, useRef } from "react";
import WaveSurfer from "wavesurfer.js";

export default function Waveform({ src }: { src?: string }) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const wsRef = useRef<any>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    wsRef.current = WaveSurfer.create({
      container: containerRef.current,
      waveColor: "#444",
      progressColor: "#d4af37",
      cursorColor: "#d4af37",
      barWidth: 2,
      height: 60,
    });

    return () => {
      wsRef.current?.destroy();
    };
  }, []);

  useEffect(() => {
    if (!wsRef.current) return;
    if (src) {
      wsRef.current.load(src);
    } else {
      wsRef.current.empty();
    }
  }, [src]);

  return <div ref={containerRef} className="w-full" />;
}
