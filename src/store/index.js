import { create } from "zustand";

const useCountryStore = create((set) => ({
  selectedCountry: "",
  setSelectedCountry: (country) => set({ selectedCountry: country }),
}));

export default useCountryStore;
