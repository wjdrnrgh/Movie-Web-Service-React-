import PropTypes from "prop-types";
import styles from "../css/MovieDetail.module.css";

function MovieDetail({
  coverImg,
  title,
  year,
  rating,
  runtime,
  genres,
  downloadCount,
  downloadLink,
  description,
}) {
  return (
    <div className={styles.container}>
      <div>
        <img className={styles.coverImg}  src={coverImg}/>
      </div>
      <div className={styles.contentWrap}>
        <div className={styles.titleBox}>
        <h1>{title}</h1>
        <h2>{year}</h2>
        <ul>
        {genres.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <div className={styles.subInfo}>
      <p>RunTime : <span>{runtime}min</span></p>
      <p>Rate : <span>{rating}</span></p>
      <p>Download Count : <span>{downloadCount}</span></p>
      </div>
        </div>
      <div className={styles.dummyBox}></div>
      <p className={styles.description}>{description}</p>
      <div className={styles.dummyBox}></div>
      <div className={styles.downloadBox}>
        <h2>Download</h2>
      {downloadLink.map((item) => (
          <a  className={styles.downloadBtn} key={item.url} href={item.url}>{item.quality}</a>
      ))}
      </div>
      </div>
    </div>
  );
}

MovieDetail.protoTypes = {
  coverImg: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  runtime: PropTypes.number.isRequired,
  downloadCount: PropTypes.number.isRequired,
};
export default MovieDetail;
