import axios from "axios";
import { JPA_API_URL } from "../constants/Constants";

class RatingDataService {
  updateRating(rating) {
    return axios.put(`${JPA_API_URL}/ratings`, rating);
  }
}

export default new ReviewDataService();
