import LottieView from "lottie-react-native";
import React, { useEffect, useRef, useState } from "react";

import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { Dimensions, ImageBackground, StyleSheet } from "react-native";
import * as Animatable from "react-native-animatable";
import Loading from "../../assets/animations/loading.json";
import Splash from "../../assets/animations/splash.json";
import SplashImage from "../../assets/images/bg.png";
import * as S from "./styles";

const screenWidth = Dimensions.get("window").width;
const screenHeight = (Dimensions.get("window").height * 80) / 70;

export const SplashScreen = () => {
  const animation = useRef(null);
  const navigation = useNavigation();
  const [isVisibled, setIsVisibled] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsVisibled(true);
      setTimeout(() => {
        navigation.navigate("Onboard");
      }, 4000);
    }, 1700);
  }, []);

  return (
    <>
      <StatusBar translucent style="light" />
      <S.Container>
        <S.AnimeSplash>
          <LottieView
            autoPlay
            loop={false}
            ref={animation}
            style={{
              width: 400,
              height: 400,
            }}
            source={Splash}
          />
        </S.AnimeSplash>
        {isVisibled && (
          <S.Content>
            <Animatable.View
              animation={"bounceInUp"}
              useNativeDriver
              duration={5000}
            >
              <LottieView
                autoPlay
                loop={true}
                ref={animation}
                style={{
                  width: 200,
                  height: 200,
                }}
                source={Loading}
              />
            </Animatable.View>
          </S.Content>
        )}

        <ImageBackground
          source={SplashImage}
          resizeMode="stretch"
          style={styles.img}
        />
      </S.Container>
    </>
  );
};

const styles = StyleSheet.create({
  img: {
    height: screenHeight,
    width: screenWidth,
    justifyContent: "center",
    alignItems: "center",
  },
});
