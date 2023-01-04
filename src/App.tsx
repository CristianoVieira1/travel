import {
  PublicSans_400Regular,
  PublicSans_500Medium,
  PublicSans_700Bold,
  useFonts,
} from "@expo-google-fonts/public-sans";

import { Alice_400Regular } from "@expo-google-fonts/alice";
import { NavigationContainer } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { RootSiblingParent } from "react-native-root-siblings";
import { ThemeProvider } from "styled-components";
import { UserSessionProvider, useSession } from "./context/Session";
import LocalStorage from "./persistence/LocalStorage";
import Routes, { navigationRef } from "./routes";
import THEME from "./theme";

function App() {
  const { setSession, session } = useSession();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  async function hasUserLogged() {
    await LocalStorage.getUser().then((userLogged) => {
      if (userLogged) {
        setIsAuthenticated(true);
        const response = { user: { ...userLogged } };
        setSession((prevSession) => ({
          ...prevSession,
          ...response,
        }));
      }
    });
  }

  useEffect(() => {
    hasUserLogged();
  }, [isAuthenticated]);

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
          <Routes isAuthenticated={isAuthenticated || !!session?.user?.id} />
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
