import "./Error404.css";
import { Link } from 'react-router-dom';

const Error404 = () => {
  return (
    <div className="error-page">
      <h1>Whoops! Lost in the Metaverse?</h1>
      <p>
        The page you're looking for seems to have gotten misplaced in the vast digital landscape. Don't worry, though, we can help you get back on track.
      </p>
      <div className="error-actions">
        <Link to="/" className="btn btn-primary">
          Go Home
        </Link>
        <Link to="/about" className="btn btn-secondary">
          Learn More About Us
        </Link>
      </div>
      <img
        src="https://i.imgur.com/qI9C9LZ.gif"
        alt="404 Error - Lost Astronaut"
        className="error-image"
      />
    </div>
  );
};

export default Error404;
