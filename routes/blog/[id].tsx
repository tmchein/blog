import { Handlers, PageProps } from "$fresh/server.ts";
import { CSS } from "../../utils/gfmCSS.ts";
import { Layout } from "../../components/Layout.tsx";
import { loadPost } from "../../utils/posts.ts";
import { asset } from "$fresh/runtime.ts";

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
        <header class="relative text-center bg-blue-500 px-16 md:px-4 py-2 text-white">
          <a class="absolute m-auto left-5 top-[calc(50%-16px)]" href="/">
            <img
              class="w-8 h-8"
              src={asset("/back.svg")}
              alt="back to main page"
            />
          </a>
          <section class="col-start-2 col-end-4">
            <h1 class="text-3xl font-bold">
              {post.title}
            </h1>
            <time>
              <strong>Publicado:</strong>{" "}
              {Intl.DateTimeFormat("es").format(post.date)}
            </time>
          </section>
        </header>
        <main class="pt-8 px-6 md:px-32 xl:px-[400px]">
          <style dangerouslySetInnerHTML={{ __html: CSS }} />
          <div
            class="markdown-body text-justify"
            data-color-mode="dark"
            data-dark-theme="dark"
            style={{
              backgroundColor: "transparent",
              color: "#eee",
              fontSize: "1.15rem",
            }}
            dangerouslySetInnerHTML={{ __html: post.body }}
          />
        </main>
      </article>
    </Layout>
  );
}
