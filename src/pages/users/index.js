/* eslint-disable no-console */
import Layout from "@/components/Layout";
import styles from "./Users.module.css";
import { receiveAllUser } from "@/features/users";

export default function Users({ users }) {
  // console.log(users);
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
            {users.map(({ id, name, status }) => (
              <div className="col-lg-4 col-md-6 p-3" key={id}>
                <div className="card shadow-sm">
                  <div className="card-image">
                    <div className="pt-3 d-flex  justify-content-center">
                      <img
                        src="https://fakeimg.pl/100x100"
                        alt="UserPicture"
                        className={styles.image_user}
                      />
                    </div>
                    <div className="card-body d-flex flex-column  justify-content-center align-items-center">
                      <h5 className="card-title">{name}</h5>
                      <p className="card-text text-center">
                        <span className="badge rounded-pill bg-success mx-3">
                          {status}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
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
