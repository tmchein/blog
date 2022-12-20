import { assertEquals } from "$std/testing/asserts.ts";
import { Post } from "../types.d.ts";
import { loadPost } from "../utils/posts.ts";

Deno.test("LoadPost returns null if the post does not exists", async (): Promise<void> => {
  const post: Post | null = await loadPost("non-existing-post");
  if (post !== null) {
    throw new Error("Post should be null");
  }
  assertEquals(post, null);
});

Deno.test("LoadPost returns the post", async (): Promise<void> => {
  const post: Post | null = await loadPost("hello-world");
  if (post === null) {
    throw new Error("Post should not be null");
  }
  assertEquals(post.id, "hello-world");
});
