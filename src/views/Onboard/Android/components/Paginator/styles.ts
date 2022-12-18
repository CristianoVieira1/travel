import { Animated } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  height: 50px;
`;

export const Content = styled(Animated.View)`
  height: 10px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.primary};
  margin: 0 8px;
  width: 10px;
`;
