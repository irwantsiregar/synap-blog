import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Alert from "../Alert";
import { validationSchema } from "./Validation";
import { addCommentOnPost } from "@/features/comment";

export default function FormComment({ postId }) {
  const [status, setStatus] = useState(false);
  const [message, setMessage] = useState("");
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm(validationSchema);

  const onSubmit = async (data) => {
    const response = await addCommentOnPost({ postId, ...data });
    response?.id ? setStatus(true) : setMessage(response.message);
    status ? router.reload() : null;
    reset(validationSchema.defaultValues);
  };

  return (
    <div className="add_comment">
      <div className="card p-4 mb-5 shadow-sm">
        <h3>Add Comments to Posts</h3>
        <div className="row justify-content-center my-3">
          <div className="col-md-6">
            {status ? (
              <Alert color="success">Comment successfully added..</Alert>
            ) : null}
            {message ? <Alert color="success">{message}</Alert> : null}
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  {...register("name")}
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
                  {...register("email")}
                  className="form-control"
                  id="email"
                  placeholder="johndoe@mail.com"
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
                  {...register("body")}
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
