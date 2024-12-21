import axios from "axios";
import https from "https";

const agent = new https.Agent({ rejectUnauthorized: false });
const BASE_URL = `${process.env.NEXT_PUBLIC_API_URL}/api`;

const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: "*/*",
  },
  httpAgent: agent,
});

export default apiClient;
