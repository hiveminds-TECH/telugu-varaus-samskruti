## Plan: Center logos & names in occasion cards

### What
Update the `ChoiceCard` component so both the SVG icon and title text are horizontally centered within each card on the `/plan/occasion` step.

### Why
Currently `ChoiceCard` uses `items-start` (left alignment). With the 2/3 column grid layout on the occasion page, left-aligned icons and text look unbalanced and visually off.

### How
1. **Update `src/components/ChoiceCard.tsx`**
   - Change the button's flex alignment from `items-start` to `items-center` to center all children horizontally.
   - Add `items-center` or `text-center` to the inner title container so the text block is centered under the icon.

### Scope
- Only touches `ChoiceCard.tsx` styling. No logic, no data, no other routes affected.