import styled from "styled-components/native";
import { widthPercentageToDP } from "../../utils/DeviceResolution";

export const Container = styled.SafeAreaView`
  flex: 1;
  flex-direction: column;
`;

export const TopSide = styled.View`
  flex: 1;
  padding-top: ${widthPercentageToDP("15%")}px;
  align-items: center;
`;

export const BottomSide = styled.View`
  flex: 1;
  margin: 0 30px;
  justify-content: flex-end;
`;

export const Description = styled.Text`
  font-size: 28px;
  font-weight: 800;
  line-height: 36px;
  margin-bottom: 24px;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.bold};
`;

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

export const Text = styled.Text`
  font-size: ${({ theme }) => theme.fonts.sizes.small};
  font-weight: 700;
  line-height: 22px;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.medium};
`;
export const Accont = styled.Text`
  font-size: ${({ theme }) => theme.fonts.sizes.small};
  font-weight: 700;
  line-height: 22px;
  margin-left: 10px;
  color: ${({ theme }) => theme.colors.white};
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

export const BackgroundImg = styled.View`
  z-index: -1;
  position: absolute;
  flex: 1;
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 0;
`;