import { apiClient } from "./api";

import type { Lang } from "@/i18n";

export interface EventPlan {
  id?: string;
  language: Lang;
  occasion: string;
  side?: string;
  name: string;
  mobile: string;
  startDate: string;
  endDate: string;
  mealsByDay: Record<string, Record<string, string[]>>;
  guests: number;
  venueType: string;
  address: string;
  createdAt?: string;
  updatedAt?: string;
}

export const eventService = {
  // Create new event plan
  async createPlan(plan: EventPlan): Promise<EventPlan> {
    return apiClient.post<EventPlan>("/events", plan);
  },

  // Get event plan
  async getPlan(id: string): Promise<EventPlan> {
    return apiClient.get<EventPlan>(`/events/${id}`);
  },

  // Update event plan
  async updatePlan(id: string, plan: Partial<EventPlan>): Promise<EventPlan> {
    return apiClient.put<EventPlan>(`/events/${id}`, plan);
  },

  // Delete event plan
  async deletePlan(id: string): Promise<void> {
    return apiClient.delete<void>(`/events/${id}`);
  },

  // List user's event plans
  async listPlans(): Promise<EventPlan[]> {
    return apiClient.get<EventPlan[]>("/events");
  },

  // Submit event plan for confirmation
  async submitPlan(id: string): Promise<EventPlan> {
    return apiClient.post<EventPlan>(`/events/${id}/submit`, {});
  },
};
