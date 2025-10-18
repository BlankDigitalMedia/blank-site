export function AboutTeaserCard() {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
      <h2 className="text-lg font-medium text-gray-900 mb-4">About</h2>
      <p className="text-gray-600">
        I build things to understand them. Here’s what that means →
      </p>
      <a href="/about" className="text-blue-600 hover:text-blue-800 text-sm mt-2 inline-block">
        Read more
      </a>
    </div>
  );
}
