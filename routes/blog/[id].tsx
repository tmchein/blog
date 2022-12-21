import { Handlers, PageProps } from "$fresh/server.ts";
import { CSS } from "https://deno.land/x/gfm@0.1.26/mod.ts";
import { Layout } from "../../components/Layout.tsx";
import { loadPost } from "../../utils/posts.ts";

export const handler: Handlers = {
  async GET(request, context) {
    const id = context.params.id;
    const post = await loadPost(id);
    return context.render({ post });
  },
};

export default function PagePost(props: PageProps) {
  const { post } = props?.data || {};
  return (
    <Layout title={post.title}>
      <article>
        <header class="text-center bg-blue-500 px-4 py-2 text-white">
          <h1 class="text-3xl font-bold">
            {post.title}
          </h1>
          <time>
            <strong>Publicado:</strong>{" "}
            {Intl.DateTimeFormat("es").format(post.date)}
          </time>
        </header>
        <main class="pt-8 px-6 md:px-32 xl:px-96">
          <style dangerouslySetInnerHTML={{ __html: CSS }} />
          <div
            class="markdown-body text-justify"
            dangerouslySetInnerHTML={{ __html: post.body }}
          />
        </main>
      </article>
    </Layout>
  );
}
