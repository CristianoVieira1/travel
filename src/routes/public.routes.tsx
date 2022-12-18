import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Login from "../views/access/Login/index";
import OnboardAndroid from "../views/Onboard/Android";
import OnboardIos from "../views/Onboard/Ios";
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
      <Stack.Screen name="OnboardIos" component={OnboardIos} />
      <Stack.Screen name="OnboardAndroid" component={OnboardAndroid} />
    </Stack.Navigator>
  );
};
