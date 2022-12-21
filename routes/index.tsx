import { Handlers, PageProps } from "$fresh/server.ts";
import { Layout } from "../components/Layout.tsx";
import PostEntryList from "../components/PostEntryList.tsx";
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
    <Layout title="TMBlog">
      <main class="flex justify-center flex-col items-center">
        <h1 class="text-4xl text-white bg-blue-500 font-bold text-center
        py-2 px-6 mb-8 rounded-b-xl">
          TMBlog
        </h1>
        <PostEntryList posts={posts} />
      </main>
    </Layout>
  );
}
