import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { useRef } from "react";
import { Animated, StyleSheet, TouchableOpacity, View } from "react-native";
import Header from "../../../components/Header";
import ScreenView from "../../../components/ScreenView";
import { data } from "./data";
import * as S from "./styles";
import { slider } from "./theme";

const { ITEM_WIDTH, ITEM_HEIGHT, RADIUS, SPACING, FULL_SIZE } = slider;

const Home = () => {
  const navigation = useNavigation();
  const scrollX = useRef(new Animated.Value(0)).current;
  return (
    <ScreenView statusbarColor="dark">
      <Header isIconMenu={true} isIconBack={false} />
      <S.Container>
        <S.Title>Aproveite o mundo</S.Title>
        <S.Content>
          <S.Selected>
            <S.SelectText>Populares</S.SelectText>
          </S.Selected>
          <S.Description>Populares</S.Description>
        </S.Content>
      </S.Container>
      <TouchableOpacity style={styles.itemContainer}>
        <Animated.FlatList
          data={data}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToInterval={FULL_SIZE / 2}
          decelerationRate="fast"
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: true }
          )}
          renderItem={({ item, index }) => {
            const inputRange = [
              (index - 1) * FULL_SIZE,
              index * FULL_SIZE,
              (index + 1) * FULL_SIZE,
            ];

            const translateX = scrollX.interpolate({
              inputRange,
              outputRange: [ITEM_WIDTH, 0, -ITEM_WIDTH],
            });

            const scale = scrollX.interpolate({
              inputRange,
              outputRange: [1, 1.1, 1],
            });
            return (
              <S.Card
                onPress={() =>
                  navigation.navigate("HomeDetails", {
                    item: {
                      id: item.id,
                      image: item.image,
                      state: item.state,
                    },
                  })
                }
              >
                <View
                  style={[
                    StyleSheet.absoluteFillObject,
                    { overflow: "hidden", borderRadius: RADIUS },
                  ]}
                >
                  <Animated.Image
                    source={{ uri: item.image }}
                    style={[
                      StyleSheet.absoluteFillObject,
                      { resizeMode: "cover", transform: [{ scale }] },
                    ]}
                  />
                </View>

                <Animated.Text
                  style={[styles.location, { transform: [{ translateX }] }]}
                >
                  <S.CardTitle>{item.state}</S.CardTitle>
                </Animated.Text>
                <S.CardContent>
                  <Feather name="map-pin" size={24} color="red" />
                </S.CardContent>
              </S.Card>
            );
          }}
        />
      </TouchableOpacity>
    </ScreenView>
  );
};

export default Home;

const styles = StyleSheet.create({
  itemContainer: {
    width: ITEM_WIDTH * 1.5,
    height: ITEM_HEIGHT,
    marginTop: SPACING * 2,
  },
  location: {
    fontSize: 30,
    color: "white",
    fontWeight: "800",
    width: ITEM_WIDTH * 0.8,
    textTransform: "uppercase",
    position: "absolute",
    top: SPACING,
    bottom: SPACING,
  },
});
