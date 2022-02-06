import { axiosPublic } from "./requestMethods";

class apiCalls {
  //Users
  loginUser = (payload) => axiosPublic.post("/auth/login", payload);
  logoutUser = (payload) =>
    payload.axiosPrivate.get(`/auth/logout/${payload.userId}`, {
      headers: { token: payload.accessToken },
    });
  getUserId = (payload) =>
    payload.axiosPrivate.get(`/users/find/${payload._id}`, {
      headers: { token: payload.accessToken },
    });
  createUser = (user) => axiosPublic.post("/auth/register", user);
  updateUser = (payload) =>
    axiosPublic.put(`/users/${payload.userId}`, payload.formValue);

  //Movies
  getMovies = (payload) =>
    axiosPublic.get("/movies/find/" + payload.item, {
      headers: { token: payload.accessToken },
    });
  getMovieRandom = (payload) =>
    payload.axiosPrivate.get(`/movies/random?type=${payload.type}`, {
      headers: { token: payload.accessToken },
    });

  //Lists
  getListsRandom = (payload) =>
    payload.axiosPrivate.get(
      `/lists${payload.type ? "?type=" + payload.type : ""}${
        payload.genre ? "&genre=" + payload.genre : ""
      }`,
      {
        headers: { token: payload.accessToken },
      }
    );
}

export default new apiCalls();
