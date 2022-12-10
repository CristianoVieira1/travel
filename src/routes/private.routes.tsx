import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import IconHome from "../assets/icons/home.svg";
import Home from "../views/account/Home/index";

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
      </>
    </BottomNav.Navigator>
  );
};
