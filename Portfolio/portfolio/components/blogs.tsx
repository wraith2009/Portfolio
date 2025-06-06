export default function Blogs_section() {
  const blogs = [
    {
      date: "Mar 08, 2025",
      title: "How vector search works",
      link: "https://medium.com/@rbh97995/how-vector-search-works-1f965e167a63",
    },
    {
      date: "May 08, 2025",
      title: "Understanding Phantom Reads: Ghosts in Your Database",
      link: "https://medium.com/@rbh97995/understanding-phantom-reads-ghosts-in-your-database-2e2964caf96b",
    },
    {
      date: "May 25, 2025",
      title:
        "Eventual Consistency in Distributed Systems: A Real-World Perspective",
      link: "https://medium.com/@rbh97995/eventual-consistency-in-distributed-systems-a-real-world-perspective-1175fd0f742b",
    },
    {
      date: "June 2, 2025",
      title:
        "From Monolith to Microservice: Designing a Centralized Payment System for a Growing EdTech Platform",
      link: "https://medium.com/@rbh97995/from-monolith-to-microservice-designing-a-centralized-payment-system-for-a-growing-edtech-platform-23539a4d89ff",
    },
  ];

  return (
    <div className="mt-4 px-4 md:px-16">
      <div className="my-20">
        <div className="flex items-center gap-2 mb-2">
          <h2 className="text-3xl font-bold text-white">Recent blog posts</h2>
        </div>
        <p className="text-gray-400 mb-6">Things I have written recently.</p>
        <ul className="space-y-4 list-none">
          {blogs.map((blog, index) => (
            <li key={index} className="flex items-baseline gap-2 flex-wrap">
              <span className="text-gray-400">•</span>
              <span className="text-gray-500 w-fit whitespace-nowrap">
                {blog.date} :
              </span>
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
