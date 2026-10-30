import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogs, getBlog } from "@/lib/blogs";

type BlogPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogs.map((blog) => ({ slug: blog.slug }));
}

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const { slug } = await params;
  const blog = getBlog(slug);

  return {
    title: blog ? `${blog.title} | Kathrina Elangbam` : "Blog | Kathrina Elangbam",
    description: blog?.description,
  };
}

export default async function BlogPage({ params }: BlogPageProps) {
  const { slug } = await params;
  const blog = getBlog(slug);

  if (!blog) {
    notFound();
  }

  return (
    <main className="w-full max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-16">
      <Link href="/" className="text-sm font-mono text-neutral-500 hover:text-black">
        &lt;- Back to portfolio
      </Link>

      <div className="mt-12 grid grid-cols-1 lg:grid-cols-[180px_minmax(0,720px)] gap-12 lg:gap-20">
        <aside className="lg:sticky lg:top-8 lg:self-start">
          <p className="text-xs uppercase tracking-widest text-neutral-500">On this page</p>
          <nav aria-label="Article sections" className="mt-4 border-l border-neutral-200 pl-4">
            <ul className="space-y-3">
              {blog.sections.map((section) => (
                <li key={section.id}>
                  <a href={`#${section.id}`} className="text-sm text-neutral-500 hover:text-black">
                    {section.heading}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        <article className="min-w-0">
          <header className="border-b border-neutral-200 pb-10">
            <p className="text-sm font-mono text-neutral-500">{blog.date}</p>
            <h1 className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tight text-black">
              {blog.title}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-neutral-600">{blog.description}</p>
          </header>

          <div className="pt-10 space-y-12">
            {blog.sections.map((section) => (
              <section key={section.id} id={section.id} className="scroll-mt-8">
                <h2 className="text-2xl md:text-3xl font-bold text-black">{section.heading}</h2>
                <div className="mt-5 space-y-4 text-base leading-8 text-neutral-700">
                  {section.paragraphs.map((paragraph, index) => (
                    <div key={typeof paragraph === "string" ? paragraph : paragraph.map((part) => part.text).join("")}>
                      <p>
                        {typeof paragraph === "string"
                          ? paragraph
                          : paragraph.map((part, partIndex) => (
                              <span
                                key={`${part.text}-${partIndex}`}
                                className={part.style === "bold" ? "font-bold" : part.style === "italic" ? "italic" : undefined}
                              >
                                {part.text}
                              </span>
                            ))}
                      </p>
                      {section.image && section.imageAfterParagraph === index && (
                        <figure className="mt-8">
                          <Image
                            src={section.image}
                            alt={section.imageAlt ?? ""}
                            width={760}
                            height={440}
                            className="w-full rounded-xl border border-neutral-200 bg-neutral-50 object-contain"
                          />
                          {section.caption && (
                            <figcaption className="mt-3 text-sm italic text-neutral-500">
                              {section.caption}
                            </figcaption>
                          )}
                        </figure>
                      )}
                    </div>
                  ))}
                </div>
                {section.image && section.imageAfterParagraph === undefined && (
                  <figure className="mt-8">
                    <Image
                      src={section.image}
                      alt={section.imageAlt ?? ""}
                      width={760}
                      height={220}
                      className="w-full rounded-xl border border-neutral-200 bg-neutral-50 p-4"
                    />
                    {section.caption && (
                      <figcaption className="mt-3 text-sm italic text-neutral-500">
                        {section.caption}
                      </figcaption>
                    )}
                  </figure>
                )}
              </section>
            ))}
          </div>
        </article>
      </div>
    </main>
  );
}