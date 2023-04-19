import Link from "next/link";
import Layout from "@/components/Layout";

export default function Profile() {
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
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className="card-body d-flex flex-column  justify-content-center align-items-center">
                    <p className="card-text">
                      <span className="badge rounded-pill bg-success mx-3">
                        Active
                      </span>
                    </p>
                    <h3 className="card-title">Irwanto SIregar</h3>
                    <h6 className="card-title">irwantsIregar@gmail.com</h6>
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
