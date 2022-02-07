import "./login.scss";
import Loading from "../../images/Spinner-1s-200px.svg";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import authActions from "../../redux/auth/actions/authActions";
import usersActions from "../../redux/users/actions/usersActions";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isLoading, errorMessage, currentUser } = useSelector(
    (state) => state.authData
  );
  useEffect(() => {
    dispatch(usersActions.clearUserStart());
  }, [dispatch]);

  useEffect(() => {
    dispatch(authActions.clearAuthStart());
  }, [dispatch]);

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(authActions.loginUserStart({ email, password }));
  };

  const history = useHistory();
  if (currentUser?._id) {
    history.push("/");
  }

  return (
    <div className="login">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
        </div>
      </div>
      <div className="container">
        <form>
          <h1>Sign In</h1>
          <div className="notify" style={{ color: "#FF0000" }}>
            {errorMessage}
          </div>
          <input
            type="email"
            placeholder="Email or username"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            style={{ cursor: isLoading === true ? "wait" : "default" }}
            className="loginButton"
            onClick={handleClick}
          >
            {isLoading === true ? (
              <img style={{ width: "40px" }} src={Loading} alt="loading..." />
            ) : (
              "Sign In"
            )}
          </button>
          <span>
            New to Netflix? &nbsp;
            <Link to="/register" className="link">
              <b>Sign up now</b>
            </Link>
          </span>
          <small>
            This page os protected by Google reCAPTCHA to ensure you're not a
            bot. <b>Learn more</b>
          </small>
        </form>
      </div>
    </div>
  );
}
