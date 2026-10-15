import { Base } from "../components/Base";
import { Prose } from "../components/Prose";
import { formatDate, isoDate, type Post } from "../content";

const PostDate = ({ post }: { post: Post }) => (
  <p className="mt-1 text-sm text-stone-500 dark:text-stone-400">
    <time dateTime={isoDate(post.date)}>{formatDate(post.date)}</time>
    {post.draft && (
      <span className="ml-2 rounded bg-amber-200 px-1.5 py-0.5 text-xs font-semibold text-amber-900">
        Draft
      </span>
    )}
  </p>
);

export const BlogIndex = ({ posts }: { posts: Post[] }) => (
  <Base url="/blog/" title="Blog">
    <div className="space-y-12">
      {posts.map((post) => (
        <article key={post.slug}>
          <h2 className="text-2xl font-semibold tracking-tight text-stone-900 dark:text-stone-100">
            <a href={post.url} className="hover:text-sky-700 dark:hover:text-sky-400">
              {post.title}
            </a>
          </h2>
          <PostDate post={post} />
          {post.description ? (
            <p className="mt-3 leading-relaxed">{post.description}</p>
          ) : (
            <Prose html={post.excerptHtml} className="mt-3" />
          )}
        </article>
      ))}
    </div>
  </Base>
);

export const BlogPost = ({ post }: { post: Post }) => (
  <Base url={post.url} title={post.title} description={post.description}>
    <article>
      <header className="mb-8">
        <h1 className="text-4xl font-bold tracking-tight text-stone-900 dark:text-stone-100">
          {post.title}
        </h1>
        <PostDate post={post} />
      </header>
      <Prose html={post.html} />
    </article>
  </Base>
);
