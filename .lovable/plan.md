
# CaterFlow — Build Plan

Approve this to start the build.

## Experience
Split-screen on desktop (left = one warm conversational question, right = live "Event Notebook" filling in as you answer), single column on mobile. Auto-saved to localStorage, resumable from `/welcome`.

## Flow
1. `/` — Language picker (Telugu / Tenglish / English, default Tenglish)
2. `/welcome` — Hero + "Continue planning" banner if saved state exists
3. `/plan/occasion` — Wedding / Birthday / Housewarming / Religious / Corporate / Other
4. `/plan/side` — Bride / Groom / Both (only for weddings, else skipped)
5. `/plan/intro` — Your name
6. `/plan/dates` — Date range (1–7 days)
7. `/plan/meals` — Per-day tabs, accordion per meal (Breakfast/Lunch/Snacks/Dinner), category chips (Traditional / Andhra / Telangana / Biryani / Sweets…), tap-to-toggle dish cards, "Add custom dish"
8. `/plan/guests` — Guest count stepper with playful Tenglish copy
9. `/plan/venue` — Venue type + optional address
10. `/plan/review` — Full notebook, edit any section
11. `/plan/confirm` — Warm confirmation

## Design
- Tokens in `src/styles.css` (oklch): ivory bg, cream cards, Cerulean #2274A5 primary, muted gold accent, beige hairline borders, deep teal-black ink
- Fonts: **Mandali** (Telugu), **DM Serif Display** (display), **Cormorant Garamond** (serif accents), **Raleway** (body)
- 20–24px radii, soft layered shadows, paper grain on the notebook
- Motion: 250–400ms ease-out fades, 8px hover rise, cross-fade route transitions, slide-in "Saved ✓" toast

## Illustrations (inline SVG, no photos)
Hand-drawn-feel set under `src/components/illustrations/`: hero (banana leaf + brass lamp + jasmine), occasion icons (mandap, cake, diya, gopuram, banquet), dishes (idli, dosa, vada, pongal, thali, biryani pot, samosa+tea, dinner spread), venue icons, notebook marks. All themed via tokens.

## Tone (Tenglish, family-friendly warm humor)
e.g. *"Mee comfort ki match avtam"*, *"Enta mandi vastunnaru?"*, *"Hayi ga plan chesedaam"*.

## State
- Zustand store `src/store/plan.ts` with `persist` (key `caterflow:v1`)
- Shape: `{ language, occasion, side, name, startDate, endDate, mealsByDay, guests, venueType, address, updatedAt }`
- Debounced "Saved ✓" toast on changes; `/welcome` shows resume if `updatedAt` exists

## i18n
`src/i18n/strings.ts` with `te | ting | en` dicts + `useT()` hook. All UI copy goes through dict.

## Files to add
```text
src/routes/
  index.tsx                # language picker (replaces placeholder)
  welcome.tsx
  plan.tsx                 # split-screen layout + Outlet + Notebook
  plan.occasion.tsx
  plan.side.tsx
  plan.intro.tsx
  plan.dates.tsx
  plan.meals.tsx
  plan.guests.tsx
  plan.venue.tsx
  plan.review.tsx
  plan.confirm.tsx
src/components/
  Notebook.tsx
  StepShell.tsx
  ChoiceCard.tsx, DishCard.tsx
  SaveToast.tsx
  illustrations/*.tsx
src/store/plan.ts
src/i18n/strings.ts
src/hooks/useT.ts
src/lib/meals.ts
```
Each route sets its own `head()` metadata.

## Tech
- `zustand`, `framer-motion`, `date-fns` (already installed)
- TanStack Start file-based routing (no `src/pages/`)
- All colors via semantic tokens, no raw hex in components

## Out of scope (later)
Backend submission, quotes/pricing, WhatsApp/SMS, admin view, auth, real photography.
