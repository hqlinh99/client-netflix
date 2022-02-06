import { ArrowBackOutlined } from "@material-ui/icons";
import { Link, useLocation } from "react-router-dom";
import "./watch.scss";
import Navbar from "../../components/navbar/Navbar";

export default function Watch() {
  const location = useLocation();
  const movie = location.movie;

  return (
    <div className="watch">
      <Navbar />
      <Link to="/">
        <div className="back">
          <ArrowBackOutlined />
          Home
        </div>
      </Link>
      <video
        className="video"
        autoPlay
        progress
        controls
        src={movie.video}
      />
    </div>
  );
}
