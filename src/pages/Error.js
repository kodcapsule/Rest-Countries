import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="container">
      <h1>Page Not Found | 404 Error</h1>
      <p>
        <Link to="/"> Go to Home. </Link>
      </p>
    </div>
  );
};

export default Error;
