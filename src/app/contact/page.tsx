export default function ContactPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Lien he</h1>

      <div className="space-y-4 text-gray-700">
        <div className="bg-gray-50 rounded-lg p-6 space-y-3">
          <p>
            <strong>Email:</strong>{" "}
            <a
              href="mailto:nguyenvana@sv.dlu.edu.vn"
              className="text-blue-600 hover:underline"
            >
              nguyenvana@sv.dlu.edu.vn
            </a>
          </p>
          <p>
            <strong>GitHub:</strong>{" "}
            <a
              href="https://github.com/nguyenvana"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              github.com/nguyenvana
            </a>
          </p>
          <p>
            <strong>Dia chi:</strong> Dai hoc Da Lat, 01 Phu Dong Thien Vuong,
            Da Lat
          </p>
        </div>
      </div>
    </div>
  );
}