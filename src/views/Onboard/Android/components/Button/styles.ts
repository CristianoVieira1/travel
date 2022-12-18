import styled from "styled-components/native";

export const Container = styled.View`
  flex: 0.3;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.TouchableOpacity`
  position: absolute;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 100px;
  padding: ${({ theme }) => theme.spacings.large};
`;
