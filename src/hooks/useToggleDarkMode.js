import { useDarkModeStoreHook } from "@/store/modules/darkMode";

export function useDarkMode() {
  return useDarkModeStoreHook().darkMode;
}

export function useToggleDarkMode(event) {
  useDarkModeStoreHook().toggleDarkMode(event);
}
