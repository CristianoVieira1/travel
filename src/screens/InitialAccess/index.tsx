import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Dimensions, ImageBackground, StyleSheet } from "react-native";
import * as Animatable from "react-native-animatable";

import LogoIcon from "../../assets/icons/logo_icon.svg";
import Facebook from "../../assets/icons/redes_socias/facebook.svg";
import Google from "../../assets/icons/redes_socias/google.svg";
import Instagram from "../../assets/icons/redes_socias/instagram.svg";
import Background from "../../assets/images/background_initial_access.png";
import Button from "../../components/Button";
import ScreenView from "../../components/ScreenView";

import * as S from "./styles";

const screenHeight = (Dimensions.get("window").height * 80) / 70;
const screenWidth = Dimensions.get("window").width;

export const InitialAccess = () => {
  const navigation = useNavigation()
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
            <S.Description>Bem vindo!</S.Description>
          </Animatable.View>

          <Animatable.View delay={1500} animation="fadeInLeft">
            <Button
              title="Entrar"
              type="accept"
              size="large"
              onPress={() => navigation.navigate("Login")}
            />
          </Animatable.View>
        </S.BottomSide>
        <S.Wrapper>
          <S.Text>Ou</S.Text>
          <S.SociaisView>
            <Facebook width={45}  onPress={() => console.log("face")}/>
            <Instagram width={45}  onPress={() => console.log("insta")}/>
            <Google width={45}  onPress={() => console.log("google")}/>
          </S.SociaisView>
          <S.Register>
            <S.Accont>Ainda não tem conta?</S.Accont>
            <S.AccontRegister onPress={() => {}}>
              <S.AccontRegisterText>Registrar</S.AccontRegisterText>
            </S.AccontRegister>
          </S.Register>
        </S.Wrapper>
      </S.Container>
    </ScreenView>
  );
};

export default InitialAccess;

const styles = StyleSheet.create({
  img: {
    height: screenHeight,
    width: screenWidth,
    justifyContent: "center",
    alignItems: "center",
  },
});
