import { apiClient } from "./api";

export interface Dish {
  id: string;
  label: { te: string; ting: string; en: string };
  isVeg?: boolean;
  popular?: boolean;
  cuisine?: string;
}

export interface MealCategory {
  id: string;
  label: { te: string; ting: string; en: string };
  dishes: Dish[];
}

export interface MealCatalog {
  breakfast: MealCategory[];
  lunch: MealCategory[];
  snacks: MealCategory[];
  dinner: MealCategory[];
}

export const menuService = {
  // Get meal catalog
  async getMealCatalog(): Promise<MealCatalog> {
    return apiClient.get<MealCatalog>("/menu/catalog");
  },

  // Search dishes
  async searchDishes(query: string, mealType?: string): Promise<Dish[]> {
    return apiClient.get<Dish[]>("/menu/dishes/search", {
      params: { query, mealType },
    });
  },

  // Get dish by ID
  async getDish(id: string): Promise<Dish> {
    return apiClient.get<Dish>(`/menu/dishes/${id}`);
  },

  // Get dishes by meal type
  async getDishesByMealType(mealType: string): Promise<Dish[]> {
    return apiClient.get<Dish[]>(`/menu/dishes?mealType=${mealType}`);
  },
};
