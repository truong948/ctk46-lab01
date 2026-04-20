import { NextRequest, NextResponse } from "next/server";
import { guestbookEntries } from "@/data/guestbook";
import { z } from "zod";

const guestbookApiSchema = z.object({
 name: z.string().trim().min(2).max(100),
 message: z.string().trim().min(3).max(500),
});

// GET /api/guestbook — Lấy danh sách tất cả lời nhắn
export async function GET() {
 return NextResponse.json(guestbookEntries);
}

// POST /api/guestbook — Thêm lời nhắn mới
export async function POST(request: NextRequest) {
 const body = await request.json().catch(() => null);
 const parsed = guestbookApiSchema.safeParse(body);

 if (!parsed.success) {
 return NextResponse.json(
 { error: "Dữ liệu không hợp lệ" },
 { status: 400 }
 );
 }

 const newEntry = {
 id: crypto.randomUUID(),
 name: parsed.data.name,
 message: parsed.data.message,
 createdAt: new Date().toISOString(),
 };

 guestbookEntries.unshift(newEntry);
 return NextResponse.json(newEntry, { status: 201 });
}