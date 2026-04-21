import Link from "next/link";	
import { notFound } from "next/navigation";	
import { getPostBySlug, posts } from "@/data/posts";	
import { Post } from "@/types/posts";
	
interface BlogPostPageProps {	
  params: Promise<{ slug: string }>;	
}
async function getPostById(id: number): Promise<Post | undefined> {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    next: { revalidate: 60 },
  });

  if (res.status === 404) {
    return undefined;
  }

  if (!res.ok) {
    throw new Error("Không thể tải nội dung bài viết");
  }

  const post = (await res.json()) as Partial<Post>;

  // JSONPlaceholder returns an empty object for non-existent resources in some cases.
  if (!post.id || !post.title || !post.body) {
    return undefined;
  }

  return post as Post;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {	
  const { slug } = await params;	
  const isNumericSlug = /^\d+$/.test(slug);

  if (isNumericSlug) {
    const post = await getPostById(Number(slug));

    if (!post) {
      notFound();
    }

    return (
      <div className="space-y-5 reveal">
        <Link
          href="/blog"
          className="inline-block rounded-full bg-[color:rgba(31,138,112,0.12)] px-3 py-1 text-sm font-semibold text-[color:var(--accent-strong)] transition-colors hover:bg-[color:rgba(31,138,112,0.2)]"
        >
          ← Quay lại danh sách
        </Link>

        <article className="panel p-6 md:p-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="rounded-full bg-[color:rgba(31,138,112,0.14)] px-2.5 py-1 text-xs font-semibold text-[color:var(--accent-strong)]">
              Tác giả #{post.userId}
            </span>
            <span className="text-sm text-[color:var(--muted)]">Bài #{post.id}</span>
          </div>

          <h1 className="text-3xl font-bold capitalize md:text-4xl">{post.title}</h1>

          <div className="mt-6 whitespace-pre-line leading-relaxed text-[color:var(--muted)]">
            {post.body}
          </div>
        </article>
      </div>
    );
  }

  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }
	
  return (	
    <div className="space-y-5 reveal">	
      <Link	
        href="/blog"	
        className="inline-block rounded-full bg-[color:rgba(31,138,112,0.12)] px-3 py-1 text-sm font-semibold text-[color:var(--accent-strong)] transition-colors hover:bg-[color:rgba(31,138,112,0.2)]"	
      >	
        ← Quay lại danh sách	
      </Link>	
	
      <article className="panel p-6 md:p-8">	
        <div className="flex items-center gap-3 mb-4">	
          <span className="rounded-full bg-[color:rgba(31,138,112,0.14)] px-2.5 py-1 text-xs font-semibold text-[color:var(--accent-strong)]">	
            {post.category}	
          </span>	
          <span className="text-sm text-[color:var(--muted)]">{post.date}</span>	
        </div>	
	
        <h1 className="text-3xl font-bold md:text-4xl">{post.title}</h1>	
	
        <div className="mt-6 whitespace-pre-line leading-relaxed text-[color:var(--muted)]">	
          {post.content}	
        </div>	
      </article>	
    </div>	
  );	
}	
	
export async function generateStaticParams() {	
  return posts.map((post) => ({	
    slug: post.slug,	
  }));	
}