import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { validationSchema } from "./Validation";
import { loginUser } from "@/features/user";
import Alert from "../Alert";
import { getLocalStorage, putLocalStorage } from "@/api/user";
import ClipSpinner from "@/components/Announcement/ClipSpinner";

export default function Login() {
  const router = useRouter();
  const [message, setMessage] = useState(false);
  const [authUser, setAuthUser] = useState("");
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm(validationSchema);

  const successAuth = (id) => {
    setMessage(false);
    setAuthUser(id);
    putLocalStorage("userId", id);
    putLocalStorage("authUser", id);
    router.push("/");
    setTimeout(() => router.reload(), 800);
  };

  const failedAuth = () => {
    setMessage(true);
    setAuthUser(false);
    setLoading(false);
  };

  const onSubmit = async (data) => {
    setLoading(true);
    const userId = getLocalStorage("userId");
    const response = await loginUser({ userId, ...data });
    response?.id ? successAuth(response.id) : failedAuth();
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
                <Alert color="warning">
                  Authentication failed. Please fill in the email correctly.
                </Alert>
              ) : null}
              {authUser ? (
                <Alert color="success">Logged in successfully..</Alert>
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
                <button
                  type="submit"
                  className="btn btn-secondary mt-2 mb-3"
                  disabled={loading}
                >
                  {loading ? <ClipSpinner /> : "Login"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
