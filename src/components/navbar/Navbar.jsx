import "./navbar.scss";
import { Search } from "@material-ui/icons";
import { Notifications } from "@material-ui/icons";
import { ArrowDropDown } from "@material-ui/icons";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import action from "../../redux/auth/actions/authActions";
import { axiosPrivate } from "../../server/requestMethods";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { currentUser } = useSelector((state) => state.authData);
  const userId = currentUser?._id;
  const accessToken = currentUser?.accessToken;

  const dispatch = useDispatch();

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  const handleLogout = () => {
    dispatch(action.logoutUserStart({ accessToken, userId, axiosPrivate }));
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
            <span className="navbarMainLink">Series</span>
          </Link>
          <Link to="/movies" className="link">
            <span className="navbarMainLink">Movie</span>
          </Link>
          <span>New and Popular</span>
          <span>My list</span>
        </div>
        <div className="right">
          <Search className="icon" />
          <span>KID</span>
          <Notifications className="icon" />
          <img src={currentUser?.profilePic} alt="profilePic" />
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
