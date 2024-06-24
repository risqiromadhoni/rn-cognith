import { MMKV } from "react-native-mmkv";

export const themeStorage = new MMKV({
	id: "zustand-theme-storage",
	encryptionKey: "zustand-theme-storage-encryption-key",
});
