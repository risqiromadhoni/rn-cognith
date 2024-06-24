import type { MMKV } from "react-native-mmkv";
import type { StateStorage } from "zustand/middleware";

export const zustandStorageMMKV = (storage: MMKV): StateStorage => ({
	getItem: (name) => {
		const value = storage.getString(name);
		return value ? JSON.parse(value) : undefined;
	},
	setItem: (name, value) => {
		return storage.set(name, value);
	},
	removeItem: (name) => {
		return storage.delete(name);
	},
});
