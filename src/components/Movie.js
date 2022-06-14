import PropTypes from "prop-types";
import { Link } from "react-router-dom"; //유저를 다른 페이지로 이동할 수 있도록 한다 (a 태그와 같은 동작 but a태그와는 다르게 페이지 새로고침을 하지 않는다)
import styles from "../css/Movie.module.css";

function Movie({ id, coverImg, title, year, genres }) {
  return (
    <div className={styles.movieItem}>
      <div className={styles.imgBox}>
        <img src={coverImg} alt={title} />
      </div>
      <div className={styles.titleBox}>
        <h2>
          <Link to={`/movie/${id}`}>{title}</Link>
        </h2>
        <span>{year}</span>
      </div>
      <div className={styles.genresBox}>
        <ul className={styles.genresList}>
          {genres.map((genres) => (
            <li className={styles.genresItem} key={genres}>
              {genres}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

Movie.protoTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
