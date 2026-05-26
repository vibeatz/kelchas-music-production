import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

const DATA_FILE = path.join(process.cwd(), "data", "favorites.json");

async function readFavorites() {
  try {
    const raw = await fs.readFile(DATA_FILE, "utf8");
    return JSON.parse(raw || "[]");
  } catch (e) {
    return [];
  }
}

async function writeFavorites(list: any[]) {
  await fs.writeFile(DATA_FILE, JSON.stringify(list, null, 2), "utf8");
}

export async function GET() {
  const list = await readFavorites();
  return NextResponse.json(list);
}

export async function POST(req: Request) {
  const body = await req.json();
  const { id } = body;
  if (typeof id === "undefined") return NextResponse.json({ error: "id required" }, { status: 400 });
  const list = await readFavorites();
  const exists = list.includes(id);
  const next = exists ? list.filter((x: any) => x !== id) : [...list, id];
  await writeFavorites(next);
  return NextResponse.json({ success: true, favorites: next });
}
