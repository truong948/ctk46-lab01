import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-[color:var(--border)] bg-[color:rgba(255,255,255,0.72)]">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 py-7 text-sm text-[color:var(--muted)] md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-semibold text-[color:var(--text)]">Nguyễn Văn Trường</p>
          <p>CTK46 • Các công nghệ mới trong PTPM</p>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <Link href="/about" className="transition-colors hover:text-[color:var(--accent-strong)]">
            Giới thiệu
          </Link>
          <Link href="/projects" className="transition-colors hover:text-[color:var(--accent-strong)]">
            Dự án
          </Link>
          <Link href="/contact" className="transition-colors hover:text-[color:var(--accent-strong)]">
            Liên hệ
          </Link>
        </div>

        <p className="text-xs">© 2026 • Portfolio học tập</p>
      </div>
    </footer>
  );
}
