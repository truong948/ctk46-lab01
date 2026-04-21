import Link from "next/link";	

const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Node.js",
  "Git",
  "SQL"
];

const highlights = [
  {
    title: "Thực chiến dự án",
    description: "Xây dựng các sản phẩm học tập theo hướng gần với môi trường làm việc thật."
  },
  {
    title: "Tư duy sản phẩm",
    description: "Tập trung vào trải nghiệm người dùng, tính ổn định và khả năng mở rộng."
  },
  {
    title: "Ham học hỏi",
    description: "Liên tục cập nhật công nghệ frontend và backend hiện đại để phát triển tốt hơn."
  }
];

export default function HomePage() {
  return (
    <div className="space-y-8 md:space-y-10">
      <section className="panel surface-grid reveal overflow-hidden px-6 py-10 md:px-10 md:py-14">
        <p className="inline-flex rounded-full bg-[color:rgba(31,138,112,0.12)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[color:var(--accent-strong)]">
          Portfolio cá nhân
        </p>
        <h1 className="section-title mt-4 max-w-3xl">
          Xin chào, mình là Nguyễn Văn Trường. Mình xây dựng web gọn gàng, mượt và có cá tính.
        </h1>
        <p className="section-subtitle">
          Sinh viên Công nghệ Thông tin tại Đại học Đà Lạt, tập trung vào trải nghiệm web hiện đại với Next.js,
          TypeScript và UI có chiều sâu.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/projects"
            className="rounded-xl bg-[color:var(--accent)] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[color:var(--accent-strong)]"
          >
            Xem dự án
          </Link>
          <Link
            href="/contact"
            className="rounded-xl border border-[color:var(--border)] bg-white/80 px-5 py-2.5 text-sm font-semibold text-[color:var(--text)] transition-colors hover:bg-[color:var(--surface-soft)]"
          >
            Liên hệ
          </Link>
          <Link
            href="/blog"
            className="rounded-xl border border-transparent px-5 py-2.5 text-sm font-semibold text-[color:var(--accent-strong)] transition-colors hover:bg-[color:rgba(31,138,112,0.1)]"
          >
            Đọc blog
          </Link>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {highlights.map((item, index) => (
          <article
            key={item.title}
            className={`panel elevate reveal p-5 ${index === 1 ? "reveal-delay-1" : ""} ${index === 2 ? "reveal-delay-2" : ""}`}
          >
            <h2 className="text-xl font-semibold">{item.title}</h2>
            <p className="mt-2 text-sm text-[color:var(--muted)]">{item.description}</p>
          </article>
        ))}
      </section>

      <section className="panel reveal reveal-delay-1 p-6 md:p-8">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <h2 className="text-2xl font-semibold">Kỹ năng chính</h2>
            <p className="mt-1 text-sm text-[color:var(--muted)]">Những công nghệ mình dùng nhiều trong các bài lab và dự án cá nhân.</p>
          </div>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-3 md:grid-cols-4">
          {skills.map((skill) => (
            <div
              key={skill}
              className="elevate rounded-xl border border-[color:var(--border)] bg-[color:rgba(255,255,255,0.75)] px-4 py-3 text-center text-sm font-semibold"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}