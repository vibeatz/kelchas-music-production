"use client";
import Link from "next/link";
import { LogOut, Search, User } from "lucide-react";

export default function Header() {
  return (
    <header className="w-full flex items-center justify-between py-4 px-6 bg-gradient-to-r from-black/60 via-zinc-900 to-black/80">
      <div className="flex items-center gap-4">
        <Link href="/" className="text-2xl font-bold text-amber-400">
          Kelchas Music
        </Link>
      </div>
      <div className="flex items-center gap-3">
        <div className="hidden sm:flex items-center gap-2 bg-white/6 rounded-full px-3 py-1">
          <Search className="w-4 h-4 text-zinc-300" />
          <input aria-label="Search tracks and artists" className="bg-transparent outline-none text-zinc-200 placeholder-zinc-400" placeholder="Search tracks, artists" />
        </div>
        <button aria-label="Open account" className="p-2 rounded-full bg-white/3">
          <User className="w-5 h-5 text-zinc-200" />
        </button>
        <button aria-label="Sign out" className="p-2 rounded-full bg-white/3">
          <LogOut className="w-5 h-5 text-zinc-200" />
        </button>
      </div>
    </header>
  );
}
