import * as SecureStore from "expo-secure-store";

const KEYS = {
  KeyUSERID: "LocalStorage-USERIDKey",
  KeyONBOARDn: "LocalStorage-ONBOARDONKey",
};

class LocalStorage {
  static async getUserId(): Promise<any> {
    return await SecureStore.getItemAsync(KEYS.KeyUSERID);
  }

  static async setUserId(id: string) {
    return await SecureStore.setItemAsync(KEYS.KeyUSERID, id);
  }

  static async getOnboard(): Promise<any> {
    return await SecureStore.getItemAsync(KEYS.KeyONBOARDn);
  }

  static async setOnboard(onboardToken: string) {
    return await SecureStore.setItemAsync(KEYS.KeyONBOARDn, onboardToken);
  }

  static async clean(): Promise<any> {
    return await SecureStore.deleteItemAsync(KEYS.KeyUSERID);
  }
}

export default LocalStorage;
