import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { themeStorage } from "./storage/theme";
import { zustandStorageMMKV } from "./utils/storage";

interface ThemeState {
	theme: "light" | "dark" | "system";
}

interface ThemeStateActions {
	setTheme: (theme: ThemeState["theme"]) => void;
}

type ThemeStore = ThemeState & ThemeStateActions;

export const useStoreTheme = create(
	persist<ThemeStore>(
		(set) => ({
			theme: "system",
			setTheme: (theme) => set({ theme }),
		}),
		{
			name: "theme-storage",
			storage: createJSONStorage(() => zustandStorageMMKV(themeStorage)),
		},
	),
);
