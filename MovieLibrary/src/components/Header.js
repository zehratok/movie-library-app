import React, { memo } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { COLORS, SIZES, FONTS } from "constants/theme";
import Icon from "react-native-vector-icons/Ionicons";

const Header = memo(({ leftIcon, onPressLeft, onPressRight, rightIcon, text }) => {
  return (
    <View style={styles.container}>
      {leftIcon ? (
        <TouchableOpacity style={styles.leftButton} onPress={onPressLeft}>
          <Icon name={leftIcon} size={30} color={COLORS.white} />
        </TouchableOpacity>
      ) : null}
      <Text style={styles.text}>{text}</Text>
      {rightIcon ? (
        <TouchableOpacity style={styles.rightButton} onPress={onPressRight}>
          <Icon name={rightIcon} size={30} color={COLORS.white} />
        </TouchableOpacity>
      ) : null}
    </View>
  );
});
export default Header;

const styles = StyleSheet.create({
  container: {
    width: SIZES.width * 0.85,
    height: SIZES.height * 0.1,
    alignItems: "center",
    marginTop: SIZES.margin * 3,
  },
  leftButton: {
    position: "absolute",
    left: 0,
    top: 0,
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.darkGray,
    width: SIZES.width * 0.13,
    height: SIZES.width * 0.13,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: COLORS.white2,
    ...FONTS.h2,
    marginTop: SIZES.margin,
  },
  rightButton: {
    position: "absolute",
    right: 0,
    top: 0,
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.darkGray,
    width: SIZES.width * 0.13,
    height: SIZES.width * 0.13,
    justifyContent: "center",
    alignItems: "center",
  },
});
