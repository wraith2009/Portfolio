export default function Blogs_section() {
  const blogs = [
    {
      date: "Mar 08, 2025",
      title: "How vector search works",
      link: "https://medium.com/@rbh97995/how-vector-search-works-1f965e167a63",
    },
  ];
  return (
    <div className=" mt-4 px-4 md:px-16">
      <div className="my-20">
        <div className="flex items-center gap-2 mb-2">
          <h2 className="text-3xl font-bold text-white">Recent blog posts</h2>
        </div>
        <p className="text-gray-400 mb-6">Things I have written recently.</p>

        <ul className="space-y-4 list-none">
          {blogs.map((blog, index) => (
            <li key={index} className="flex items-baseline gap-2">
              <span className="text-gray-400">•</span>
              <span className="text-gray-500 w-28">{blog.date} : </span>
              <a
                href={blog.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:underline"
              >
                {blog.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
