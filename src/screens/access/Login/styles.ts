import { getStatusBarHeight } from "react-native-status-bar-height";
import styled from "styled-components/native";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "../../../utils/DeviceResolution";

export const Container = styled.View`
  width: 100%;
  height: 100%;
  flex: 1;
  flex-direction: column;
  align-items: flex-start;
`;

export const Header = styled.ImageBackground`
  padding-top: ${getStatusBarHeight()}px;
  margin-top: -30px;
  width: 100%;
  height: 80%;
  background-repeat: no-repeat;
`;

export const ButtonView = styled.TouchableOpacity``;

export const Subtitle = styled.Text`
  margin-top: 10px;
  font-size: 38px;
  font-weight: 200;
  color: ${({ theme }) => theme.colors.white};
  margin-left: 10px;
`;

export const Content = styled.View`
  padding: ${heightPercentageToDP("50%")}px 24px;
  width: 100%;
  align-items: center;
  position: absolute;
`;

export const View = styled.View`
  width: 100%;
  margin-bottom: 20px;
  align-items: center;
`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.colors.darkGray};
  margin-bottom: 10px;
`;

export const TextButton = styled.Text``;

export const Wrapper = styled.View`
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const SociaisView = styled.View`
  flex-direction: row;
  justify-content: space-around;
  width: 50%;
  margin: ${widthPercentageToDP("2%")}px 0;
`;

export const Space = styled.View`
  margin: 0 ${({ theme }) => theme.spacings.xsmall};
`;

export const Accont = styled.Text`
  font-size: ${({ theme }) => theme.fonts.sizes.small};
  font-weight: 700;
  line-height: 22px;
  margin-left: 10px;
  color: ${({ theme }) => theme.colors.darkGray};
  font-family: ${({ theme }) => theme.fonts.medium};
`;

export const AccontRegisterText = styled.Text`
  font-size: ${({ theme }) => theme.fonts.sizes.small};
  font-weight: 700;
  line-height: 22px;
  margin-left: 10px;
  color: ${({ theme }) => theme.colors.orange};
  font-family: ${({ theme }) => theme.fonts.medium};
`;
export const AccontRegister = styled.TouchableOpacity``;

export const Register = styled.View`
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin-bottom: ${widthPercentageToDP("5%")}px;
`;
