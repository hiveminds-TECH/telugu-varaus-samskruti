export type Lang = "te" | "ting" | "en";

type Entry = { te: string; ting: string; en: string };

export const strings = {
  brand: { te: "క్యాటర్‌ఫ్లో", ting: "CaterFlow", en: "CaterFlow" },
  tagline: {
    te: "మీ ఫంక్షన్ ఫుడ్ ప్లాన్ సులభంగా",
    ting: "Mee function food, slow ga, hayi ga",
    en: "Plan your celebration food, warmly",
  },
  pickLang: {
    te: "మీకు ఏ భాష ఇష్టం?",
    ting: "Mee comfortable language enti?",
    en: "Which language feels like home?",
  },
  pickLangSub: {
    te: "మీరు ఎలా మాట్లాడితే అలాగే",
    ting: "Mee comfort ki match avtam",
    en: "We'll talk to you in whatever feels easy",
  },
  welcomeKicker: { te: "నమస్తే 🙏", ting: "Namaskaram 🙏", en: "Welcome 🙏" },
  welcomeTitle: {
    te: "మీ వేడుక. మన ప్లానింగ్.",
    ting: "Mee veduka. Manam kalisi plan chedam.",
    en: "Your celebration. Planned together.",
  },
  welcomeBody: {
    te: "ఒక్కో అడుగు, ఒక్కో ప్రశ్న. మెల్లగా, హాయిగా.",
    ting: "Okko adugu, okko question. Slow ga, hayi ga.",
    en: "One question at a time. Calm and joyful.",
  },
  startBtn: { te: "మొదలెడదాం", ting: "ika start chesedaam", en: "Let's begin" },
  continueBtn: {
    te: "మళ్లీ కంటిన్యూ చేద్దాం",
    ting: "Aagina chote nundi continue cheddam",
    en: "Continue where you left off",
  },
  startFresh: { te: "కొత్తగా మొదలెట్టు", ting: "Fresh ga start cheddam", en: "Start fresh" },

  occasionQ: { te: "మీది ఏ ఫంక్షన్?", ting: "function ento?", en: "What's the occasion?" },
  occasionSub: {
    te: "చిన్నదైనా, పెద్దదైనా — ఆనందమే ముఖ్యం",
    ting: "Chinna function ayina, peddha functon ayina — happiness matters",
    en: "Big or small, every celebration matters",
  },
  wedding: { te: "పెళ్లి", ting: "Pelli", en: "Wedding" },
  birthday: { te: "పుట్టినరోజు", ting: "Birthday", en: "Birthday" },
  housewarming: { te: "గృహప్రవేశం", ting: "Gruhapravesham", en: "Housewarming" },
  religious: { te: "పూజ / పండుగ", ting: "Pooja / Pandaga", en: "Religious / Festival" },
  corporate: { te: "ఆఫీస్ ఫంక్షన్", ting: "Office function", en: "Corporate" },
  other: { te: "ఇంకేదైనా", ting: "Inkedaina", en: "Something else" },

  sideQ: { te: "మీరు ఎవరి తరఫున?", ting: "Meeru evari taraphu?", en: "Which side are you from?" },
  sideSub: {
    te: "మీ తరఫు చెబితే మెనూ సరిగ్గా ప్లాన్ చేస్తాం",
    ting: "Meru eyy tarapho cheppite menu correct ga plan cheddam",
    en: "Helps us plan the right menu",
  },
  brideSide: { te: "అమ్మాయి తరఫు", ting: "Ammayi taraphu", en: "Bride's side" },
  groomSide: { te: "అబ్బాయి తరఫు", ting: "Abbayi taraphu", en: "Groom's side" },
  bothSides: { te: "రెండు వైపులా", ting: "Rendu vaipula", en: "Both sides" },

  introQ: { te: "మీ పేరు చెప్పండి", ting: "Mee peru cheppandi", en: "What should we call you?" },
  introSub: {
    te: "మీ పేరుతో పిలవడం హాయి",
    ting: "Mee peru tho matladatam baguntundi",
    en: "So we can keep this personal",
  },
  namePlaceholder: { te: "మీ పేరు", ting: "Mee peru", en: "Your name" },

  datesQ: { te: "ఎన్ని రోజులు ఫంక్షన్?", ting: "Enni rojulu function?", en: "Which days?" },
  datesSub: {
    te: "ఒక్కరోజైనా, వారం రోజులైనా",
    ting: "Okka roju ayina, week ayina",
    en: "One day or a whole week",
  },
  startDate: { te: "మొదటి రోజు", ting: "Start date", en: "Start date" },
  endDate: { te: "చివరి రోజు", ting: "End date", en: "End date" },

  mealsQ: { te: "ఏం వడ్డిద్దాం?", ting: "Em vaddidaam?", en: "What shall we serve?" },
  mealsSub: {
    te: "ప్రతి రోజు, ప్రతి భోజనం — మెల్లగా",
    ting: "Prati roju, prati meal — slow ga select cheskondi",
    en: "Pick dishes for each day and meal",
  },
  day: { te: "రోజు", ting: "Day", en: "Day" },
  breakfast: { te: "టిఫిన్", ting: "Tiffin", en: "Breakfast" },
  lunch: { te: "మధ్యాహ్నం భోజనం", ting: "Lunch", en: "Lunch" },
  snacks: { te: "సాయంత్రం స్నాక్స్", ting: "Evening snacks", en: "Evening snacks" },
  dinner: { te: "రాత్రి భోజనం", ting: "Dinner", en: "Dinner" },
  addCustom: { te: "ఇంకొకటి జోడించండి", ting: "Inkokati add cheyandi", en: "Add custom dish" },
  customPlaceholder: { te: "డిష్ పేరు", ting: "Dish name", en: "Dish name" },
  add: { te: "జోడించు", ting: "Add", en: "Add" },

  guestsQ: {
    te: "ఎంత మంది వస్తున్నారు?",
    ting: "Enta mandi vastunnaru?",
    en: "How many guests?",
  },
  guestsSub: {
    te: "సుమారు చెప్పినా చాలు",
    ting: "Approximate ga cheppina chalu — later change cheskovachu",
    en: "An estimate is fine — you can update later",
  },
  guestsUnit: { te: "మంది", ting: "mandi", en: "guests" },

  venueQ: { te: "ఎక్కడ చేస్తున్నారు?", ting: "Ekkada chesthunnaru?", en: "Where's the venue?" },
  venueSub: {
    te: "హాల్, ఇల్లు, బయట — ఎక్కడైనా",
    ting: "Hall, illu, outside — ekkadaina sare",
    en: "Hall, home, outdoor — wherever feels right",
  },
  functionHall: { te: "ఫంక్షన్ హాల్", ting: "Function hall", en: "Function hall" },
  home: { te: "ఇల్లు", ting: "Illu", en: "Home" },
  outdoor: { te: "బయట / పందిరి", ting: "Outdoor / Pandiri", en: "Outdoor" },
  temple: { te: "గుడి", ting: "Gudi", en: "Temple" },
  addressPlaceholder: {
    te: "చిరునామా (ఆప్షనల్)",
    ting: "Address (optional)",
    en: "Address (optional)",
  },

  reviewQ: { te: "మన ఈవెంట్ నోట్‌బుక్", ting: "Mana event notebook", en: "Your event notebook" },
  reviewSub: {
    te: "అన్నీ ఒక చోట. ఎక్కడైనా మార్చుకోవచ్చు.",
    ting: "Anni okka chota. Ekkadaina edit cheskovachu.",
    en: "Everything in one place.",
  },
  confirmBtn: { te: "ఇవే ఫైనల్", ting: "Ivve final", en: "Confirm plan" },
  edit: { te: "మార్చు", ting: "Edit", en: "Edit" },

  confirmTitle: { te: "హాయ్! ప్లాన్ రెడీ ✨", ting: "Super! Plan ready ✨", en: "All set ✨" },
  confirmBody: {
    te: "మెల్లగా ప్లాన్ చేశాం. ఇప్పుడు ఎంజాయ్ చేయండి.",
    ting: "Hayi ga plan chesam. Ippudu function enjoy cheyandi.",
    en: "We planned this together. Now go enjoy your celebration.",
  },
  newPlan: { te: "కొత్త ప్లాన్", ting: "New plan", en: "Start a new plan" },

  notebookTitle: { te: "ఈవెంట్ నోట్‌బుక్", ting: "Event Notebook", en: "Event Notebook" },
  notebookEmpty: {
    te: "ఇక్కడ మీ ప్లాన్ నెమ్మదిగా కనిపిస్తుంది…",
    ting: "Ikkada mee plan slow ga kanipisthundi…",
    en: "Your plan will gently fill in here…",
  },
  saved: { te: "సేవ్ అయింది ✓", ting: "Saved ✓", en: "Saved ✓" },
  back: { te: "వెనక్కి", ting: "Back", en: "Back" },
  next: { te: "ముందుకు", ting: "Next", en: "Next" },
  skip: { te: "స్కిప్", ting: "Skip", en: "Skip" },

  occasionLabel: { te: "ఫంక్షన్", ting: "Function", en: "Occasion" },
  sideLabel: { te: "తరఫు", ting: "Side", en: "Side" },
  nameLabel: { te: "పేరు", ting: "Peru", en: "Name" },
  datesLabel: { te: "తేదీలు", ting: "Dates", en: "Dates" },
  menuLabel: { te: "మెనూ", ting: "Menu", en: "Menu" },
  guestsLabel: { te: "అతిథులు", ting: "Guests", en: "Guests" },
  venueLabel: { te: "వేన్యూ", ting: "Venue", en: "Venue" },
} satisfies Record<string, Entry>;

export type StringKey = keyof typeof strings;
