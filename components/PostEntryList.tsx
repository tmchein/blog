import type { Post } from "../types.d.ts";
import { PostEntry } from "./PostEntry.tsx";

export default function PostEntryList({ posts }: { posts: Post[] }) {
  return (
    <div class="grid grid-cols-1 p-4 md:p-0 md:grid-cols-2 gap-8">
      {posts.map((post: Post) => (
        <PostEntry
          title={post.title}
          thumb={post.thumb}
          key={post.id}
          date={post.date}
          excerpt={post.excerpt}
          id={post.id}
        />
      ))}
    </div>
  );
}
