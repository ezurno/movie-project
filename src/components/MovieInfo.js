import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function MovieInfo({ coverImg, title, summary, genres }) {
  return (
    <div>
      <img src={coverImg} alt={title} />
      <h2>
        <Link to="/movie">{title}</Link>
      </h2>

      <ul>
        {genres.map((gen) => (
          <li key={gen}>{gen}</li>
        ))}
      </ul>

      <p>{summary}</p>
    </div>
  );
}

MovieInfo.propTypes = {
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  summary: PropTypes.string.isRequired,
};

export default MovieInfo;
