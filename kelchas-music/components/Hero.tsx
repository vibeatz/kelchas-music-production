"use client";
import Image from "next/image";
import MusicCard from "./MusicCard";
import { motion } from "framer-motion";
const AnyMotion: any = motion;

export default function Hero({ tracks }: { tracks: any[] }) {
  return (
    <section className="w-full px-6 py-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-3xl font-bold text-zinc-100">Trending Music</h2>
          <p className="text-zinc-400">Top beats and producers right now</p>
        </div>
      </div>

      <div className="flex gap-4 overflow-x-auto py-2 scroll-smooth snap-x snap-mandatory">
        {tracks.map((t) => (
          <AnyMotion.div key={t.id} whileHover={{ scale: 1.02 }} className="min-w-[260px] snap-start">
            <MusicCard track={t} />
          </AnyMotion.div>
        ))}
      </div>
    </section>
  );
}
