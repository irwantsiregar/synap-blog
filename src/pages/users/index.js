import Image from "next/image";
import Layout from "@/components/Layout";
import Alert from "@/components/Alert";
import styles from "./Users.module.css";
import { receiveAllUser } from "@/features/users";

export default function Users({ users }) {
  return (
    <Layout>
      <div className="container">
        <div className={styles.users}>
          <div className="row my-3 justify-content-end">
            <div className="col-lg-3">
              <input
                className="form-control"
                type="search"
                placeholder="Search.."
                aria-label="search"
              />
            </div>
          </div>
          <div className="row">
            {users.length ? (
              users.map(({ id, name, status, gender }) => (
                <div className="col-lg-4 col-md-6 p-3" key={id}>
                  <div className="card shadow-sm">
                    <div className="card-image">
                      <div className="pt-3 d-flex  justify-content-center">
                        <Image
                          src={`/avatar/${
                            gender === "male" ? "male.png" : "female.png"
                          }`}
                          alt={name}
                          width={90}
                          height={80}
                          className="rounded-circle"
                        />
                      </div>
                      <div className="card-body d-flex flex-column  justify-content-center align-items-center">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text text-center">
                          <span
                            className={`badge rounded-pill bg-${
                              status === "active" ? "success" : "secondary"
                            } mx-3`}
                          >
                            {status}
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <Alert color="secondary">Users not available !</Alert>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  const users = await receiveAllUser();
  return {
    props: {
      users,
    },
  };
}
