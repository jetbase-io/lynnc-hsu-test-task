import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface SidebarState {
  isMaximized: boolean;
  toggle: () => void;
}

export const useSidebarStore = create<SidebarState>()(
  devtools(
    persist(
      (set) => ({
        isMaximized: true,
        toggle: () => set((state) => ({ isMaximized: !state.isMaximized })),
      }),
      {
        name: "sidebar-storage",
      }
    )
  )
);
