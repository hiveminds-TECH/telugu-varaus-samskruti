import { apiClient } from "./api";

export interface Inquiry {
  id?: string;
  name: string;
  mobile: string;
  email?: string;
  message: string;
  subject: string;
  createdAt?: string;
  status?: "pending" | "responded" | "closed";
}

export const inquiryService = {
  // Submit inquiry
  async submitInquiry(inquiry: Inquiry): Promise<Inquiry> {
    return apiClient.post<Inquiry>("/inquiries", inquiry);
  },

  // Get inquiry by ID
  async getInquiry(id: string): Promise<Inquiry> {
    return apiClient.get<Inquiry>(`/inquiries/${id}`);
  },

  // Get all user inquiries
  async listInquiries(): Promise<Inquiry[]> {
    return apiClient.get<Inquiry[]>("/inquiries");
  },

  // Update inquiry
  async updateInquiry(id: string, inquiry: Partial<Inquiry>): Promise<Inquiry> {
    return apiClient.put<Inquiry>(`/inquiries/${id}`, inquiry);
  },
};
