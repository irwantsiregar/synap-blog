import Alert from "../Alert";

export default function NotFound() {
  return (
    <div className="container">
      <div className="404_notfound">
        <div className="row justify-content-center py-5 m-2">
          <div className="col-lg-6">
            <Alert color="warning">
              <div className="py-5 p-4 text-center">
                <h1>404</h1>
                <h2>Page Not Found !</h2>
                <p>
                  The page you are looking for was not found. Please visit other
                  available pages.
                </p>
              </div>
            </Alert>
          </div>
        </div>
      </div>
    </div>
  );
}
