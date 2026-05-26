"use client";
import { Play, Pause, Volume as VolumeIcon } from "lucide-react";
import { usePlayer } from "./PlayerContext";
import WaveformSimple from "./WaveformSimple";

export default function Player() {
  const { current, playing, toggle, progress, setVolume } = usePlayer();

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-8 md:right-8 bg-black/70 backdrop-blur-md rounded-2xl p-3 flex items-center gap-4">
      <button onClick={toggle} className="p-3 rounded-full bg-amber-400 text-black">
        {playing ? <Pause /> : <Play />}
      </button>
      <div className="flex-1">
        <div className="text-sm text-zinc-200">{current?.title || "No track"}</div>
        <div className="mt-2">
          <div className="h-2 bg-white/5 rounded">
            <div className="h-full bg-amber-400 rounded" style={{ width: `${progress}%` }} />
          </div>
          <div className="mt-2">
            <WaveformSimple src={current?.src} />
          </div>
        </div>
      </div>
      <div className="flex items-center gap-3 text-zinc-200">
        <VolumeIcon />
        <input
          aria-label="Volume"
          defaultValue={0.8}
          onChange={(e) => setVolume(Number(e.target.value))}
          className="w-24"
          type="range"
          min={0}
          max={1}
          step={0.01}
        />
      </div>
    </div>
  );
}
