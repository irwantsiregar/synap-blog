import Link from "next/link";
import Image from "next/image";
import { FaRegEdit } from "react-icons/fa";
import Layout from "@/components/Layout";
import { receiveUserProfile } from "@/features/user";

export default function Profile({ userActive }) {
  const { id, name, email, status, gender } = userActive;

  return (
    <Layout>
      <div className="container">
        <div className="user_profile">
          <div className="row justify-content-center py-5 m-3">
            <div className="col-lg-6">
              <div className="card shadow-sm py-2 px-3">
                <div className="edit_profile text-end">
                  <Link href={`/user/profile/update/${id}`}>
                    <span className="p-1 bg-outline-secondary">
                      <FaRegEdit size={22} />
                    </span>
                  </Link>
                </div>
                <div className="card-image">
                  <div className="d-flex  justify-content-center">
                    <Image
                      src={`/avatar/${
                        gender === "male" ? "male.png" : "female.png"
                      }`}
                      alt={name}
                      width={170}
                      height={160}
                      className="rounded-circle"
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
