import { AntDesign } from "@expo/vector-icons";
import React, { useEffect, useRef } from "react";
import { Animated } from "react-native";
import Svg, { Circle, G } from "react-native-svg";
import * as S from "./styles";

const NextButton = ({ percentage, scrollTo }: any) => {
  const size = 120;
  const strokeWidth = 2;
  const center = size / 2;
  const radius = size / 2 - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;
  const progressAnimation = useRef(new Animated.Value(0)).current;

  const progressRef = useRef(null);

  const animation = ({ toValue }: any) => {
    return Animated.timing(progressAnimation, {
      toValue,
      duration: 250,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    animation(percentage);
  }, [percentage]);

  useEffect(() => {
    progressAnimation.addListener(
      (value) => {
        const strokeDashoffset =
          circumference - (circumference * value.value) / 100;
        if (progressRef?.current) {
          progressRef.current.setNativeProps({
            strokeDashoffset,
          });
        }
      },
      [percentage]
    );
    return () => {
      progressAnimation.removeAllListeners();
    };
  }, []);

  return (
    <S.Container>
      <Svg width={size} height={size}>
        <G rotation="-90" origin={center}>
          <Circle
            stroke="#E6E7E8"
            cx={center}
            cy={center}
            r={radius}
            strokeWidth={strokeWidth}
          />

          <Circle
            ref={progressRef}
            stroke="#f4338f"
            cx={center}
            cy={center}
            r={radius}
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            // strokeDashoffset={circumference - (circumference * 25) / 80}
            //  aqui ele deveria colocar a porcentagem do progresso
          />
        </G>
      </Svg>

      <S.Content onPress={scrollTo} activeOpacity={0.6}>
        <AntDesign name="arrowright" size={32} color="#fff" />
      </S.Content>
    </S.Container>
  );
};

export default NextButton;
