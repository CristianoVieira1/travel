import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { useEffect, useState } from "react";
import { useSession } from "../../../context/Session";
import { CLI_ID_GOOGLE } from "../../../helpers";
import { ILoginPageViewModel } from "../Interface/ILoginPageViewModel";

export interface IUser {
  id: string;
  familyName?: string;
  email?: string;
  givenName?: string;
  name?: string;
  photo?: string;
}

const useLoginPageViewModel = () => {
  const [loading, setLoading] = useState(false);
  const [userDetails, setUserDetails] = useState<IUser>({} as IUser);
  const { handleSigInGoogle } = useSession();

  useEffect(() => {
    GoogleSignin.configure({
      webClientId: CLI_ID_GOOGLE,
    });
  }, []);

  const loginGoogle = async (): Promise<void> => {
    setLoading(true);
    await handleSigInGoogle();
    setLoading(false);
  };

  const viewModel: ILoginPageViewModel = {
    loginGoogle,
    userDetails,
    loading,
  };

  return viewModel;
};

export default useLoginPageViewModel;
