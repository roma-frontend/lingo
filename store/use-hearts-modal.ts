import { create } from "zustand";

type HeartsModalStore = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

export const useHeartsModal = create<HeartsModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
