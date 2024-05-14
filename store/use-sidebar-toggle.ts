import { create } from "zustand";

type SheetStore = {
  isOpen: boolean;
  toggleSheet: () => void;
};

export const useSheetStore = create<SheetStore>((set) => ({
  isOpen: false,
  toggleSheet: () => set((state) => ({ isOpen: !state.isOpen })),
}));
