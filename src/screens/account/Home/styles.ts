import styled from "styled-components/native";
import { heightPercentageToDP } from "../../../utils/DeviceResolution";

export const Container = styled.View`
  width: 100%;
  padding: ${heightPercentageToDP("5%")}px 24px 0 24px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.darkGray};
`;

export const Content = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-top: 24px;
`;

export const Selected = styled.View`
  margin-right: 30px;
  background-color: ${({ theme }) => theme.colors.red};
  border-radius: 10px;
  padding: 8px;
  width: 100px;
  align-items: center;
`;

export const SelectText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.white};
`;
export const Description = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.darkGray};
`;

export const Wrapper = styled.View`
  padding-top: ${heightPercentageToDP("2%")}px;
`;

export const Card = styled.TouchableOpacity`
  width: 280px;
  margin: 10px;
`;

export const CardTitle = styled.Text`
  position: absolute;
  top: 10px;
  left: 10px;
  font-size: ${({ theme }) => theme.fonts.sizes.xxlarge};
  font-family: ${({ theme }) => theme.fonts.aliceMedium};
  color: ${({ theme }) => theme.colors.white};
  line-height: 40px;
`;

export const CardContent = styled.View`
  position: absolute;
  bottom: 10px;
  left: 10px;
  width: 52px;
  height: 52px;
  border-radius: 26px;
  background-color: ${({ theme }) => theme.colors.white};
  align-items: center;
  justify-content: center;
`;
