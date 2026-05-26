"use client";
import Hero from "../components/Hero";

export default function Home() {
  const tracks = [
    { id: 1, title: "Midnight Drive", producer: "Kelchas", genre: "Lo-Fi", price: "4.99", cover: "/file.svg", src: "/" },
    { id: 2, title: "Golden Hour", producer: "Vibeatz", genre: "Ambient", price: "5.99", cover: "/file.svg", src: "/" },
    { id: 3, title: "Neon Streets", producer: "Kelchas & Co", genre: "Synthwave", price: "6.49", cover: "/file.svg", src: "/" },
  ];

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto">
        <Hero tracks={tracks} />
      </div>
    </div>
  );
}
