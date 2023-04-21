import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
// import { useState } from "react";
// import { loginUser } from "@/features/user";
import { validationSchema } from "./Validation";
import { loginUser } from "@/features/user";

export default function Login() {
  const [authUser, setAuthUser] = useState(false);
  const router = useRouter();
  const [message, setMessage] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm(validationSchema);

  const successAuth = () => {
    setMessage(false);
    setAuthUser(true);
    setTimeout(() => {
      router.reload();
    }, 200);
  };

  const failedAuth = () => {
    setMessage(true);
    setAuthUser(false);
  };

  const onSubmit = async (data) => {
    const response = await loginUser(data);
    response?.id ? successAuth() : failedAuth();
  };

  return (
    <div
      className="modal fade"
      id="loginModal"
      tabIndex="-1"
      aria-labelledby="loginModal"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="title">
              Login
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="p-2">
            <div className="modal-body">
              {message ? (
                <div className="alert alert-danger" role="alert">
                  Authentication failed. Please fill in the email correctly.
                </div>
              ) : null}
              {authUser ? (
                <div className="alert alert-success" role="alert">
                  Logged in successfully..
                </div>
              ) : null}
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email address
                  </label>
                  <input
                    {...register("email")}
                    className="form-control"
                    id="email"
                    aria-describedby="emailHelp"
                  />
                  <div id="emailHelp" className="form-text text-danger">
                    {errors.email?.message}
                  </div>
                </div>
                <button type="submit" className="btn btn-secondary mt-2 mb-3">
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
