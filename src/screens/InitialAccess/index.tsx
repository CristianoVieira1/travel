import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Dimensions, ImageBackground, StyleSheet } from "react-native";
import * as Animatable from "react-native-animatable";

import LogoIcon from "../../assets/icons/logo_text.svg";
import Apple from "../../assets/icons/redes_socias/apple.svg";
import Facebook from "../../assets/icons/redes_socias/facebook.svg";
import Google from "../../assets/icons/redes_socias/google.svg";
import Instagram from "../../assets/icons/redes_socias/instagram.svg";
import Background from "../../assets/images/background_initial_access.png";
import { Loading } from "../../components/Loading";
import ScreenView from "../../components/ScreenView";

import * as S from "./styles";
import useLoginPageViewModel from "./ViewModel/useLoginPageViewModel";

const screenHeight = (Dimensions.get("window").height * 80) / 70;
const screenWidth = Dimensions.get("window").width;

export const InitialAccess = () => {
  const navigation = useNavigation();
  const { loginGoogle, userDetails, loading } = useLoginPageViewModel();

  return (
    <>
      {loading ? (
        <Loading loading={loading} children />
      ) : (
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
                <S.Title>Bem vindo!</S.Title>
                <S.Description>Faça seu login!</S.Description>
              </Animatable.View>
            </S.BottomSide>
            <S.Wrapper>
              <S.SociaisView>
                <Animatable.View delay={1000} animation="fadeInUp">
                  <Facebook width={45} onPress={() => console.log("face")} />
                </Animatable.View>
                <Animatable.View delay={1400} animation="fadeInUp">
                  <Instagram
                    width={45}
                    onPress={() => console.log("insta", userDetails)}
                  />
                </Animatable.View>
                <Animatable.View delay={1800} animation="fadeInUp">
                  <Google width={45} onPress={() => loginGoogle()} />
                </Animatable.View>
                <Animatable.View delay={2000} animation="fadeInUp">
                  <Apple width={45} onPress={() => console.log("google")} />
                </Animatable.View>
              </S.SociaisView>
            </S.Wrapper>
          </S.Container>
        </ScreenView>
      )}
    </>
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
