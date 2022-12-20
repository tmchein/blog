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
      <main class="flex justify-center flex-col items-center">
        <h1 class="text-4xl bg-yellow-500 font-bold text-center
        w-full p-2">
          Mi blog
        </h1>
        {posts.map((post: Post) => (
          <article class="py-4 max-w-xs">
            <a class="hover:text-blue-600" href={`/blog/${post.id}`}>
              <h2 class="text-2xl font-bold">
                {post.title}
              </h2>
              <img
                class="rounded-lg"
                src={post.thumb}
                alt={post.title}
              />
            </a>
            <p class={`max-w-xs text-justify mb-2 line-clamp-3`}>
              {post.excerpt}
            </p>

            <time>{Intl.DateTimeFormat("es").format(post.date)}</time>
          </article>
        ))}
      </main>
    </>
  );
}
