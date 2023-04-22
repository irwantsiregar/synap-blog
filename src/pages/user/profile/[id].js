import Link from "next/link";
import Layout from "@/components/Layout";
import { receiveUserProfile } from "@/features/user";

export default function Profile({ userActive }) {
  const { name, email, status } = userActive;

  return (
    <Layout>
      <div className="container">
        <div className="user_profile">
          <div className="row justify-content-center py-5 m-3">
            <div className="col-lg-6">
              <div className="card shadow-sm py-2 px-3">
                <div className="edit_profile text-end">
                  <Link href="/user/profile/update">
                    <span>Edit</span>
                  </Link>
                </div>
                <div className="card-image">
                  <div className="d-flex  justify-content-center">
                    <img
                      src="https://fakeimg.pl/100x100"
                      alt="ProfilePicture"
                      className="rounded-circle"
                      width={150}
                      height={150}
                    />
                  </div>
                  <div className="card-body d-flex flex-column  justify-content-center align-items-center">
                    <p className="card-text">
                      <span
                        className={`badge rounded-pill bg-${
                          status === "active" ? "success" : "secondary"
                        } mx-3`}
                      >
                        {status}
                      </span>
                    </p>
                    <h3 className="card-title">{name}</h3>
                    <h6 className="card-title">{email}</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps({ params }) {
  const userActive = await receiveUserProfile(params.id);

  return {
    props: {
      userActive,
    },
  };
}
