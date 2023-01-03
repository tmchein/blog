import { extract } from "https://deno.land/std@0.170.0/encoding/front_matter.ts";
import { render } from "https://deno.land/x/flavoredmd@v0.0.1/mod.ts";
import type { Post } from "../types.d.ts";

export async function loadPost(id: string): Promise<Post | null> {
  let raw: string;
  try {
    raw = await Deno.readTextFile(`./content/posts/${id}.md`);
  } catch (error) {
    return null;
  }

  const { attrs, body } = extract(raw);

  const post: Post = {
    id,
    title: attrs.title,
    body: render(body),
    thumb: attrs.thumb,
    date: new Date(attrs.date),
    excerpt: attrs.excerpt,
  };
  return post;
}

export async function listPosts(): Promise<Post[]> {
  const promises = [];

  for await (const entry of Deno.readDir("./content/posts")) {
    const { name } = entry;
    const [id] = name.split(".");
    if (id) promises.push(loadPost(id));
  }

  const posts = await Promise.all(promises) as Post[];

  posts.sort((a, b) => {
    return b.date.getTime() - a.date.getTime(); // DESC
  });

  return posts;
}
