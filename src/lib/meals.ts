import type { MealKey } from "@/store/plan";

type Label = { te: string; ting: string; en: string };

export type Dish = {
  id: string;
  label: Label;
  isVeg?: boolean;
  popular?: boolean;
};
export type DishCategory = { id: string; label: Label; dishes: Dish[] };

const v = (
  id: string,
  te: string,
  ting: string,
  en: string,
  extra: { isVeg?: boolean; popular?: boolean } = {},
): Dish => ({ id, label: { te, ting, en }, isVeg: extra.isVeg ?? true, popular: extra.popular });

export const mealCatalog: Record<MealKey, DishCategory[]> = {
  breakfast: [
    {
      id: "tiffin-classics",
      label: { te: "క్లాసిక్ టిఫిన్", ting: "Classic tiffin", en: "Classic tiffin" },
      dishes: [
        v("idli", "ఇడ్లీ", "Idli", "Idli", { popular: true }),
        v("vada", "వడ", "Vada", "Vada", { popular: true }),
        v("dosa", "దోస", "Dosa", "Dosa", { popular: true }),
        v("upma", "ఉప్మా", "Upma", "Upma"),
        v("pongal", "పొంగల్", "Pongal", "Pongal"),
      ],
    },
    {
      id: "tiffin-special",
      label: { te: "స్పెషల్", ting: "Special", en: "Special" },
      dishes: [
        v("puri", "పూరి", "Puri", "Puri"),
        v("poha", "ఆటుకులు", "Atukulu", "Poha"),
        v("bonda", "మైసూర్ బోండా", "Mysore bonda", "Mysore bonda"),
      ],
    },
  ],
  lunch: [
    {
      id: "traditional",
      label: { te: "సంప్రదాయ భోజనం", ting: "Traditional", en: "Traditional" },
      dishes: [
        v("rice", "అన్నం", "Annam", "Rice", { popular: true }),
        v("sambar", "సాంబార్", "Sambar", "Sambar", { popular: true }),
        v("rasam", "రసం", "Rasam", "Rasam"),
        v("curd", "పెరుగు", "Perugu", "Curd"),
        v("papad", "అప్పడం", "Appadam", "Papad"),
      ],
    },
    {
      id: "andhra",
      label: { te: "ఆంధ్రా స్పెషల్", ting: "Andhra special", en: "Andhra special" },
      dishes: [
        v("gongura", "గోంగూర పచ్చడి", "Gongura pachadi", "Gongura pachadi", { popular: true }),
        v("avakaya", "ఆవకాయ", "Avakaya", "Avakaya"),
        v("pulihora", "పులిహోర", "Pulihora", "Pulihora"),
        v("kodi-pulusu", "కోడి పులుసు", "Kodi pulusu", "Chicken pulusu", { isVeg: false }),
      ],
    },
    {
      id: "telangana",
      label: { te: "తెలంగాణా స్పెషల్", ting: "Telangana special", en: "Telangana special" },
      dishes: [
        v("sakinalu", "సకినాలు", "Sakinalu", "Sakinalu"),
        v("jonna-rotte", "జొన్న రొట్టె", "Jonna rotte", "Jowar roti"),
        v("mutton-curry", "మటన్ కూర", "Mutton curry", "Mutton curry", { isVeg: false }),
      ],
    },
    {
      id: "biryani",
      label: { te: "బిర్యానీ", ting: "Biryani", en: "Biryani" },
      dishes: [
        v("veg-biryani", "వెజ్ బిర్యానీ", "Veg biryani", "Veg biryani"),
        v("chicken-biryani", "చికెన్ బిర్యానీ", "Chicken biryani", "Chicken biryani", { isVeg: false, popular: true }),
        v("mutton-biryani", "మటన్ బిర్యానీ", "Mutton biryani", "Mutton biryani", { isVeg: false }),
        v("raita", "రైతా", "Raita", "Raita"),
        v("salan", "మిర్చి సాలన్", "Mirchi ka salan", "Mirchi ka salan"),
      ],
    },
    {
      id: "sweets",
      label: { te: "స్వీట్స్", ting: "Sweets", en: "Sweets" },
      dishes: [
        v("bobbatlu", "బొబ్బట్లు", "Bobbatlu", "Bobbatlu", { popular: true }),
        v("payasam", "పాయసం", "Payasam", "Payasam"),
        v("gulab-jamun", "గులాబ్ జామూన్", "Gulab jamun", "Gulab jamun", { popular: true }),
        v("double-meetha", "డబల్ కా మీఠా", "Double ka meetha", "Double ka meetha"),
      ],
    },
  ],
  snacks: [
    {
      id: "tea-time",
      label: { te: "టీ టైమ్", ting: "Tea time", en: "Tea time" },
      dishes: [
        v("tea", "టీ", "Tea", "Tea", { popular: true }),
        v("coffee", "ఫిల్టర్ కాఫీ", "Filter coffee", "Filter coffee"),
        v("samosa", "సమోసా", "Samosa", "Samosa", { popular: true }),
        v("mirchi-bajji", "మిర్చి బజ్జి", "Mirchi bajji", "Mirchi bajji"),
        v("punugulu", "పునుగులు", "Punugulu", "Punugulu"),
      ],
    },
  ],
  dinner: [
    {
      id: "north",
      label: { te: "నార్త్ ఇండియన్", ting: "North Indian", en: "North Indian" },
      dishes: [
        v("roti", "రోటీ", "Roti", "Roti"),
        v("paneer", "పనీర్ బటర్ మసాలా", "Paneer butter masala", "Paneer butter masala", { popular: true }),
        v("dal", "దాల్ తడ్కా", "Dal tadka", "Dal tadka"),
        v("naan", "నాన్", "Naan", "Naan"),
      ],
    },
    {
      id: "south-dinner",
      label: { te: "సౌత్ ఇండియన్", ting: "South Indian", en: "South Indian" },
      dishes: [
        v("chapati", "చపాతీ", "Chapati", "Chapati"),
        v("kurma", "కుర్మా", "Kurma", "Kurma"),
        v("veg-curry", "వెజ్ కూర", "Veg curry", "Veg curry"),
      ],
    },
  ],
};

export const mealOrder: MealKey[] = ["breakfast", "lunch", "snacks", "dinner"];

export function findDish(meal: MealKey, dishId: string): Dish | null {
  for (const cat of mealCatalog[meal]) {
    const d = cat.dishes.find((x) => x.id === dishId);
    if (d) return d;
  }
  return null;
}

export function findDishLabel(meal: MealKey, dishId: string): Label | null {
  return findDish(meal, dishId)?.label ?? null;
}
