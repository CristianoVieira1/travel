import { StatusBar, StatusBarStyle } from "expo-status-bar";
import React from "react";
import { WithChildren } from "../../types";
import * as S from "./styles";

interface Props extends WithChildren {
  statusbarColor?: StatusBarStyle;
}

const ScreenView = ({ children, statusbarColor = "dark" }: Props) => (
  <S.Screen>
    <StatusBar style={statusbarColor} />
    {children}
  </S.Screen>
);

export default ScreenView;
