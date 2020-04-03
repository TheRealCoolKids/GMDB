import axios from "axios";
import { JPA_API_URL } from "../constants/Constants";

class MovieDataService {
  retrieveAllMovies() {
    return axios.get(`${JPA_API_URL}/movies`);
  }

  retrieveMovie(id) {
    return axios.get(`${JPA_API_URL}/movies/${id}`);
  }

  updateMovie(movie) {
    return axios.put(`${JPA_API_URL}/movies`, movie);
  }

  saveMovie(movie) {
    return axios.post(`${JPA_API_URL}/movies`, movie);
  }

  saveReview(id, review) {
    return axios.post(`${JPA_API_URL}/movies/${id}/reviews`, review);
  }

  saveRating(id, rating) {
    return axios.post(`${JPA_API_URL}/movies/${id}/ratings`, rating);
  }

  deleteReview(movieId, reviewId) {
    return axios.delete(`${JPA_API_URL}/movies/${movieId}/reviews/${reviewId}`);
  }

  deleteRating(movieId, ratingId) {
    return axios.delete(`${JPA_API_URL}/movies/${movieId}/ratings/${ratingId}`);
  }

  deleteMovie(movieId) {
    return axios.delete(`${JPA_API_URL}/movies/${movieId}`);
  }
}

export default new MovieDataService();
