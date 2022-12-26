import React, {memo} from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import {COLORS, FONTS, SIZES} from 'constants/theme';
import Icon from 'react-native-vector-icons/Ionicons';

const Input = memo(({icon, placeholder, value, onChangeText, onEndEditing}) => {
  return (
    <View style={styles.container}>
      <Icon name={icon} style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor={COLORS.lightGray}
        value={value}
        onChangeText={onChangeText}
        onEndEditing={onEndEditing}
      />
    </View>
  );
});
export default Input;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: COLORS.darkGray,
    borderRadius: SIZES.radius,
  },
  icon: {
    color: COLORS.lightGray,
    fontSize: SIZES.font * 1.5,
    marginLeft: SIZES.padding,
  },
  input: {
    width: '90%',
    height: 50,
    paddingLeft: 20,
    color: COLORS.white,
    ...FONTS.body3,
  },
});
