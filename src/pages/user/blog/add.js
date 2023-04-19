import Layout from "@/components/Layout";
import styles from "./Add.module.css";

export default function NewPost() {
  return (
    <Layout>
      <div className="container">
        <div className={styles.create_post}>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 py-3">
              <h1>Create Blog Posts</h1>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <form>
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">
                    Title Post
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    placeholder="Simple Habits"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="body" className="form-label">
                    Body Post
                  </label>
                  <textarea
                    className="form-control"
                    id="body"
                    rows="8"
                    placeholder="Write a post here.."
                  />
                </div>
                <button type="submit" className="btn btn-dark mt-2">
                  Create Posts
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
