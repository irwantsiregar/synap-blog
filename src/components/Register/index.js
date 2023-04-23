import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { registerUser } from "@/features/user";
import { validationSchema } from "./Validation";
import Alert from "../Alert";
import styles from "./Register.module.css";
import { putLocalStorage } from "@/api/user";

export default function Register() {
  const [status, setStatus] = useState(false);
  const [message, setMessage] = useState("");
  const [userId, setUserId] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm(validationSchema);

  useEffect(() => {
    putLocalStorage("userId", userId);
  }, [userId]);

  const successSubmit = (id) => {
    setMessage("");
    setStatus(!status);
    setUserId(id);
    reset(validationSchema.defaultValues);
  };

  const failedSubmit = (_message) => {
    setStatus(false);
    setMessage(_message);
  };

  const onSubmit = async (data) => {
    const response = await registerUser(data);
    response.id ? successSubmit(response.id) : failedSubmit(response.message);
  };

  return (
    <div className="container">
      <div className={styles.register}>
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6 py-3">
            <h1>Create Account</h1>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6">
            {status ? (
              <Alert color="success">
                Register successfully. Please log in
              </Alert>
            ) : null}
            {message ? <Alert color="warning">{message}</Alert> : null}
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
                  {...register("email")}
                  className="form-control"
                  id="email"
                  aria-describedby="emailHelp"
                />
                <div id="emaiHelp" className="form-text text-danger">
                  {errors.email?.message}
                </div>
              </div>
              <div className="mb-3">
                <label className="form-check-label" htmlFor="male">
                  Gender
                </label>
                <div className="d-flex">
                  <div className="form-check">
                    <input
                      {...register("gender")}
                      type="radio"
                      name="gender"
                      id="male"
                      className="form-check-input"
                      value="male"
                    />
                    <label className="form-check-label" htmlFor="male">
                      Male
                    </label>
                  </div>
                  <div className="form-check mx-3">
                    <input
                      {...register("gender")}
                      type="radio"
                      name="gender"
                      className="form-check-input"
                      id="female"
                      value="female"
                    />
                    <label className="form-check-label" htmlFor="female">
                      Female
                    </label>
                  </div>
                </div>
                <div id="genderHelp" className="form-text text-danger">
                  {errors.gender?.message}
                </div>
              </div>
              <div className="mb-3">
                <label className="form-check-label" htmlFor="active">
                  Status
                </label>
                <div className="d-flex">
                  <div className="form-check">
                    <input
                      {...register("status")}
                      className="form-check-input"
                      type="radio"
                      name="status"
                      id="active"
                      value="active"
                    />
                    <label className="form-check-label" htmlFor="active">
                      Active
                    </label>
                  </div>
                  <div className="form-check mx-3">
                    <input
                      {...register("status")}
                      className="form-check-input"
                      type="radio"
                      name="status"
                      id="inactive"
                      value="inactive"
                    />
                    <label className="form-check-label" htmlFor="inactive">
                      Inactive
                    </label>
                  </div>
                </div>
                <div id="statusHelp" className="form-text text-danger">
                  {errors.status?.message}
                </div>
              </div>
              <button type="submit" className="btn btn-dark mt-2">
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
