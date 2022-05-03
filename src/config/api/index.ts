import axios from 'axios';

const api = axios.create({
  baseURL: String(import.meta.env.VITE_API_URL),
});

export { api };
