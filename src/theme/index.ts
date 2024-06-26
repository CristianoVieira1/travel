import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "../utils/DeviceResolution";

export default {
  device: {
    width: widthPercentageToDP("100%"),
    height: heightPercentageToDP("100%"),
  },
  border: {
    radius: "0.4rem",
  },
  fonts: {
    regular: "PublicSans_400Regular",
    medium: "PublicSans_500Medium",
    bold: " PublicSans_700Bold_Italic",
    sizes: {
      xxsmall: "10px",
      xsmall: "12px",
      small: "14px",
      medium: "16px",
      large: "24px",
      xlarge: "30px",
      xxlarge: "39px",
      xxxlarge: "64px",
    },
  },
  colors: {
    white: "#FFFFFF",
    orange: "#FF8200",
    danger: "#DC2626",
    dangerText: "#FF0000",
    lightGray: "#9CA3AF",
    darkGray: "#1F2937",
    opacityBlack: "#575F69",
  },
  shadow: {
    shadowOpacity: 0.5,
    shadowOffset: { width: 5, height: 3 },
    shadowRadius: 2,
    elevation: 5,
    shadowColor: "#00000066",
  },
  spacings: {
    xxsmall: "6px",
    xsmall: "12px",
    small: "14px",
    medium: "16px",
    large: "18px",
    xlarge: "20px",
    xxlarge: "24px",
    xxxlarge: "32px",
  },
};
