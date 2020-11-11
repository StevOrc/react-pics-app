import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID i0JMAqSb1vEKb7vSF-PKtwwMtJjJOEp08wVyYQcGhIg",
  },
});
