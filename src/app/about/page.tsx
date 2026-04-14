export default function AboutPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Gioi thieu</h1>

      <div className="space-y-4 text-gray-700">
        <p>
          Xin chao! Toi la <strong>Nguyen Van A</strong>, sinh vien nam 4 nganh
          Cong nghe Thong tin tai Dai hoc Da Lat.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Ky nang</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>JavaScript / TypeScript</li>
          <li>React and Next.js</li>
          <li>Tailwind CSS</li>
          <li>Git and GitHub</li>
          <li>SQL and PostgreSQL</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Hoc van</h2>
        <div className="bg-gray-50 rounded-lg p-4">
          <p className="font-medium">Dai hoc Da Lat</p>
          <p className="text-gray-500">Cu nhan Cong nghe Thong tin (2021-2025)</p>
        </div>
      </div>
    </div>
  );
}