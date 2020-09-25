import axios from "axios";

const instance = axios.create({
  baseURL: "https://mern-whatsapp-akash.herokuapp.com/",
});

export default instance;
