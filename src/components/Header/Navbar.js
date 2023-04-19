import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Nvabar() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link href="/" className="navbar-brand">
            SYNAP
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <div className={styles.button_loginregister}>
              <Link
                href="/"
                className="btn btn-outline-dark mx-2"
                data-bs-toggle="modal"
                data-bs-target="#loginModal"
              >
                Login
              </Link>
              <Link href="/register" className="btn btn-dark mx-2">
                Register
              </Link>
            </div>
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link href="/" className="nav-link active" aria-current="page">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/users" className="nav-link">
                  Users
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Account
                </Link>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdown"
                  id={styles.custom_dropdown}
                >
                  <li>
                    <Link className="dropdown-item" href="/user/blog">
                      My Blog
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="/user/profile">
                      Profile
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item" id={styles.login}>
                <Link
                  href="/"
                  className="btn btn-outline-dark"
                  data-bs-toggle="modal"
                  data-bs-target="#loginModal"
                >
                  Login
                </Link>
              </li>
              <li className="nav-item" id={styles.register}>
                <Link href="/register" className="btn btn-dark">
                  Register
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
