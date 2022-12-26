import {StyleSheet} from 'react-native';
import {COLORS, SIZES} from '../../constants/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  topContainer: {
    height: SIZES.height * 0.85,
  },
  footerContainer: {
    justifyContent: 'space-around',
    backgroundColor: COLORS.transparentBlack3,
    width: SIZES.width * 0.85,
    height: SIZES.height * 0.095,
    borderRadius: SIZES.radius,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    marginTop: SIZES.height * 0.05,
    color: COLORS.white,
    fontSize: SIZES.h3,
    fontWeight: 'bold',
  },
});
export default styles;
