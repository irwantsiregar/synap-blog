import Layout from "@/components/Layout";
import ContentBlog from "@/components/ContentBlog";
import { receiveAllPosts } from "@/features/posts";
// import PropTypes from "prop-types";

export default function Home({ posts }) {
  // console.log(posts);
  return (
    <Layout>
      <ContentBlog posts={posts} />
    </Layout>
  );
}

export async function getServerSideProps() {
  const posts = await receiveAllPosts();
  return {
    props: {
      posts,
    },
  };
}
