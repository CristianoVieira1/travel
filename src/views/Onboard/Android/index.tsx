import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useRef, useState } from "react";
import { Animated, FlatList } from "react-native";
import OnboardingItem from "./components";
import NextButton from "./components/Button";
import Paginator from "./components/Paginator/indes";
import * as S from "./styles";

const slides = [
  {
    id: "1",
    color: "#F2A1AD",
    title: "Melhores Momentos",
    description:
      "Compartilhe seus melhores momentos, com o Travel você irá conhecer lugares inesqueciveis!",
    picture: require("../../../assets/onboard/1.png"),
  },
  {
    id: "2",
    color: "#0090D6",
    title: "Pontos Turísticos",
    description:
      "Um bom lugar para se visitar, com a melhor companhia, é o que você precisa para ter um bom momento!",
    picture: require("../../../assets/onboard/5.png"),
  },
  {
    id: "3",
    color: "#69C743",
    title: "Divirta-se",
    description:
      "Compartilhe seus melhores momentos, com o Travel você irá conhecer lugares inesqueciveis!",
    picture: require("../../../assets/onboard/4.png"),
  },
  {
    id: "4",
    color: "#FB3A4D",
    title: "Cidades Históricas",
    description:
      "Um bom lugar para se visitar, com a melhor companhia, é o que você precisa para ter um bom momento!",
    picture: require("../../../assets/onboard/2.png"),
  },
  {
    id: "5",
    color: "#F2AD62",
    title: "Histórias de Vida",
    description:
      "Compartilhe seus melhores momentos, com o Travel você irá conhecer lugares inesqueciveis!",
    picture: require("../../../assets/onboard/3.png"),
  },
];

const OnboardAndroid = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef(null);

  const viewableItemsChanged = useRef(({ viewableItems }: any) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  const scrollTo = async () => {
    if (currentIndex < slides.length - 1) {
      slidesRef.current.scrollToIndex({ index: currentIndex + 1 });
    } else {
      try {
        await AsyncStorage.setItem("@viewedOnboarding", "true");
      } catch (error) {
        console.log("Error @setItem:", error);
      }
    }
  };

  return (
    <S.Container>
      <S.Content>
        <FlatList
          data={slides}
          renderItem={({ item }) => <OnboardingItem item={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          bounces={false}
          keyExtractor={(item) => item.id}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            {
              useNativeDriver: false,
            }
          )}
          scollEventThrottle={32}
          onViewableItemsChanged={viewableItemsChanged}
          viewabilityConfig={viewConfig}
          ref={slidesRef}
        />
      </S.Content>

      <Paginator data={slides} scrollX={scrollX} />
      <NextButton
        scrollTo={scrollTo}
        percentage={(currentIndex + 1) * (100 / slides.length)}
      />
    </S.Container>
  );
};

export default OnboardAndroid;
