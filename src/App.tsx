import {
  PublicSans_400Regular,
  PublicSans_500Medium,
  PublicSans_700Bold,
  PublicSans_700Bold_Italic,
  useFonts,
} from "@expo-google-fonts/public-sans";
import { NavigationContainer } from "@react-navigation/native";
import React, { useEffect } from "react";
import { RootSiblingParent } from "react-native-root-siblings";
import { ThemeProvider } from "styled-components";
import { UserSessionProvider, useSession } from "./context/Session";
import Routes, { navigationRef } from "./routes";
import THEME from "./theme";

function App() {
  const { session, removeSession } = useSession();
  const isAuthenticated = !!session?.userId;

  useEffect(() => {
    removeSession();
  }, []);

  const [fontsLoaded] = useFonts({
    PublicSans_400Regular,
    PublicSans_500Medium,
    PublicSans_700Bold_Italic,
    PublicSans_700Bold,
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
