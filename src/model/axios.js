import axios from "axios";

const blogFetch = axios.create({
  baseURL: "https://trabalho-individual-m3.onrender.com",
  headers: {
    "Content-Type": "application/json",
  },
});

export default blogFetch;