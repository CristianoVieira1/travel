import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.Image`
  flex: 0.7;
  justify-content: center;
`;

export const Content = styled.View`
  flex: 0.3;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: 24px;
  line-height: 32px;
  color: ${({ theme }) => theme.colors.darkGray};
  font-family: ${({ theme }) => theme.fonts.bold};
`;

export const Description = styled.Text`
  font-size: 14px;
  line-height: 22px;
  color: ${({ theme }) => theme.colors.darkGray};
  font-family: ${({ theme }) => theme.fonts.medium};
  padding: 0 64px;
`;
