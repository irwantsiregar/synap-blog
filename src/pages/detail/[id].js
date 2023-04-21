import Layout from "@/components/Layout";
import styles from "./Detail.module.css";
import Comments from "@/components/Comments";
import FormComment from "@/components/Comments/FormComment";
import { receivePostDetail } from "@/features/posts";

export default function Detail({ detail }) {
  const { id, author, title, body, comments } = detail;

  return (
    <Layout>
      <div className="container">
        <div className={styles.detail}>
          {/* Detail Blog Post */}
          <div className="detail_body_post">
            <div className="card mt-4 p-4 pb-5 shadow-sw">
              <div className="card-body">
                <h1 className="card-title">{title}</h1>
                <h6 className="card-subtitle mb-3 mt-1">{author}</h6>
                <p className="card-text text">{body}</p>
              </div>
            </div>
          </div>
          {/* Comments */}
          <div className={styles.comments}>
            <div className="card my-4 shadow-sm p-4">
              <h2 className="">
                {comments.length}
                {" "}
                Comments
              </h2>
              <div className={styles.comment_user}>
                {comments.length ? (
                  comments.map((comment) => (
                    <Comments key={comment.id} {...comment} />
                  ))
                ) : (
                  <h2>Comment not available !</h2>
                )}
              </div>
            </div>
          </div>
          {/* Add Comment */}
          <FormComment postId={id} />
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps({ params }) {
  const detail = await receivePostDetail(params.id);
  return {
    props: {
      detail,
    },
  };
}
