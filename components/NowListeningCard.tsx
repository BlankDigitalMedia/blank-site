export function NowListeningCard() {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
      <h2 className="text-lg font-medium text-gray-900 mb-4">Now Listening</h2>
      <div className="flex items-center">
        <img
          src="/placeholder-album.jpg" // Placeholder for album cover
          alt="Album cover"
          className="w-12 h-12 rounded mr-4"
        />
        <div>
          <p className="text-sm font-medium text-gray-900">Song Title</p>
          <p className="text-sm text-gray-600">Artist Name</p>
        </div>
      </div>
    </div>
  );
}
