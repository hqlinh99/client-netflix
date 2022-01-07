import "./navbar.scss";
import { Search } from "@material-ui/icons";
import { Notifications } from "@material-ui/icons";
import { ArrowDropDown } from "@material-ui/icons";
import { useState } from "react";
import { Link } from "react-router-dom";
import { logout } from "../../redux/apiCalls";
import { useSelector, useDispatch } from "react-redux";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const user = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();
  const accessToken = user?.accessToken;
  const userId = user?._id;

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  const handleLogout = () => {
    logout(dispatch, { accessToken, userId });
  };
  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
          <Link to="/" className="link">
            <span>Homepage</span>
          </Link>

          <Link to="/series" className="link">
            <span>Series</span>
          </Link>
          <Link to="/movies" className="link">
            <span>Movie</span>
          </Link>
          <span>New and Popular</span>
          <span>My list</span>
        </div>
        <div className="right">
          <Search className="icon" />
          <span>KID</span>
          <Notifications className="icon" />
          <img
            src="https://a-static.besthdwallpaper.com/oblivion-movie-poster-wallpaper-2048x1152-11407_49.jpg"
            alt=""
          />
          <div className="profile">
            <ArrowDropDown className="icon" />
            <div className="options">
              <span>Setting</span>
              <span onClick={handleLogout}>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
