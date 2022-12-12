import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Login from "../views/access/Login/index";
import Onboard from "../views/Onboard";
import { SplashScreen } from "../views/SplashScreen";

const Stack = createNativeStackNavigator();

export const PublicRoutes = () => {
  return (
    <Stack.Navigator
      initialRouteName={"SplashScreenPage"}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="SplashScreenPage" component={SplashScreen} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Onboard" component={Onboard} />
    </Stack.Navigator>
  );
};
