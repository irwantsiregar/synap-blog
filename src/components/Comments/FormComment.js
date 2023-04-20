/* eslint-disable no-unused-expressions */
import { useState } from "react";
import { useForm } from "react-hook-form";
import { rules } from "./Validation";
import { addCommentOnPost } from "@/features/comment";

export default function FormComment({ postId }) {
  const [status, setStatus] = useState(false);
  const [message, setMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const response = await addCommentOnPost({ postId, ...data });
    response.message ? setMessage(response.message) : setStatus(true);
    console.log({ postId, ...data });
    console.log(response);
  };

  // console.log(watch(rules.email));

  return (
    <div className="add_comment">
      <div className="card p-4 mb-5 shadow-sm">
        <h3>Add Comments to Posts</h3>
        <div className="row justify-content-center my-3">
          <div className="col-md-6">
            {status ? (
              <div className="alert alert-success" role="alert">
                Comment successfully added..
              </div>
            ) : null}
            {message ? (
              <div className="alert alert-warning" role="alert">
                {message}
              </div>
            ) : null}
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  {...register("name", rules.name)}
                  className="form-control"
                  id="name"
                  aria-describedby="nameHelp"
                  placeholder="John Doe"
                />
                <div id="nameHelp" className="form-text text-danger">
                  {errors.name?.message}
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  {...register("email", rules.email)}
                  className="form-control"
                  id="email"
                  aria-describedby="emailHelp"
                />
                <div id="emailHelp" className="form-text text-danger">
                  {errors.email?.message}
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="body" className="form-label">
                  Comment
                </label>
                <textarea
                  {...register("body", rules.body)}
                  className="form-control"
                  id="body"
                  rows="3"
                  placeholder="Write a comment here.."
                />
                <div id="bodyHelp" className="form-text text-danger">
                  {errors.body?.message}
                </div>
              </div>
              <button type="submit" className="btn btn-dark mt-2">
                Add Comment
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
