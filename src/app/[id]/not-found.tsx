import Link from "next/link";
export default function BlogNotFound() {
 return (
 <div className="panel mx-auto max-w-2xl py-14 text-center reveal">
 <h2 className="text-2xl font-bold mb-4">Bài viết không tồn tại</h2>
 <p className="mb-6 text-[color:var(--muted)]">
 Bài viết bạn tìm kiếm không tồn tại hoặc đã bị xóa.
 </p>
 <Link href="/blog" className="font-semibold text-[color:var(--accent-strong)] hover:underline">
 ← Quay lại danh sách bài viết
 </Link>
 </div>
 );
}