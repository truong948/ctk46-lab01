import Link from "next/link";

export default function HomePage() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-12 space-y-6">
      <h1 className="text-4xl font-bold">Trang chu Portfolio</h1>
      <p className="text-gray-700 leading-relaxed">
        Day la du an Next.js su dung App Router. Ban co the dieu huong den cac
        trang gioi thieu, blog, du an va lien he tu thanh menu.
      </p>
      <div className="flex flex-wrap gap-3">
        <Link
          href="/about"
          className="rounded-md bg-blue-600 text-white px-4 py-2 hover:bg-blue-700"
        >
          Xem gioi thieu
        </Link>
        <Link
          href="/projects"
          className="rounded-md border border-slate-300 px-4 py-2 hover:bg-white"
        >
          Xem du an
        </Link>
      </div>
    </section>
  );
}