export type ParamList = {
  SplashScreen: undefined;
  Onboard: undefined;
  InitialAccess: undefined;
  Logado: undefined;
  Home: undefined;
  HomeDetails:
    | {
        item?: {
          id: string;
          image: string;
          state: string;
        };
      }
    | undefined;
};
