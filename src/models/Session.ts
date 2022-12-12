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
    Retorno: response,
  }: AccountResponse): Promise<SessionSchema> {
    const schema = {
      username: response[0].Nome,
      email: response[0].Email,
      phone: response[0].Telefone,
      cpf: response[0].CPF,
      birthDate: response[0].DataNascimento,
    };

    await this.set({ username: schema.username });
    return schema;
  }
}
