import { Dimensions } from "react-native";

const { width } = Dimensions.get("window");
export const SPACING = 12;

const s = width * 0.68;
export const slider = {
  ITEM_WIDTH: s,
  ITEM_HEIGHT: s * 1.5,
  RADIUS: 18,
  SPACING,
  FULL_SIZE: s + SPACING * 2,
};
