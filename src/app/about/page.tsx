export default function AboutPage() {
  return (
    <div className="space-y-6">
      <section className="panel reveal p-6 md:p-8">
        <h1 className="section-title">Giới thiệu</h1>
        <p className="section-subtitle">
          Mình là Nguyễn Văn Trường, sinh viên năm cuối ngành Công nghệ Thông tin tại Đại học Đà Lạt.
          Mình thích xây dựng sản phẩm web có giao diện đẹp, mã nguồn rõ ràng và dễ mở rộng.
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        <article className="panel elevate reveal reveal-delay-1 p-6">
          <h2 className="text-2xl font-semibold">Kỹ năng</h2>
          <ul className="mt-4 space-y-2 text-sm text-[color:var(--muted)]">
            <li>JavaScript / TypeScript</li>
            <li>React / Next.js</li>
            <li>Tailwind CSS</li>
            <li>Git / GitHub</li>
            <li>SQL / PostgreSQL</li>
          </ul>
        </article>

        <article className="panel elevate reveal reveal-delay-2 p-6">
          <h2 className="text-2xl font-semibold">Học vấn</h2>
          <div className="mt-4 rounded-xl border border-[color:var(--border)] bg-white/80 p-4">
            <p className="font-semibold">Đại học Đà Lạt</p>
            <p className="mt-1 text-sm text-[color:var(--muted)]">Cử nhân Công nghệ Thông tin (2021 - 2025)</p>
            <p className="mt-2 text-sm text-[color:var(--muted)]">
              Hướng quan tâm: phát triển web full-stack, tối ưu trải nghiệm người dùng và khả năng bảo trì hệ thống.
            </p>
          </div>
        </article>
      </section>

      <section className="panel reveal reveal-delay-3 p-6 md:p-8">
        <h2 className="text-2xl font-semibold">Mục tiêu 2026</h2>
        <p className="mt-3 text-[color:var(--muted)]">
          Hoàn thiện kỹ năng frontend nâng cao, xây dựng thêm dự án có dữ liệu thật và luyện tập quy trình triển khai như một team chuyên nghiệp.
        </p>
      </section>
    </div>
  );
}
