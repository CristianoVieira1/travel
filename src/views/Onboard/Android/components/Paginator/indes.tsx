/* eslint-disable react/prop-types */
import React from "react";
import { useWindowDimensions } from "react-native";
import * as S from "./styles";

const Paginator = ({ data, scrollX }: any) => {
  const { width } = useWindowDimensions();

  return (
    <S.Container>
      {data.map((_, i) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width];

        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [10, 20, 10],
          extrapolate: "clamp",
        });

        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.3, 1, 0.3],
          extrapolate: "clamp",
        });

        return (
          <S.Content
            style={[
              {
                width: dotWidth,
                opacity,
              },
            ]}
            key={i.toString()}
          />
        );
      })}
    </S.Container>
  );
};

export default Paginator;
