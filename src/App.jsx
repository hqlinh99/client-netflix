import "./app.scss";
import Home from "./pages/home/Home";
import Watch from "./pages/watch/Watch";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useSelector } from "react-redux";

const App = () => {
  const user = useSelector((state) => state.user.currentUser);;
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {user ? <Home /> : <Redirect to="/register" />}
        </Route>

        <Route path="/register">
          {!user ? <Register /> : <Redirect to="/" />}
        </Route>

        <Route path="/login">{!user ? <Login /> : <Redirect to="/" />}</Route>

        {user && (
          <>
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
        )}
      </Switch>
    </Router>
  );
};

export default App;
