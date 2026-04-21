import { guestbookEntries } from "@/data/guestbook";
import GuestbookForm from "@/components/guestbook-form";
import DeleteButton from "@/components/delete-button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
export default function GuestbookPage() {
 const entries = guestbookEntries;
 return (
 <div className="space-y-6">
 <section className="panel reveal p-6 md:p-8">
 <h1 className="section-title">Sổ lưu bút</h1>
 <p className="section-subtitle">Hãy để lại lời nhắn cho mình, mình rất vui khi nhận được phản hồi từ bạn.</p>
 </section>

 <section className="reveal reveal-delay-1">
 <GuestbookForm />
 </section>

 <Separator className="my-8" />
 <div className="space-y-4 reveal reveal-delay-2">
 <p className="text-sm text-[color:var(--muted)]">{entries.length} lời nhắn</p>
 {entries.map((entry) => (
 <Card key={entry.id} className="elevate">
  <CardContent className="pt-4">
 <div className="flex items-center justify-between mb-2">
 <span className="font-semibold text-[color:var(--text)]">
 {entry.name}
 </span>
 <div className="flex items-center gap-3">
 <span className="text-xs text-[color:var(--muted)]">
 {new Date(entry.createdAt).toLocaleDateString("vi-VN")}
 </span>
 <DeleteButton id={entry.id} />
 </div>
 </div>
 <p className="text-[color:var(--muted)]">{entry.message}</p>
 </CardContent>
 </Card>
 ))}
 {entries.length === 0 && (
 <p className="py-8 text-center text-[color:var(--muted)]">
 Chưa có lời nhắn nào. Hãy là người đầu tiên!
 </p>
 )}
 </div>
 </div>
 );
}