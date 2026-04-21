import Link from "next/link";	
	
export default function NotFound() {
  return (	
    <section className="panel mx-auto max-w-2xl py-12 text-center reveal">
      <h2 className="mb-4 text-2xl font-bold">Bài viết không tồn tại</h2>
      <p className="mb-6 text-[color:var(--muted)]">
        Bài viết bạn đang tìm kiếm không có trong hệ thống.
      </p>
      <Link
        href="/blog"
        className="inline-block rounded-xl bg-[color:var(--accent)] px-6 py-2 text-white transition-colors hover:bg-[color:var(--accent-strong)]"
      >
        Quay lại Blog
      </Link>
    </section>
  );	
}	