import axios from "axios";
import { JPA_API_URL } from "../constants/Constants";

class UserDataService {
  saveMovieToWatchList(username, movieId) {
    return axios.post(`${JPA_API_URL}user/${username}/watchlist`, movieId);
  }

  saveMovieToWatched(username, movieId) {
    return axios.post(`${JPA_API_URL}user/${username}/watched`, movieId);
  }

  deleteMovieFromWatchList(username, id) {
    return axios.delete(`${JPA_API_URL}user/${username}/watchlist/${id}`);
  }

  deleteMovieFromWatched(username, id) {
    return axios.delete(`${JPA_API_URL}user/${username}/watched/${id}`);
  }
}

export default new UserDataService();
