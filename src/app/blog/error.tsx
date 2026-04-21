"use client";	
	
export default function BlogError({	
  error,	
  reset,	
}: {	
  error: Error & { digest?: string };	
  reset: () => void;	
}) {	
  return (	
    <div className="panel mx-auto max-w-2xl py-10 text-center reveal">
      <h2 className="mb-4 text-2xl font-bold text-red-700">Đã xảy ra lỗi!</h2>
      <p className="mb-6 px-6 text-[color:var(--muted)]">
        {error.message || "Không thể tải nội dung blog. Vui lòng thử lại."}	
      </p>	
      <button	
        onClick={() => reset()}	
        className="rounded-xl bg-[color:var(--accent)] px-6 py-2 text-white transition-colors hover:bg-[color:var(--accent-strong)]"
      >	
        Thử lại	
      </button>	
    </div>	
  );	
}	