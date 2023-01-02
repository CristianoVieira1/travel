import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import InitialAccess from "../screens/InitialAccess";
import LogadoTest from "../screens/LogadoTest";
import Onboard from "../screens/Onboard";
import { SplashScreen } from "../screens/SplashScreen";

const Stack = createNativeStackNavigator();

export const PublicRoutes = () => {
  return (
    <Stack.Navigator
      initialRouteName={"InitialAccess"}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="SplashScreenPage" component={SplashScreen} />
      <Stack.Screen name="InitialAccess" component={InitialAccess} />
      <Stack.Screen name="Onboard" component={Onboard} />
      <Stack.Screen name="Logado" component={LogadoTest} />
    </Stack.Navigator>
  );
};
