import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const COLORS = {
    black: "#050506",
    black2: '#25252D',
    brown: '#472A31',
    darkGray: '#535353',
    lightGray: '#ABA9B5',
    blue: '#240AFC',
    darkBlue: '#361FCA',
    lightBrown: '#964023',
    nude: '#BD936E',
    white: '#FFFFFF',
    white2: "#FBFBFB",
    blue2: '#6835FE',
    yellow: "#F9BF1F",
    transparent: 'transparent',
    transparentBlue : 'rgba(36, 10, 252, 0.5)',
    transparentWhite1: "rgba(255, 255, 255, 0.1)",
    transparentBlack1: "rgba(0, 0, 0, 0.1)",
    transparentBlack2: "rgba(0, 0, 0, 0.8)",
    transparentBlack3: "rgba(37, 37, 45, 0.8)"

};
export const SIZES = {
    base: width * 0.04,
    font: width * 0.035,
    radius:  width * 0.045,
    margin: width * 0.025,
    padding: width * 0.028,
    largeTitle: width * 0.1,
    h1: width * 0.07,
    h2: width * 0.06,
    h3: width * 0.05,
    h4: width * 0.04,
    h5: width * 0.03,
    body1: width * 0.08,
    body2: width * 0.05,
    body3: width * 0.04,
    body4: width * 0.03,
    body5: width * 0.02,
    width,
    height
};
export const FONTS = {
    largeTitle: { fontFamily: "Poppins-Black", fontSize: SIZES.largeTitle },
    h1: { fontFamily: "Poppins-Bold", fontSize: SIZES.h1, lineHeight: 36 },
    h2: { fontFamily: "Poppins-Bold", fontSize: SIZES.h2, lineHeight: 30 },
    h3: { fontFamily: "Poppins-SemiBold", fontSize: SIZES.h3, lineHeight: 22 },
    h4: { fontFamily: "Poppins-SemiBold", fontSize: SIZES.h4, lineHeight: 22 },
    h5: { fontFamily: "Poppins-SemiBold", fontSize: SIZES.h5, lineHeight: 22 },
    body1: { fontFamily: "Poppins-Regular", fontSize: SIZES.body1, lineHeight: 36 },
    body2: { fontFamily: "Poppins-Regular", fontSize: SIZES.body2, lineHeight: 30 },
    body3: { fontFamily: "Poppins-Regular", fontSize: SIZES.body3, lineHeight: 22 },
    body4: { fontFamily: "Poppins-Regular", fontSize: SIZES.body4, lineHeight: 22 },
    body5: { fontFamily: "Poppins-Regular", fontSize: SIZES.body5, lineHeight: 22 },
};

const appTheme = { COLORS, SIZES, FONTS };

export default appTheme;
