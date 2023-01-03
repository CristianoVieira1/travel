import { MotiView } from "@motify/components";
import React from "react";
import theme from "../../theme";
import * as S from "./styles";

interface ILoading {
  size: number;
}

export const Loading = ({ size }: ILoading) => {
  return (
    <>
      <>
        <S.Container>
          <S.Content>
            {/* <S.Title>Aguarde...</S.Title> */}
            <MotiView
              from={{
                width: size,
                height: size,
                borderRadius: size / 2,
                borderWidth: 0,
                shadowOpacity: 0.5,
              }}
              animate={{
                width: size + 20,
                height: size + 20,
                borderRadius: (size + 20) / 2,
                borderWidth: size / 10,
                shadowOpacity: 1,
              }}
              transition={{
                type: "timing",
                duration: 1000,
                loop: true,
              }}
              style={{
                width: size,
                height: size,
                borderRadius: size / 2,
                borderWidth: size / 10,
                borderColor: theme.colors.white,
                shadowColor: theme.colors.white,
                // backgroundColor: theme.colors.white,
                shadowOpacity: 1,
                shadowRadius: 10,
              }}
            />
          </S.Content>
        </S.Container>
      </>
    </>
  );
};
