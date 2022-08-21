import axios, { AxiosError } from 'axios';


export interface DomainException {
  message: string;
  status: number;
}

const api = axios.create({
  baseURL: String(import.meta.env.VITE_API_URL),
});

api.interceptors.response.use(
  response => response, // successful response
  (error: AxiosError) => {

    const response = error.response as any;
    if(response) {
      const domainError = error.response?.data as DomainException; 
      return Promise.reject(domainError);
    }

    return Promise.reject(error);
  }
  
)

export { api };
