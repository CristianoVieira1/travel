import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: ${({ theme }) => theme.spacings.xlarge};
`;
export const Content = styled.View`
  padding: 10px ${({ theme }) => theme.spacings.xlarge};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const UserImage = styled.View`
  width: 50px;
  height: 50px;
  border-radius: 50px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.lightGray};
`;

export const Image = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 50px;
`;
