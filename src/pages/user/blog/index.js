import Link from "next/link";
import Layout from "@/components/Layout";
import styles from "./Blog.module.css";

export default function Blog() {
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
