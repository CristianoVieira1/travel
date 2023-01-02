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
  padding-left: ${widthPercentageToDP("5%")}px;
`;

export const BottomSide = styled.View`
  flex: 1;
  margin: 0 30px;
  justify-content: flex-end;
`;

export const Title = styled.Text`
  font-size: 28px;
  font-weight: 800;
  line-height: 36px;
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
  width: 60%;
  margin: ${widthPercentageToDP("2%")}px 0;
`;

export const Description = styled.Text`
  font-size: ${({ theme }) => theme.fonts.sizes.small};
  font-weight: 700;
  line-height: 22px;
  color: ${({ theme }) => theme.colors.orange};
  font-family: ${({ theme }) => theme.fonts.medium};
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
