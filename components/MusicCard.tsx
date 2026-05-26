"use client";
import Image from "next/image";
import { Heart, Play, ShoppingCart } from "lucide-react";
import { usePlayer } from "./PlayerContext";
import { useEffect, useState } from "react";

export default function MusicCard({ track }: { track: any }) {
  const player = usePlayer();
  const [fav, setFav] = useState(false);

  useEffect(() => {
    let mounted = true;
    // fetch favorites from API (demo)
    fetch("/api/favorites")
      .then((r) => r.json())
      .then((favs) => {
        if (!mounted) return;
        setFav(Array.isArray(favs) && favs.includes(track.id));
      })
      .catch(() => {
        try {
          const favs = JSON.parse(localStorage.getItem("kelchas:favs") || "[]");
          setFav(favs.includes(track.id));
        } catch {
          setFav(false);
        }
      });
    return () => {
      mounted = false;
    };
  }, [track.id]);

  return (
    <div className="glass-card p-4 rounded-2xl text-zinc-100 shadow-lg">
      <div className="relative w-full h-44 rounded-lg overflow-hidden">
        <Image src={track.cover} alt={track.title} fill sizes="(max-width: 768px) 100vw" className="object-cover" />
      </div>
      <div className="mt-3">
        <h3 className="text-lg font-semibold">{track.title}</h3>
        <p className="text-sm text-zinc-400">{track.producer} • {track.genre}</p>
        <div className="mt-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <a href="/checkout" className="flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400 text-black">Buy ${track.price}</a>
            <button aria-label={`Play ${track.title}`} onClick={() => player.play({ src: track.src, title: track.title })} className="p-2 rounded-full bg-white/5"><Play className="w-4 h-4 text-zinc-100" /></button>
          </div>
          <div className="flex items-center gap-2">
            <button aria-pressed={fav} onClick={async () => {
              try {
                const res = await fetch('/api/favorites', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ id: track.id }) });
                const data = await res.json();
                if (data?.favorites) {
                  localStorage.setItem("kelchas:favs", JSON.stringify(data.favorites));
                  setFav(data.favorites.includes(track.id));
                }
              } catch {
                // fallback to local
                try {
                  const favs = JSON.parse(localStorage.getItem("kelchas:favs") || "[]");
                  if (favs.includes(track.id)) {
                    const next = favs.filter((x: any) => x !== track.id);
                    localStorage.setItem("kelchas:favs", JSON.stringify(next));
                    setFav(false);
                  } else {
                    favs.push(track.id);
                    localStorage.setItem("kelchas:favs", JSON.stringify(favs));
                    setFav(true);
                  }
                } catch {}
              }
            }} className="p-2 rounded-full bg-white/5">{fav ? <Heart className="w-4 h-4 text-amber-400" /> : <Heart className="w-4 h-4 text-zinc-100" />}</button>
            <button className="p-2 rounded-full bg-white/5"><a href="/checkout"><ShoppingCart className="w-4 h-4 text-zinc-100" /></a></button>
          </div>
        </div>
      </div>
    </div>
  );
}
