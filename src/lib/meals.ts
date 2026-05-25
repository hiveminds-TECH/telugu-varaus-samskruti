import type { MealKey } from "@/store/plan";

type Label = { te: string; ting: string; en: string };

export type Dish = { id: string; label: Label };
export type DishCategory = { id: string; label: Label; dishes: Dish[] };

export const mealCatalog: Record<MealKey, DishCategory[]> = {
  breakfast: [
    {
      id: "tiffin-classics",
      label: { te: "క్లాసిక్ టిఫిన్", ting: "Classic tiffin", en: "Classic tiffin" },
      dishes: [
        { id: "idli", label: { te: "ఇడ్లీ", ting: "Idli", en: "Idli" } },
        { id: "vada", label: { te: "వడ", ting: "Vada", en: "Vada" } },
        { id: "dosa", label: { te: "దోస", ting: "Dosa", en: "Dosa" } },
        { id: "upma", label: { te: "ఉప్మా", ting: "Upma", en: "Upma" } },
        { id: "pongal", label: { te: "పొంగల్", ting: "Pongal", en: "Pongal" } },
      ],
    },
    {
      id: "tiffin-special",
      label: { te: "స్పెషల్", ting: "Special", en: "Special" },
      dishes: [
        { id: "puri", label: { te: "పూరి", ting: "Puri", en: "Puri" } },
        { id: "poha", label: { te: "ఆటుకులు", ting: "Atukulu", en: "Poha" } },
        { id: "bonda", label: { te: "మైసూర్ బోండా", ting: "Mysore bonda", en: "Mysore bonda" } },
      ],
    },
  ],
  lunch: [
    {
      id: "traditional",
      label: { te: "సంప్రదాయ భోజనం", ting: "Traditional", en: "Traditional" },
      dishes: [
        { id: "rice", label: { te: "అన్నం", ting: "Annam", en: "Rice" } },
        { id: "sambar", label: { te: "సాంబార్", ting: "Sambar", en: "Sambar" } },
        { id: "rasam", label: { te: "రసం", ting: "Rasam", en: "Rasam" } },
        { id: "curd", label: { te: "పెరుగు", ting: "Perugu", en: "Curd" } },
        { id: "papad", label: { te: "అప్పడం", ting: "Appadam", en: "Papad" } },
      ],
    },
    {
      id: "andhra",
      label: { te: "ఆంధ్రా స్పెషల్", ting: "Andhra special", en: "Andhra special" },
      dishes: [
        { id: "gongura", label: { te: "గోంగూర పచ్చడి", ting: "Gongura pachadi", en: "Gongura pachadi" } },
        { id: "avakaya", label: { te: "ఆవకాయ", ting: "Avakaya", en: "Avakaya" } },
        { id: "pulihora", label: { te: "పులిహోర", ting: "Pulihora", en: "Pulihora" } },
        { id: "kodi-pulusu", label: { te: "కోడి పులుసు", ting: "Kodi pulusu", en: "Chicken pulusu" } },
      ],
    },
    {
      id: "telangana",
      label: { te: "తెలంగాణా స్పెషల్", ting: "Telangana special", en: "Telangana special" },
      dishes: [
        { id: "sakinalu", label: { te: "సకినాలు", ting: "Sakinalu", en: "Sakinalu" } },
        { id: "jonna-rotte", label: { te: "జొన్న రొట్టె", ting: "Jonna rotte", en: "Jowar roti" } },
        { id: "mutton-curry", label: { te: "మటన్ కూర", ting: "Mutton curry", en: "Mutton curry" } },
      ],
    },
    {
      id: "biryani",
      label: { te: "బిర్యానీ", ting: "Biryani", en: "Biryani" },
      dishes: [
        { id: "veg-biryani", label: { te: "వెజ్ బిర్యానీ", ting: "Veg biryani", en: "Veg biryani" } },
        { id: "chicken-biryani", label: { te: "చికెన్ బిర్యానీ", ting: "Chicken biryani", en: "Chicken biryani" } },
        { id: "mutton-biryani", label: { te: "మటన్ బిర్యానీ", ting: "Mutton biryani", en: "Mutton biryani" } },
        { id: "raita", label: { te: "రైతా", ting: "Raita", en: "Raita" } },
        { id: "salan", label: { te: "మిర్చి సాలన్", ting: "Mirchi ka salan", en: "Mirchi ka salan" } },
      ],
    },
    {
      id: "sweets",
      label: { te: "స్వీట్స్", ting: "Sweets", en: "Sweets" },
      dishes: [
        { id: "bobbatlu", label: { te: "బొబ్బట్లు", ting: "Bobbatlu", en: "Bobbatlu" } },
        { id: "payasam", label: { te: "పాయసం", ting: "Payasam", en: "Payasam" } },
        { id: "gulab-jamun", label: { te: "గులాబ్ జామూన్", ting: "Gulab jamun", en: "Gulab jamun" } },
        { id: "double-meetha", label: { te: "డబల్ కా మీఠా", ting: "Double ka meetha", en: "Double ka meetha" } },
      ],
    },
  ],
  snacks: [
    {
      id: "tea-time",
      label: { te: "టీ టైమ్", ting: "Tea time", en: "Tea time" },
      dishes: [
        { id: "tea", label: { te: "టీ", ting: "Tea", en: "Tea" } },
        { id: "coffee", label: { te: "ఫిల్టర్ కాఫీ", ting: "Filter coffee", en: "Filter coffee" } },
        { id: "samosa", label: { te: "సమోసా", ting: "Samosa", en: "Samosa" } },
        { id: "mirchi-bajji", label: { te: "మిర్చి బజ్జి", ting: "Mirchi bajji", en: "Mirchi bajji" } },
        { id: "punugulu", label: { te: "పునుగులు", ting: "Punugulu", en: "Punugulu" } },
      ],
    },
  ],
  dinner: [
    {
      id: "north",
      label: { te: "నార్త్ ఇండియన్", ting: "North Indian", en: "North Indian" },
      dishes: [
        { id: "roti", label: { te: "రోటీ", ting: "Roti", en: "Roti" } },
        { id: "paneer", label: { te: "పనీర్ బటర్ మసాలా", ting: "Paneer butter masala", en: "Paneer butter masala" } },
        { id: "dal", label: { te: "దాల్ తడ్కా", ting: "Dal tadka", en: "Dal tadka" } },
        { id: "naan", label: { te: "నాన్", ting: "Naan", en: "Naan" } },
      ],
    },
    {
      id: "south-dinner",
      label: { te: "సౌత్ ఇండియన్", ting: "South Indian", en: "South Indian" },
      dishes: [
        { id: "chapati", label: { te: "చపాతీ", ting: "Chapati", en: "Chapati" } },
        { id: "kurma", label: { te: "కుర్మా", ting: "Kurma", en: "Kurma" } },
        { id: "veg-curry", label: { te: "వెజ్ కూర", ting: "Veg curry", en: "Veg curry" } },
      ],
    },
  ],
};

export const mealOrder: MealKey[] = ["breakfast", "lunch", "snacks", "dinner"];

export function findDishLabel(meal: MealKey, dishId: string): Label | null {
  for (const cat of mealCatalog[meal]) {
    const d = cat.dishes.find((x) => x.id === dishId);
    if (d) return d.label;
  }
  return null;
}
