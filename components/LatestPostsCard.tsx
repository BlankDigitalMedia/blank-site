export function LatestPostsCard() {
  const posts = [
    { title: "My First Blog Post", date: "2023-10-01", tag: "Tech" },
    { title: "Building with Next.js", date: "2023-09-15", tag: "Development" },
    { title: "Thoughts on AI", date: "2023-08-20", tag: "AI" },
  ];

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
      <h2 className="text-lg font-medium text-gray-900 mb-4">Latest Posts</h2>
      <ul className="space-y-3">
        {posts.map((post, index) => (
          <li key={index} className="flex justify-between items-start">
            <div>
              <h3 className="text-sm font-medium text-gray-900">{post.title}</h3>
              <p className="text-xs text-gray-600">{post.date} • {post.tag}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
