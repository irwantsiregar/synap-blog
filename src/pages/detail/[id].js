import Layout from "@/components/Layout";
import styles from "./Detail.module.css";

export default function Detail() {
  return (
    <Layout>
      <div className="container">
        <div className={styles.detail}>
          {/* Detail Blog Post */}
          <div className="detail_body_post">
            <div className="card mt-4 p-3 shadow-sw">
              <div className="card-body">
                <h1 className="card-title">JavaScript Developement</h1>
                <h6 className="card-subtitle mb-3 mt-1">John Doe</h6>
                <p className="card-text text">
                  Some quick example text to build on the card title and make up
                  the bulk of the cards content. Some quick example text to
                  build on the card title and make up the bulk of the cards
                  content. Some quick example text to build on the card title
                  and make up the bulk of the cards content. Some quick example
                  text to build on the card title and make up the bulk of the
                  cards content. Some quick example text to build on the card
                  title and make up the bulk of the cards content.
                </p>
              </div>
            </div>
          </div>
          {/* Comments */}
          <div className={styles.comments}>
            <div className="card my-4 shadow-sm p-4">
              <h2 className="">12 Comments</h2>
              <div className={styles.comment_user}>
                <div className="card-image d-flex my-2">
                  <div className="p-2">
                    <img
                      src="https://fakeimg.pl/100x100"
                      alt="user"
                      className="rounded-circle"
                      width={55}
                      height={55}
                    />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Irwanto SIregar</h5>
                    <p className="card-text text">
                      Some quick example text to build on the card title and
                      make up the bulk of the cards content. Some quick example
                      text to.
                    </p>
                  </div>
                </div>
                <div className="card-image d-flex my-2">
                  <div className="p-2">
                    <img
                      src="https://fakeimg.pl/100x100"
                      alt="user"
                      className="rounded-circle"
                      width={55}
                      height={55}
                    />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Irwanto SIregar</h5>
                    <p className="card-text text">
                      Some quick example text to build on the card title and
                      make up the bulk of the cards content. Some quick example
                      text to.
                    </p>
                  </div>
                </div>
                <div className="card-image d-flex my-2">
                  <div className="p-2">
                    <img
                      src="https://fakeimg.pl/100x100"
                      alt="user"
                      className="rounded-circle"
                      width={55}
                      height={55}
                    />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Irwanto SIregar</h5>
                    <p className="card-text text">
                      Some quick example text to build on the card title and
                      make up the bulk of the cards content. Some quick example
                      text to.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Add Comment */}
          <div className="add_comment">
            <div className="card p-4 mb-5 shadow-sm">
              <h3>Add Comments to Posts</h3>
              <div className="row justify-content-center mt-2">
                <div className="col-md-6">
                  <form>
                    <div className="mb-3">
                      <label htmlFor="name" className="form-label">
                        Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        aria-describedby="nameHelp"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">
                        Email
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        aria-describedby="emailHelp"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="body" className="form-label">
                        Comment
                      </label>
                      <textarea
                        className="form-control"
                        id="body"
                        rows="3"
                        placeholder="Write a comment here.."
                      />
                    </div>
                    <button type="submit" className="btn btn-dark mt-2">
                      Add Comment
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
