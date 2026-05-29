import { Routes, Route } from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import Layout from "./layouts/Layout";
import LanguagePicker from "./pages/LanguagePicker";
import Welcome from "./pages/Welcome";
import OccasionStep from "./pages/plan/OccasionStep";
import SideStep from "./pages/plan/SideStep";
import NameStep from "./pages/plan/NameStep";
import MobileStep from "./pages/plan/MobileStep";
import DatesStep from "./pages/plan/DatesStep";
import MealsStep from "./pages/plan/MealsStep";
import GuestsStep from "./pages/plan/GuestsStep";
import VenueStep from "./pages/plan/VenueStep";
import ReviewStep from "./pages/plan/ReviewStep";
import ConfirmStep from "./pages/plan/ConfirmStep";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<LanguagePicker />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route element={<Layout />}>
          <Route path="/plan/occasion" element={<OccasionStep />} />
          <Route path="/plan/side" element={<SideStep />} />
          <Route path="/plan/intro" element={<NameStep />} />
          <Route path="/plan/mobile" element={<MobileStep />} />
          <Route path="/plan/dates" element={<DatesStep />} />
          <Route path="/plan/meals" element={<MealsStep />} />
          <Route path="/plan/guests" element={<GuestsStep />} />
          <Route path="/plan/venue" element={<VenueStep />} />
          <Route path="/plan/review" element={<ReviewStep />} />
          <Route path="/plan/confirm" element={<ConfirmStep />} />
        </Route>
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
