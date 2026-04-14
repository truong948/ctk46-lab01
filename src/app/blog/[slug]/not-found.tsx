import Link from "next/link";	
	
export default function NotFound() {
  return (	
    <section className="py-12 text-center">
      <h2 className="mb-4 text-2xl font-bold">Bài viết không tồn tại</h2>
      <p className="mb-6 text-gray-600">
        Bài viết bạn đang tìm kiếm không có trong hệ thống.
      </p>
      <Link
        href="/blog"
        className="inline-block rounded-lg bg-blue-600 px-6 py-2 text-white transition-colors hover:bg-blue-700"
      >
        Quay lại Blog
      </Link>
    </section>
  );	
}	