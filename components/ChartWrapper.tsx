"use client";
import dynamic from "next/dynamic";

const SalesChart = dynamic(() => import("./SalesChart"), { ssr: false });

export default function ChartWrapper() {
  return <SalesChart />;
}
