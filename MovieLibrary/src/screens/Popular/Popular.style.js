import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from 'constants/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: SIZES.width * 0.85,
    alignSelf: 'center',
  },
  bodyContent: {
    width: SIZES.width * 0.85,
    height: SIZES.height * 0.75,
    marginBottom: SIZES.margin,
  },
  flatList: {
    flex: 1,
    width: SIZES.width * 0.85,
    alignSelf: 'center',
    marginVertical: SIZES.margin,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: SIZES.margin
  },
  itemImage: {
    width: SIZES.width * 0.25,
    height: SIZES.width * 0.25,
    borderRadius: SIZES.radius,
  },
  itemTitle: {
    width: SIZES.width * 0.5,
    ...FONTS.h3,
    color: COLORS.white,
  },
});
export default styles;
