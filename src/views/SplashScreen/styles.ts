import styled from "styled-components/native";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "../../utils/DeviceResolution";

export const AnimeSplash = styled.View`
  position: absolute;
  left: ${widthPercentageToDP("-36%")}px;
  top: ${heightPercentageToDP("10%")}px;
  z-index: 999999999999;
`;

export const Container = styled.View``;

export const Content = styled.View`
  position: absolute;
  left: ${widthPercentageToDP("25%")}px;
  top: ${heightPercentageToDP("70%")}px;
  z-index: 999999999999;
`;

export const Background = styled.ImageBackground`
  flex: 1;
`;
