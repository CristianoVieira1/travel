import React from "react";
import { DotIndicator } from "react-native-indicators";
import theme from "../../theme";
import * as S from "./styles";

interface ILoading {
  loading: boolean;
  children: React.ReactNode;
}

export const Loading = ({ loading, children }: ILoading) => {
  return (
    <>
      {loading ? (
        <>
          <S.Container>
            <DotIndicator size={10} color={theme.colors.orange} />
          </S.Container>
        </>
      ) : (
        children
      )}
    </>
  );
};
