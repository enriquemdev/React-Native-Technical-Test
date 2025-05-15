import axios, { AxiosError } from "axios";

export const api = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_URL,
  timeout: 10000,
});

// Interceptor for global error handling
api.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    let message = "Error en la solicitud";
    if (error.response) {
      message = `Error ${error.response.status}: ${error.response.data?.title || "Desconocido"}`;
    } else if (error.request) {
      message = "No se recibió respuesta del servidor";
    } else {
      message = error.message;
    }
    console.error(message);
    return Promise.reject({ message });
  },
);
