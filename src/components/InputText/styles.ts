import { TextInput } from "react-native";
import styled from "styled-components/native";
import { BackgroundColor } from ".";
import Checked from "../../assets/icons/checked.svg";

interface ComponentProps {
  disabled?: boolean;
}

export const Container = styled.View<ComponentProps>`
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
`;

export const TouchArea = styled.View``;

interface InputContent {
  hasError?: boolean;
  disabled?: boolean;
  backgroundColor?: BackgroundColor;
  labelColor?: string;
}

export const Label = styled.Text<InputContent>`
  font-size: 14px;
  line-height: 20px;
  margin-bottom: 6px;
  color: ${({ labelColor }) => labelColor};
  font-family: ${({ theme }) => theme.fonts.bold};
  font-weight: 800;
`;

export const Content = styled.TouchableOpacity<InputContent>`
  width: 100%;
  height: 56px;
  padding: 0 19px;
  border-radius: 6px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-family: ${({ theme }) => theme.fonts.medium};
  font-weight: 800;

  /* background-color: ${({ theme, disabled, backgroundColor }) => {
    return disabled ? theme.colors.lightBlue : backgroundColor;
  }}; */

  /* border-color: ${({ hasError, theme }) => {
    return hasError ? theme.colors.danger : theme.colors.primary;
  }}; */

  /* border-bottom: 1px solid ${({ hasError, theme }) => {
    return hasError ? theme.colors.danger : theme.colors.primary;
  }}; */
  border-bottom-color: ${({ hasError, theme }) => {
    return hasError ? theme.colors.danger : theme.colors.darkGray;
  }};
  border-bottom-width: 1px;

  /* border: 1px solid ${({ hasError, theme }) => {
    return hasError ? theme.colors.danger : theme.colors.lightBlue;
  }}; */
`;

interface InputProps {
  disabled: boolean;
  hasSecureIndicator: boolean;
  colorText?: string;
}

export const Input = styled(TextInput)<InputProps>`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-weight: 700;
  width: ${(props) => (!!props.hasSecureIndicator ? "94%" : "100%")};
  color: ${({ disabled, theme, colorText }) =>
    disabled ? theme.colors.darkGray : colorText};
  font-weight: 700;
`;

export const ValidationMessage = styled.Text`
  font-size: 12px;
  margin-top: 4px;
  font-weight: 700;
  line-height: 20px;
  color: ${({ theme }) => theme.colors.danger};
  font-family: ${({ theme }) => theme.fonts.medium};
`;

export const IconChecked = styled(Checked)`
  size: 15px;
  right: 15px;
`;
