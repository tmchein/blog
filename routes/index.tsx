import { Handlers, PageProps } from "$fresh/server.ts";
import { Post } from "../types.d.ts";
import { listPosts } from "../utils/posts.ts";

export const handler: Handlers = {
  async GET(req, context) {
    const posts = await listPosts();
    return context.render({ posts });
  },
};

export default function Home(props: PageProps) {
  const { data } = props;
  const { posts } = data;

  return (
    <>
      <head>
        <title>Blog</title>
      </head>
      <main class="p-4 flex justify-center flex-col items-center">
        <h1 class="text-4xl font-bold text-center">Mi blog</h1>
        {posts.map((post: Post) => (
          <article class="py-4 w-max">
            <a class="hover:text-blue-600" href={`/blog/${post.id}`}>
              <h2 class="text-2xl font-bold">
                {post.title}
              </h2>
              <img
                class="max-w-xs rounded-lg"
                src={post.thumb}
                alt={post.title}
              />
            </a>
            <p>{post.excerpt}</p>
            <time>{Intl.DateTimeFormat("es").format(post.date)}</time>
          </article>
        ))}
      </main>
    </>
  );
}
