import { Handlers, PageProps } from "$fresh/server.ts";
import { CSS } from "https://deno.land/x/gfm@0.1.26/mod.ts";
import { loadPost } from "../../utils/posts.ts";

export const handler: Handlers = {
  async GET(request, context) {
    const id = context.params.id;
    const post = await loadPost(id);
    return context.render({ post });
  },
};

export default function PagePost(props: PageProps) {
  const { post } = props?.data;
  return (
    <>
      <head>
        <title>{post.title}</title>
      </head>
      <article class="p-4">
        <h1 class="text-2xl font-bold">
          {post.title}
        </h1>
        <time>{Intl.DateTimeFormat("es").format(post.date)}</time>
        <style dangerouslySetInnerHTML={{ __html: CSS }} />
        <div
          class="markdown-body"
          dangerouslySetInnerHTML={{ __html: post.body }}
        />
      </article>
    </>
  );
}
