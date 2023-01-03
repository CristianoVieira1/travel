import Styled from "styled-components/native";

export const Container = Styled.View`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  /* background-color: #010100; */
  /* opacity: 0.8;
`;

export const Content = Styled.View`
  /* width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center; */
`;

export const Title = Styled.Text`
color: ${({ theme }) => theme.colors.white};
font-size: 15px;
`;
