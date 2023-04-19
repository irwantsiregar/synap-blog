import Layout from "@/components/Layout";
import styles from "./Register.module.css";

export default function Register() {
  return (
    <Layout>
      <div className="container">
        <div className={styles.register}>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 py-3">
              <h1>Create Account</h1>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
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
                  <div id="nameHelp" className="form-text">
                    Well never share your email with anyone else.
                  </div>
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
                  <div id="emaiHelpl" className="form-text">
                    Well never share your email with anyone else.
                  </div>
                </div>
                <div className="mb-3">
                  <label className="form-check-label" htmlFor="male">
                    Gender
                  </label>
                  <div className="d-flex">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="gender"
                        id="male"
                      />
                      <label className="form-check-label" htmlFor="male">
                        Male
                      </label>
                    </div>
                    <div className="form-check mx-3">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="gender"
                        id="female"
                      />
                      <label className="form-check-label" htmlFor="female">
                        Female
                      </label>
                    </div>
                  </div>
                </div>
                <div className="mb-3">
                  <label className="form-check-label" htmlFor="active">
                    Status
                  </label>
                  <div className="d-flex">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="status"
                        id="active"
                      />
                      <label className="form-check-label" htmlFor="active">
                        Active
                      </label>
                    </div>
                    <div className="form-check mx-3">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="status"
                        id="inactive"
                      />
                      <label className="form-check-label" htmlFor="inactive">
                        Inactive
                      </label>
                    </div>
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
    </Layout>
  );
}
