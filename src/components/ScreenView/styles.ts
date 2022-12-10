import { getStatusBarHeight } from "react-native-iphone-x-helper";
import styled from "styled-components/native";

export const Screen = styled.View`
  flex: 1;
  padding-top: ${getStatusBarHeight() + 10}px;
  background-color: ${({ theme }) => theme.colors.white};
`;
