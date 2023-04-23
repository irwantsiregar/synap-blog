import Link from "next/link";
import { FaSignOutAlt, FaBloggerB, FaUser } from "react-icons/fa";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import { getLocalStorage, putLocalStorage } from "@/api/user";

export default function Navbar() {
  const [auth, setAuth] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const user = getLocalStorage("authUser");
    setAuth(user);
  }, []);

  const logout = () => {
    putLocalStorage("authUser", "");
    router.push("/");
    setTimeout(() => router.reload(), 500);
  };

  return (
    <header className={styles.head}>
      <div className={styles.headerNav}>
        <nav
          className="navbar navbar-expand-lg navbar-light bg-light"
          id={styles.navBar}
        >
          <div className="container">
            <Link href="/" className="navbar-brand" id={styles.navBrand}>
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
              {!auth ? (
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
              ) : null}
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link
                    href="/"
                    className="nav-link active"
                    aria-current="page"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/users" className="nav-link">
                    Users
                  </Link>
                </li>
                {auth ? (
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
                        <Link
                          className="dropdown-item"
                          href={`/user/blog/${auth}`}
                        >
                          <FaBloggerB className="me-2" />
                          My Blog
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="dropdown-item"
                          href={`/user/profile/${auth}`}
                        >
                          <FaUser className="me-2" />
                          Profile
                        </Link>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <Link
                          className="dropdown-item"
                          href="#"
                          onClick={logout}
                        >
                          <FaSignOutAlt className="me-2" />
                          Logout
                        </Link>
                      </li>
                    </ul>
                  </li>
                ) : null}
                {!auth ? (
                  <>
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
                  </>
                ) : null}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
