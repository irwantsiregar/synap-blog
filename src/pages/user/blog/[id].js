import Link from "next/link";
import Layout from "@/components/Layout";
import styles from "./Blog.module.css";
import { receiveUserBlogPosts } from "@/features/user";

export default function Blog({ blogPosts }) {
  return (
    <Layout>
      <div className="container">
        <div className={styles.blog}>
          <div className="row justify-content-center my-1">
            <div className="col-lg-6 text-end">
              <Link href="/user/blog/add" className="btn btn-outline-secondary">
                Add New Post
              </Link>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              {blogPosts.map(({ id, title }, index) => (
                <div className="card shadow-sm my-3" key={id}>
                  <div className="card-body">
                    <p className="card-text">
                      <span className="badge bg-info">{index + 1}</span>
                      <span className="px-2">{title.slice(0, 40)}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps({ params }) {
  const blogPosts = await receiveUserBlogPosts(params.id);

  return {
    props: {
      blogPosts,
    },
  };
}
