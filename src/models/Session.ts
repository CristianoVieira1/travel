import AsyncStorage from "@react-native-async-storage/async-storage";

import { AccountResponse } from "../types/Account";
import { Session as SessionSchema } from "../types/Session";

export class Session {
  async get(): Promise<any | null> {
    const storage = await AsyncStorage.getItem("@travel-session");
    return storage ? JSON.parse(storage) : null;
  }

  set(params: any): Promise<void> {
    return AsyncStorage.setItem("@travel-session", JSON.stringify(params));
  }

  clearOldSession() {
    return AsyncStorage.clear();
  }

  async mountSessionSchema({
    id,
    email,
    familyName,
    givenName,
    name,
    photo,
  }: AccountResponse): Promise<SessionSchema> {
    const schema = {
      id,
      email,
      familyName,
      givenName,
      name,
      photo,
    };

    await this.set({ id: schema.id });
    return schema;
  }
}
