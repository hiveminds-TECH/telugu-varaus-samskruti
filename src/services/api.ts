import axios, { AxiosInstance, AxiosError } from "axios";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000/api";

class ApiClient {
  private client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      baseURL: API_URL,
      headers: {
        "Content-Type": "application/json",
      },
      timeout: 30000,
    });

    // Add response interceptor for error handling
    this.client.interceptors.response.use(
      (response) => response,
      (error: AxiosError) => {
        console.error("API Error:", error.response?.data || error.message);
        return Promise.reject(error);
      },
    );
  }

  async get<T>(path: string, config?: any): Promise<T> {
    const response = await this.client.get<T>(path, config);
    return response.data;
  }

  async post<T>(path: string, data?: any, config?: any): Promise<T> {
    const response = await this.client.post<T>(path, data, config);
    return response.data;
  }

  async put<T>(path: string, data?: any, config?: any): Promise<T> {
    const response = await this.client.put<T>(path, data, config);
    return response.data;
  }

  async patch<T>(path: string, data?: any, config?: any): Promise<T> {
    const response = await this.client.patch<T>(path, data, config);
    return response.data;
  }

  async delete<T>(path: string, config?: any): Promise<T> {
    const response = await this.client.delete<T>(path, config);
    return response.data;
  }
}

export const apiClient = new ApiClient();
