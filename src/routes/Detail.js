import { useParams } from "react-router-dom"; //url의 변화된 값을 반환
import { useEffect, useState } from "react";
import MovieDetail from "../components/MovieDetail";
import Loading from "../components/Loding";
import Header from "../components/Header";

function Detail() {
  const [loading, setLoading] = useState(true);
  const [details, setDetails] = useState([]);
  const { id } = useParams();
  const getMovie = async () => {
    const response = await fetch(
      `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
    );
    const json = await response.json();
    setDetails(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <Header />
          <MovieDetail
            coverImg={details.large_cover_image}
            title={details.title_english}
            year={details.year}
            rating={details.rating}
            runtime={details.runtime}
            genres={details.genres}
            downloadCount={details.download_count}
            downloadLink={details.torrents}
            description={details.description_full}
          />
        </div>
      )}
    </div>
  );
}
export default Detail;
