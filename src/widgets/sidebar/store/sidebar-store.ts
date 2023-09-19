import { create } from 'zustand';

type StateType = {
  isOpen: boolean;
}

type ActionsType = {
  open: () => void;
  close: () => void;
}

export const useSidebarStore = create<StateType & ActionsType>((set) => ({
  isOpen: false,
  open: () => set(() => ({ isOpen: true })),
  close: () => set(() => ({ isOpen: false}))
}));
