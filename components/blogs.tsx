import Link from "next/link";
import { blogs } from "@/lib/blogs";

export default function Blogs() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 md:px-8 py-12">
      <div className="max-w-7xl mx-auto py-12 pb-0 mb-6">
        <h2 className="text-xl md:text-4xl text-black">Writing</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {blogs.map((blog) => (
          <article
            key={blog.slug}
            className="bg-white dark:bg-neutral-900 p-6 rounded-2xl shadow-sm hover:shadow-xl border border-neutral-200 dark:border-neutral-800 transition-all duration-300 flex flex-col justify-between min-h-56"
          >
            <div>
              <p className="text-sm font-mono text-neutral-500">{blog.date}</p>
              <h3 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mt-3">
                {blog.title}
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400 mt-2">
                {blog.description}
              </p>
            </div>
            <Link
              href={`/blogs/${blog.slug}`}
              className="mt-6 inline-flex w-fit items-center border-b border-black pb-1 text-sm font-medium text-black hover:border-neutral-500 hover:text-neutral-500"
            >
              Read article <span aria-hidden="true" className="ml-2">-&gt;</span>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}