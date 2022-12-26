import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./MovieInfo.module.css";

function MovieInfo({ coverImg, id, title, year, summary, genres }) {
  return (
    <div className={styles.movie}>
      <img src={coverImg} alt={title} className={styles.movie_img} />
      <div>
        <h2 className={styles.movie_title}>
          <Link to={`/movie/${id}`}>{title}</Link>
        </h2>
        <h3 className={styles.movie_year}>{year}</h3>

        <p>{summary.length < 235 ? summary : `${summary.slice(0, 235)}...`}</p>
        <ul className={styles.movie_genres}>
          {genres.map((gen) => (
            <li key={gen}>{gen}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

MovieInfo.propTypes = {
  coverImg: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  summary: PropTypes.string.isRequired,
};

export default MovieInfo;
