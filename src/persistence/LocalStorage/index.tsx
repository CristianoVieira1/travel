import { User } from "src/types/Account";
import AsyncStorage from "@react-native-async-storage/async-storage";

const userStorageKey = "@travel:user";
const onBoardStorageKey = "@travel:onBoard";

class LocalStorage {
  static async getUser(): Promise<any> {
    const userStorage = await AsyncStorage.getItem(userStorageKey);
    return userStorage ? JSON.parse(userStorage) : null;
  }

  static async setUser(user: User) {
    await AsyncStorage.setItem(userStorageKey, JSON.stringify(user));
  }

  static async getOnboard(): Promise<string | null> {
    return await AsyncStorage.getItem(onBoardStorageKey);
  }

  static async setOnboard(onboardToken: string) {
    return await AsyncStorage.setItem(onBoardStorageKey, onboardToken);
  }

  static async clean(): Promise<unknown> {
    return await AsyncStorage.removeItem(userStorageKey);
  }
}

export default LocalStorage;
