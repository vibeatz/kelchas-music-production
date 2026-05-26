"use client";
import { useEffect, useRef } from "react";
import { usePlayer } from "./PlayerContext";

function computePeaks(buffer: AudioBuffer, samples = 200) {
  const channelData = buffer.getChannelData(0);
  const blockSize = Math.floor(channelData.length / samples);
  const peaks = [];
  for (let i = 0; i < samples; i++) {
    let start = i * blockSize;
    let end = start + blockSize;
    let max = 0;
    for (let j = start; j < end; j++) {
      const val = Math.abs(channelData[j]);
      if (val > max) max = val;
    }
    peaks.push(max);
  }
  return peaks;
}

export default function WaveformSimple({ src }: { src?: string }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { progress } = usePlayer();

  useEffect(() => {
    if (!src || !canvasRef.current) return;
    let cancelled = false;
    const ac = new (window.AudioContext || (window as any).webkitAudioContext)();
    fetch(src)
      .then((r) => r.arrayBuffer())
      .then((arrayBuffer) => ac.decodeAudioData(arrayBuffer))
      .then((audioBuffer) => {
        if (cancelled) return;
        const peaks = computePeaks(audioBuffer, 300);
        const canvas = canvasRef.current!;
        const ctx = canvas.getContext("2d")!;
        const dpr = window.devicePixelRatio || 1;
        const width = canvas.clientWidth * dpr;
        const height = canvas.clientHeight * dpr;
        canvas.width = width;
        canvas.height = height;
        ctx.clearRect(0, 0, width, height);

        // background
        ctx.fillStyle = "rgba(255,255,255,0.03)";
        ctx.fillRect(0, 0, width, height);

        // draw peaks
        const barWidth = width / peaks.length;
        for (let i = 0; i < peaks.length; i++) {
          const x = i * barWidth;
          const h = peaks[i] * height;
          const y = (height - h) / 2;
          // gradient
          const grad = ctx.createLinearGradient(0, y, 0, y + h);
          grad.addColorStop(0, "#f7d88b");
          grad.addColorStop(1, "#d4af37");
          ctx.fillStyle = grad;
          ctx.fillRect(x, y, Math.max(1, barWidth - 1), h);
        }
      })
      .catch(() => {});

    return () => {
      cancelled = true;
      try {
        ac.close();
      } catch {}
    };
  }, [src]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const width = canvas.width;
    const height = canvas.height;
    // overlay progress
    ctx.fillStyle = "rgba(0,0,0,0.25)";
    const progressWidth = Math.floor((progress / 100) * width);
    ctx.fillRect(0, 0, progressWidth, height);
  }, [progress]);

  return <canvas ref={canvasRef} className="w-full h-12 rounded" />;
}
