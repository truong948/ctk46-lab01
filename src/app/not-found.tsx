import Link from "next/link";	
	
export default function NotFound() {	
  return (	
    <div className="panel mx-auto max-w-2xl px-4 py-16 text-center reveal">
      <h1 className="mb-4 text-6xl font-bold text-[color:rgba(31,42,49,0.22)]">404</h1>
      <h2 className="mb-4 text-2xl font-bold">Trang không tồn tại</h2>
      <p className="mb-8 text-[color:var(--muted)]">	
        Xin lỗi, trang bạn đang tìm kiếm không có trên website này.	
      </p>	
      <Link	
        href="/"	
        className="inline-block rounded-xl bg-[color:var(--accent)] px-6 py-2 text-white transition-colors hover:bg-[color:var(--accent-strong)]"
      >	
        Về trang chủ	
      </Link>	
    </div>	
  );	
}	