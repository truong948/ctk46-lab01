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
      <div>
        <Link
          href="/blog"
          className="text-blue-600 hover:underline text-sm mb-6 inline-block"
        >
          ← Quay lại danh sách
        </Link>

        <article>
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">
              Tác giả #{post.userId}
            </span>
            <span className="text-sm text-gray-400">Bài #{post.id}</span>
          </div>

          <h1 className="text-3xl font-bold mb-6 capitalize">{post.title}</h1>

          <div className="prose max-w-none text-gray-700 whitespace-pre-line">
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
    <div>	
      <Link	
        href="/blog"	
        className="text-blue-600 hover:underline text-sm mb-6 inline-block"	
      >	
        ← Quay lại danh sách	
      </Link>	
	
      <article>	
        <div className="flex items-center gap-3 mb-4">	
          <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">	
            {post.category}	
          </span>	
          <span className="text-sm text-gray-400">{post.date}</span>	
        </div>	
	
        <h1 className="text-3xl font-bold mb-6">{post.title}</h1>	
	
        <div className="prose max-w-none text-gray-700 whitespace-pre-line">	
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