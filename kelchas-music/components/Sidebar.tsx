"use client";
import Link from "next/link";
import { Home, Upload, BarChart2 } from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="w-72 hidden lg:flex flex-col gap-4 p-4 bg-gradient-to-b from-black/60 to-black/40 rounded-lg">
      <nav className="flex flex-col gap-2">
        <Link href="/" className="flex items-center gap-3 p-2 rounded-md text-zinc-200 hover:bg-white/3">
          <Home /> <span>Home</span>
        </Link>
        <Link href="/dashboard" className="flex items-center gap-3 p-2 rounded-md text-zinc-200 hover:bg-white/3">
          <BarChart2 /> <span>Dashboard</span>
        </Link>
        <Link href="/dashboard/upload" className="flex items-center gap-3 p-2 rounded-md text-zinc-200 hover:bg-white/3">
          <Upload /> <span>Upload</span>
        </Link>
      </nav>
    </aside>
  );
}
