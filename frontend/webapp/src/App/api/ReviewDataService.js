import axios from "axios";
import { JPA_API_URL } from "../constants/Constants";

class ReviewDataService {
  getReviewsByUser(username) {
    return axios.get(`${JPA_API_URL}/reviewer/${username}`);
  }

  updateRevies(review) {
    return axios.put(`${JPA_API_URL}/reviews`, review);
  }
}

export default new ReviewDataService();
