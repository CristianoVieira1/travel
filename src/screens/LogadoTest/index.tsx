import React from "react";
import { Dimensions, ImageBackground, StyleSheet } from "react-native";
import * as Animatable from "react-native-animatable";

import LogoIcon from "../../assets/icons/logo_text.svg";
import Background from "../../assets/images/background_initial_access.png";
import ScreenView from "../../components/ScreenView";

import * as S from "./styles";

const screenHeight = (Dimensions.get("window").height * 80) / 70;
const screenWidth = Dimensions.get("window").width;

export const LogadoTest = () => {
  return (
    <ScreenView statusbarColor="light">
      <S.BackgroundImg>
        <ImageBackground
          source={Background}
          resizeMode="stretch"
          style={styles.img}
        />
      </S.BackgroundImg>
      <S.Container>
        <Animatable.View delay={2000} animation="fadeInLeft">
          <S.TopSide>
            <LogoIcon />
          </S.TopSide>
        </Animatable.View>

        <S.BottomSide>
          <Animatable.View delay={1000} animation="fadeIn">
            <S.Title>Logado com sucesso!!</S.Title>
            <S.Description>Funcionou</S.Description>
          </Animatable.View>
        </S.BottomSide>
      </S.Container>
    </ScreenView>
  );
};

export default LogadoTest;

const styles = StyleSheet.create({
  img: {
    height: screenHeight,
    width: screenWidth,
    justifyContent: "center",
    alignItems: "center",
  },
});
