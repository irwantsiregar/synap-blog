import Link from "next/link";
import Image from "next/image";
import styles from "./ContentBlog.module.css";

export default function ContentBlog({ posts }) {
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
          {posts.map(({ id, title, body }) => (
            <div className="col-md-6 col-lg-4" key={id}>
              <div className="p-3 d-flex justify-content-center">
                <div className="card" style={{ width: "18rem" }}>
                  <Image
                    src="/avatar/twothree.png"
                    alt={title}
                    width={210}
                    height={150}
                    className="m-auto"
                  />
                  <div className="card-body">
                    <Link href={`/detail/${id}`}>
                      <h5 className="card-title">{title.slice(0, 24)}</h5>
                    </Link>
                    <p className="card-text text-break">{body.slice(0, 80)}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
