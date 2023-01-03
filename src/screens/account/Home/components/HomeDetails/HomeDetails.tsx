import { RouteProp } from "@react-navigation/native";
import React from "react";
import Header from "../../../../../components/Header";
import ScreenView from "../../../../../components/ScreenView";
import * as S from "./styles";

interface IProps {
  route: RouteProp<
    {
      params: {
        item?: {
          id: string;
          image: string;
          state: string;
        };
      };
    },
    "params"
  >;
}

export const HomeDetails = (props: IProps) => {
  return (
    <ScreenView statusbarColor="dark">
      <Header isIconMenu={true} isIconBack={false} />
      <S.Container>
        <S.Title>Aproveite o mundo</S.Title>
      </S.Container>
    </ScreenView>
  );
};

export default HomeDetails;
