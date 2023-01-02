import { IUser } from "../ViewModel/useLoginPageViewModel";

export interface ILoginPageViewModel {
  loginGoogle?: () => void;
  userDetails?: IUser;
  loading?: boolean;
}
