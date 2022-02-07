import "./app.scss";
import Home from "./pages/home/Home";
import Watch from "./pages/watch/Watch";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useSelector } from "react-redux";

const App = () => {
  const auth = useSelector((state) => state.authData.currentUser?._id);
  return (
    <Router>
      <Switch>
        <Route path="/register">
          {!auth ? <Register /> : <Redirect to="/" />}
        </Route>

        <Route path="/login">
          <Login />
        </Route>

        {auth ? (
          <>
            <Route exact path="/">
              <Home />
            </Route>

            <Route path="/movies">
              <Home type="movie" />
            </Route>

            <Route path="/series">
              <Home type="series" />
            </Route>

            <Route path="/watch">
              <Watch />
            </Route>
          </>
        ) : (
          <Redirect to="/login" />
        )}
      </Switch>
    </Router>
  );
};

export default App;
