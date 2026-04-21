export default function ContactPage() {
  return (
    <div className="space-y-6">
      <section className="panel reveal p-6 md:p-8">
        <h1 className="section-title">Liên hệ</h1>
        <p className="section-subtitle">
          Mình luôn sẵn sàng trao đổi về dự án học tập, cơ hội thực tập và các ý tưởng sản phẩm mới.
        </p>
      </section>

      <section className="panel reveal reveal-delay-1 p-6 md:p-8">
        <div className="space-y-4 text-[color:var(--text)]">
          <p>
            <strong>Email:</strong>{" "}
            <a
              href="mailto:2212483@dlu.edu.vn"
              className="font-semibold text-[color:var(--accent-strong)] hover:underline"
            >
              2212483@dlu.edu.vn
            </a>
          </p>
          <p>
            <strong>GitHub:</strong>{" "}
            <a
              href="https://github.com/truong948"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-[color:var(--accent-strong)] hover:underline"
            >
              github.com/truong948
            </a>
          </p>
          <p>
            <strong>Địa chỉ:</strong> Đại học Đà Lạt, 01 Phù Đổng Thiên Vương,
            Đà Lạt
          </p>
        </div>
      </section>
    </div>
  );
}