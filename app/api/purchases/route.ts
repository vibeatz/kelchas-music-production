import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

const DATA_FILE = path.join(process.cwd(), "data", "purchases.json");

async function readPurchases() {
  try {
    const raw = await fs.readFile(DATA_FILE, "utf8");
    return JSON.parse(raw || "[]");
  } catch (e) {
    return [];
  }
}

async function writePurchases(list: any[]) {
  await fs.writeFile(DATA_FILE, JSON.stringify(list, null, 2), "utf8");
}

export async function GET() {
  const list = await readPurchases();
  return NextResponse.json(list);
}

export async function POST(req: Request) {
  const body = await req.json();
  const { trackId, price } = body;
  if (!trackId) return NextResponse.json({ error: "trackId required" }, { status: 400 });
  const list = await readPurchases();
  const record = { id: Date.now(), trackId, price, createdAt: new Date().toISOString() };
  list.push(record);
  await writePurchases(list);
  return NextResponse.json({ success: true, purchase: record });
}
