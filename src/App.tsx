import {
  PublicSans_400Regular,
  PublicSans_500Medium,
  PublicSans_700Bold,
  useFonts,
} from "@expo-google-fonts/public-sans";

import { Alice_400Regular } from "@expo-google-fonts/alice";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { RootSiblingParent } from "react-native-root-siblings";
import { ThemeProvider } from "styled-components";
import { UserSessionProvider, useSession } from "./context/Session";
import LocalStorage from "./persistence/LocalStorage";
import Routes, { navigationRef } from "./routes";
import THEME from "./theme";

function App() {
  const { session, removeSession } = useSession();
  const userId = LocalStorage.getUserId();
  const isAuthenticated = userId ?? !!session?.id;
  // const isAuthenticated = !!session?.id;

  // useEffect(() => {
  //   removeSession();
  // }, []);

  const [fontsLoaded] = useFonts({
    PublicSans_400Regular,
    PublicSans_500Medium,
    PublicSans_700Bold,
    Alice_400Regular,
  });

  if (fontsLoaded) {
    return (
      <ThemeProvider theme={THEME}>
        <NavigationContainer ref={navigationRef}>
          <Routes isAuthenticated={!!isAuthenticated} />
        </NavigationContainer>
      </ThemeProvider>
    );
  }
  return null;
}

export default () => (
  <UserSessionProvider>
    <RootSiblingParent>
      <App />
    </RootSiblingParent>
  </UserSessionProvider>
);
