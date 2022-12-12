import { AntDesign as Icon } from "@expo/vector-icons";
import React, { memo } from "react";
import { TouchableOpacityProps } from "react-native";
import { DotIndicator } from "react-native-indicators";
import theme from "../../theme";
import * as S from "./styles";

interface IButtonProps extends TouchableOpacityProps {
  title: string;
  loading?: boolean;
  type: S.TypeButton;
  size?: S.SizeButton;
  icon?: string;
}

function Button({
  title,
  loading = false,
  type,
  size,
  icon,
  ...rest
}: IButtonProps) {
  return (
    <S.Container
      {...rest}
      activeOpacity={0.7}
      type={type}
      size={size}
      icon={icon}
      style={type !== "link" && { ...theme.shadow }}
    >
      {loading ? (
        <DotIndicator size={6} color={theme.colors.white} />
      ) : (
        <>
          <S.Content>
            <S.TitleButton type={type}>{title}</S.TitleButton>
            <S.Icon>
              <Icon name={icon} size={24} color="white" />
            </S.Icon>
          </S.Content>
        </>
      )}
    </S.Container>
  );
}
export default memo(Button);