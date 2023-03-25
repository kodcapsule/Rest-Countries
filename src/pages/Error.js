import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="container">
      <h1>Page Not Found | 404 Error</h1>
      <h3>
        <Link to="/"> Go to Home </Link>
      </h3>
    </div>
  );
};

export default Error;
