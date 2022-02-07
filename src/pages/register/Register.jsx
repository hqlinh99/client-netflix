import "./register.scss";
import { Link } from "react-router-dom";
import Loading from "../../images/Spinner-1s-200px.svg";
import { useRef, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import action from "../../redux/users/actions/usersActions";
import { useDispatch, useSelector } from "react-redux";

export default function Register() {
  const dispatch = useDispatch();
  const { isLoading, errorMessage, user } = useSelector((state) => state.userData);

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const emailRef = useRef();

  const handleStart = () => {
    setEmail(emailRef.current.value);
  };

  const handleFinish = async (e) => {
    e.preventDefault();
    dispatch(action.createUserStart({ email, username, password }));
  };

  if (user?.newUser) {
    history.push("/login");
  }

  if (errorMessage?.slice(0, 7) === '"email"') {
    setTimeout(() => {
      window.location.reload();
    }, 3000);
  }

  useEffect(() => {
    dispatch(action.clearUserStart());
  }, [dispatch]);

  return (
    <div className="register">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
          <Link to="/login">
            <button type="button" className="loginButton">
              Sign In
            </button>
          </Link>
        </div>
      </div>
      <div className="container">
        <h1>Unlimited movie, TV show, and more.</h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        {!email ? (
          <div className="inputGetStarted">
            <input type="email" placeholder="email address" ref={emailRef} />
            <button className="registerButton" onClick={handleStart}>
              Get Started
            </button>
          </div>
        ) : (
          <form className="inputStart">
            <input
              type="username"
              placeholder="username"
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="registerButton" onClick={handleFinish}>
              {isLoading === true ? (
                <img style={{ width: "40px" }} src={Loading} alt="loading..." />
              ) : (
                "Sign In"
              )}
            </button>
          </form>
        )}
        <div className="notify" style={{ color: "#FF0000", marginTop: "10px" }}>
          {errorMessage}
        </div>
      </div>
    </div>
  );
}
