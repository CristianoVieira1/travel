import { AxiosResponse } from "axios";
import { AccountResponse } from "../../types/Account";
import API from "../axios";

export function ConfirmAccount(
  email: string,
  password: string
): Promise<AxiosResponse<AccountResponse, any>> {
  return API({
    method: "POST",
    url: "/",
    data: { email: email, password: password },
  });
}
