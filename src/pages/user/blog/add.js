import { useState } from "react";
import { useForm } from "react-hook-form";
import Layout from "@/components/Layout";
import styles from "./Add.module.css";
import { validationSchema } from "@/components/Posts/Validation";
import { getLocalStorage } from "@/api/user";
import { addBlogPosts } from "@/features/posts";
import ClipSpinner from "@/components/Announcement/ClipSpinner";

export default function NewPost() {
  const [status, setStatus] = useState(false);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm(validationSchema);

  const successAuth = () => {
    reset(validationSchema.defaultValues);
    setStatus(true);
    setMessage(false);
    setTimeout(() => setStatus(false), 3000);
  };

  const failedAuth = () => {
    setMessage(true);
  };

  const onSubmit = async (data) => {
    setLoading(true);
    const userId = getLocalStorage("authUser");
    const response = await addBlogPosts({ userId, ...data });
    response?.id ? successAuth(response.id) : failedAuth();
    setLoading(false);
  };

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
              {status ? (
                <div className="alert alert-success" role="alert">
                  Post successfully added..
                </div>
              ) : null}
              {message ? (
                <div className="alert alert-warning" role="alert">
                  {message}
                </div>
              ) : null}
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">
                    Title Post
                  </label>
                  <input
                    {...register("title")}
                    className="form-control"
                    id="title"
                    placeholder="Simple Habits"
                  />
                  <div id="titleHelp" className="form-text text-danger">
                    {errors.title?.message}
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="body" className="form-label">
                    Body Post
                  </label>
                  <textarea
                    {...register("body")}
                    className="form-control"
                    id="body"
                    rows="8"
                    placeholder="Write a post here.."
                  />
                  <div id="bodyHelp" className="form-text text-danger">
                    {errors.body?.message}
                  </div>
                </div>
                <button
                  type="submit"
                  className="btn btn-dark mt-2"
                  disabled={loading}
                >
                  {loading ? <ClipSpinner /> : "Create Posts"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
