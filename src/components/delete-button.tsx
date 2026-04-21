"use client";
import { deleteGuestbookEntry } from "@/app/guestbook/actions";
export default function DeleteButton({ id }: { id: string }) {
 async function handleDelete() {
 if (!confirm("Bạn có chắc muốn xóa lời nhắn này?")) return;
 await deleteGuestbookEntry(id);
 }
 return (
 <button
 onClick={handleDelete}
 className="rounded-full border border-red-200 px-2.5 py-1 text-xs font-semibold text-red-500 transition-colors hover:bg-red-50 hover:text-red-700"
 >
 Xóa
 </button>
 );
}