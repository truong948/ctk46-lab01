
import Link from "next/link";
import { notFound } from "next/navigation";
import { Posts, User } from "@/types/posts";
interface BlogPostPageProps {
 params: Promise<{ id: string }>;
}
async function getPost(id: string): Promise<Posts> {
 const res = await fetch(
 `https://jsonplaceholder.typicode.com/posts/${id}`
 );
 if (!res.ok) {
 notFound();
 }
 return res.json();
}
async function getUser(userId: number): Promise<User> {
 const res = await fetch(
 `https://jsonplaceholder.typicode.com/users/${userId}`
 );
 if (!res.ok) {
 throw new Error("Không thể tải thông tin tác giả");
 }
 return res.json();
}
export default async function BlogPostPage({ params }: BlogPostPageProps) {
 const { id } = await params;
 const post = await getPost(id);
 const author = await getUser(post.userId);
 return (
 <div className="space-y-5 reveal">
 <Link
 href="/blog"
 className="inline-block rounded-full bg-[color:rgba(31,138,112,0.12)] px-3 py-1 text-sm font-semibold text-[color:var(--accent-strong)] transition-colors hover:bg-[color:rgba(31,138,112,0.2)]"
 >
 ← Quay lại danh sách
 </Link>
 <article className="panel p-6 md:p-8">
 <h1 className="text-3xl font-bold capitalize md:text-4xl">{post.title}</h1>
 <div className="mb-6 mt-4 flex items-center gap-3 text-sm text-[color:var(--muted)]">
 <span>Tác giả: <strong className="text-[color:var(--text)]">{author.name}</strong></span>
 <span>•</span>
 <span>{author.email}</span>
 </div>
 <div className="mb-8 whitespace-pre-line leading-relaxed text-[color:var(--muted)]">
 {post.body}
 </div>
 <div className="border-t border-[color:var(--border)] pt-6">
 <h3 className="font-semibold mb-2">Về tác giả</h3>
 <p className="text-sm text-[color:var(--muted)]">
 <strong>{author.name}</strong> (@{author.username}) —
{author.company.name}
 </p>
 <p className="text-sm text-[color:var(--muted)]">{author.company.catchPhrase}</p>
 </div>
 </article>
 </div>
 );
}