import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import { useEffect } from "react";
import "./featured.scss";
import { useSelector, useDispatch } from "react-redux";
import action from "../../redux/movies/actions/moviesActions";
import { axiosPrivate } from "../../server/requestMethods";
import { Link } from "react-router-dom";

export default function Featured({ type, setGenre }) {
  const { accessToken } = useSelector((state) => state.authData.currentUser);
  const movieRandom = useSelector((state) => state.movieData.random);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(action.getMovieRandomStart({ type, accessToken, axiosPrivate }));
  }, [dispatch, type, accessToken]);

  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "movie" ? "Movies" : "Series"}</span>
          <select
            name="genre"
            id="genre"
            onChange={(e) => setGenre(e.target.value)}
          >
            <option>Genre</option>
            <option value="Aventure">Adventure</option>
            <option value="Comedy">Comedy</option>
            <option value="Crime">Crime</option>
            <option value="Fantasy">Fantasy</option>
            <option value="Historical">Historical</option>
            <option value="Horror">Horror</option>
            <option value="Romance">Romance</option>
            <option value="Sci-fi">Sci-fi</option>
            <option value="Thriller">Thriller</option>
            <option value="Western">Western</option>
            <option value="Animation">Animation</option>
            <option value="Drama">Drama</option>
            <option value="Documentary">Documentary</option>
          </select>
        </div>
      )}
      <img src={movieRandom?.img} alt="" />
      <div className="info">
        <img width="100%" src={movieRandom?.imgTitle} alt="" />
        <span className="desc">{movieRandom?.desc}</span>
        <div className="buttons">
          <button className="play">
            <PlayArrow />
            <Link
              style={{ textDecoration: "none", color: "var(--main-color)", fontWeight: "500" }}
              to={{ pathname: "/watch", movie: movieRandom }}
            >
              <span>Play</span>
            </Link>
          </button>
          <button className="more">
            <InfoOutlined />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
}
