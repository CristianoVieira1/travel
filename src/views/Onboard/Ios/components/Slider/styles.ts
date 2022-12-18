import styled from "styled-components/native";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "../../../../../utils/DeviceResolution";

export const Container = styled.View`
  padding: 75px;
  padding-top: 150px;
  align-items: center;
`;

export const Image = styled.Image`
  width: ${widthPercentageToDP("100%")}px;
  height: ${heightPercentageToDP("38%")}px;
`;

export const Content = styled.View`
  margin-top: ${({ theme }) => theme.spacings.xlarge};
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.fonts.sizes.xxlarge};
  color: ${({ theme }) => theme.colors.darkGray};
  font-family: ${({ theme }) => theme.fonts.bold};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacings.xsmall};
`;

export const SubTitle = styled.Text`
  font-size: ${({ theme }) => theme.fonts.sizes.medium};
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.medium};
  text-align: center;
`;
