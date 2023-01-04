import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import Home from "../screens/account/Home";
import HomeDetails from "../screens/account/HomeDetails";
import IconHome from "../assets/icons/home.svg";

const BottomNav = createBottomTabNavigator();

export const PrivateRoutes = () => {
  return (
    <BottomNav.Navigator
      initialRouteName="Inicio"
      screenOptions={{ headerShown: false }}
    >
      <>
        <BottomNav.Screen
          name="Home"
          component={Home}
          options={() => ({
            headerBackTitleVisible: false,
            tabBarLabel: "",
            tabBarIcon: () => <IconHome width={24} height={24} />,
          })}
        />
        <BottomNav.Screen
          name="HomeDetails"
          component={HomeDetails}
          options={{ tabBarButton: () => null }}
        />
      </>
    </BottomNav.Navigator>
  );
};
