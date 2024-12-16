import { loadString, saveString, remove } from "./storage"

export const mmkvStorage = {
  setItem: async (key: string, value: string): Promise<boolean> => {
    try {
      saveString(key, value)
      return true
    } catch (error) {
      console.error("MMKV setItem error:", error)
      return false
    }
  },
  getItem: async (key: string): Promise<string | null> => {
    try {
      return loadString(key)
    } catch (error) {
      console.error("MMKV getItem error:", error)
      return null
    }
  },
  removeItem: async (key: string): Promise<void> => {
    try {
      remove(key)
    } catch (error) {
      console.error("MMKV removeItem error:", error)
    }
  },
}
