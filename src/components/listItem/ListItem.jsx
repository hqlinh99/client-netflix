import "./listItem.scss";
import {
  PlayArrow,
  Add,
  ThumbUpAltOutlined,
  ThumbDownOutlined,
} from "@material-ui/icons";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import action from "../../redux/movies/actions/moviesActions";
import { axiosPublic, axiosPrivate } from "../../server/requestMethods";

export default function ListItem({ index, item }) {
  const [isHovered, setIsHovered] = useState(false);
  const dispatch = useDispatch();
  const { accessToken } = useSelector((state) => state.authData.currentUser);

  const [movie, setMovie] = useState();
  useEffect(() => {
    const getMovie = async () => {
      try {
        const res = await axiosPrivate.get("/movies/find/" + item, {
          headers: {
            token: accessToken,
          },
        });
        setMovie(res.data);
      } catch (err) {
        console.log(err.response);
      }
    };
    getMovie();
  }, [item, accessToken]);

  // const { movie } = useSelector((state) => state.movies);
  // useEffect(() => {
  //   const getMovie = async () => {
  //     try {
  //       dispatch(action.getMoviesStart({ item, accessToken }));
  //     } catch (err) {
  //       console.log(err.response);
  //     }
  //   };
  //   getMovie();
  // }, [dispatch, index, item, accessToken]);

  return (
    <Link to={{ pathname: "/watch", movie: movie }}>
      <div
        className="listItem"
        style={{ left: isHovered && index * 255 - 50 + index * 2.5 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img src={movie?.imgSm} alt="imgSm" />
        {isHovered && (
          <>
            <video src={movie?.trailer} autoPlay={true} loop />
            <div className="itemInfo">
              <div className="icons">
                <PlayArrow className="icon" />
                <Add className="icon" />
                <ThumbUpAltOutlined className="icon" />
                <ThumbDownOutlined className="icon" />
              </div>
              <div className="itemInfoTop">
                <span>{movie?.duration}</span>
                <span className="limit">+{movie?.limit}</span>
                <span>{movie?.year}</span>
              </div>
              <div className="desc">{movie?.desc}</div>
              <div className="genre">{movie?.genre}</div>
            </div>
          </>
        )}
      </div>
    </Link>
  );
}
