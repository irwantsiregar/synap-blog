import Link from "next/link";
import Layout from "@/components/Layout";
import styles from "./Blog.module.css";
import { receiveUserBlogPosts } from "@/features/user";
// import { getLocalStorage } from "@/api/user";

export default function Blog({ blogPosts }) {
  console.log(blogPosts);
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
              <div className="card shadow-sm my-3">
                <div className="card-body">
                  <p className="card-text">
                    <span className="badge bg-info">1</span>
                    <span className="px-2">
                      Lorem ipsum dolor sit amet consorsium
                    </span>
                  </p>
                </div>
              </div>
              <div className="card shadow-sm my-3">
                <div className="card-body">
                  <p className="card-text">
                    <span className="badge bg-info">1</span>
                    <span className="px-2">
                      Lorem ipsum dolor sit amet consorsium
                    </span>
                  </p>
                </div>
              </div>
              <div className="card shadow-sm my-3">
                <div className="card-body">
                  <p className="card-text">
                    <span className="badge bg-info">1</span>
                    <span className="px-2">
                      Lorem ipsum dolor sit amet consorsium
                    </span>
                  </p>
                </div>
              </div>
              <div className="card shadow-sm my-3">
                <div className="card-body">
                  <p className="card-text">
                    <span className="badge bg-info">1</span>
                    <span className="px-2">
                      Lorem ipsum dolor sit amet consorsium
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  // const authUser = getLocalStorage("authUser");
  const blogPosts = await receiveUserBlogPosts(1143408);

  return {
    props: {
      blogPosts,
    },
  };
}
