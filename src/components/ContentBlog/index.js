import Link from "next/link";
import styles from "./ContentBlog.module.css";

export default function ContentBlog() {
  return (
    <div className="container">
      <div className={styles.content_blog}>
        <div className="row my-3 pe-3 justify-content-end">
          <div className="col-6 col-md-4 col-lg-3">
            <input
              className="form-control"
              type="search"
              placeholder="Search.."
              aria-label="search"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-lg-4">
            <div className="p-3 d-flex justify-content-center">
              <div className="card" style={{ width: "18rem" }}>
                <img
                  src="https://fakeimg.pl/350x200/ff0000,128/000,255/?text=Hello"
                  className="card-img-top"
                  alt="fakeimage"
                />
                <div className="card-body">
                  <Link href="/detail/3">
                    <h5 className="card-title">Card title</h5>
                  </Link>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    upthe bulk of the cards
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="d-flex justify-content-center p-3">
              <div className="card shadow-sm" style={{ width: "18rem" }}>
                <img
                  src="https://fakeimg.pl/350x200/ff0000,128/000,255/?text=Hello"
                  className="card-img-top"
                  alt="fakeimage"
                />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    upthe bulk of the cards
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="d-flex justify-content-center p-3">
              <div className="card" style={{ width: "18rem" }}>
                <img
                  src="https://fakeimg.pl/350x200/ff0000,128/000,255/?text=Hello"
                  className="card-img-top"
                  alt="fakeimage"
                />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    upthe bulk of the cards
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="d-flex justify-content-center p-3">
              <div className="card" style={{ width: "18rem" }}>
                <img
                  src="https://fakeimg.pl/350x200/ff0000,128/000,255/?text=Hello"
                  className="card-img-top"
                  alt="fakeimage"
                />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    upthe bulk of the cards
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="d-flex justify-content-center p-3">
              <div className="card" style={{ width: "18rem" }}>
                <img
                  src="https://fakeimg.pl/350x200/ff0000,128/000,255/?text=Hello"
                  className="card-img-top"
                  alt="fakeimage"
                />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    upthe bulk of the cards
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
