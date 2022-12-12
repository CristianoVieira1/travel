import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import * as Animatable from "react-native-animatable";
import Button from "../../components/Button";
import Slider from "./components/Slider";
import Slide from "./components/Slider/Slide";
import * as S from "./styles";

const slides = [
  {
    color: "#F2A1AD",
    title: "Melhores Momentos",
    description:
      "Compartilhe seus melhores momentos, com o Travel você irá conhecer lugares inesqueciveis!",
    picture: require("../../assets/onboard/1.png"),
  },
  {
    color: "#0090D6",
    title: "Pontos Turísticos",
    description:
      "Um bom lugar para se visitar, com a melhor companhia, é o que você precisa para ter um bom momento!",
    picture: require("../../assets/onboard/5.png"),
  },
  {
    color: "#69C743",
    title: "Divirta-se",
    description:
      "Compartilhe seus melhores momentos, com o Travel você irá conhecer lugares inesqueciveis!",
    picture: require("../../assets/onboard/4.png"),
  },
  {
    color: "#FB3A4D",
    title: "Cidades Históricas",
    description:
      "Um bom lugar para se visitar, com a melhor companhia, é o que você precisa para ter um bom momento!",
    picture: require("../../assets/onboard/2.png"),
  },
  {
    color: "#F2AD62",
    title: "Histórias de Vida",
    description:
      "Compartilhe seus melhores momentos, com o Travel você irá conhecer lugares inesqueciveis!",
    picture: require("../../assets/onboard/3.png"),
  },
];

export const assets = slides.map(({ picture }) => picture);

const Onboard = () => {
  const navigation = useNavigation();
  const [index, setIndex] = useState(0);
  const prev = slides[index - 1];
  const next = slides[index + 1];

  return (
    <>
      <Slider
        key={index}
        index={index}
        setIndex={setIndex}
        prev={prev && <Slide slide={prev} />}
        next={next && <Slide slide={next} />}
      >
        <Slide slide={slides[index]!} />
        {index === slides.length - 1 ? (
          <S.Container>
            <Animatable.View
              animation={"bounceInUp"}
              useNativeDriver
              duration={3000}
            >
              <S.Content>
                <Animatable.View
                  animation={"pulse"}
                  useNativeDriver
                  iterationCount={"infinite"}
                >
                  <Button
                    title="Começar"
                    type="link"
                    size="medium"
                    icon="arrowright"
                    onPress={() => navigation.navigate("Login")}
                  />
                </Animatable.View>
              </S.Content>
            </Animatable.View>
          </S.Container>
        ) : (
          <></>
        )}
      </Slider>
    </>
  );
};

export default Onboard;
