// axios default base url
import axios from "axios";

// instance of axios
const axiosInstance = axios.create({
  baseURL: `http://localhost:8080`,
  headers: {
    Accepted: "application/json",
    "Content-Type": "application/json",
  },
});

export default axiosInstance;