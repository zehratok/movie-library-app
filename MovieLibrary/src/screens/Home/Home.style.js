import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from 'constants/theme';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  profileContainer: {
    width: SIZES.width * 0.85,
    height: SIZES.height * 0.1,
    marginTop: SIZES.margin * 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  profile: {
    flexDirection: 'row',
  },
  profileImage: {
    width: SIZES.width * 0.12,
    height: SIZES.width * 0.12,
    marginRight: SIZES.margin * 2,
  },
  greetingText: {
    color: COLORS.lightGray,
    ...FONTS.h4,
  },
  text: {
    ...FONTS.h3,
    color: COLORS.white,
    height: SIZES.height * 0.05,
  },
  notificationIcon: {
    color: COLORS.white2,
    fontSize: SIZES.font * 2.5,
  },
  searchContainer: {
    width: SIZES.width * 0.85,
    height: SIZES.height * 0.06,
    marginTop: SIZES.margin,
  },
  searchResultContainer: {
    width: SIZES.width * 0.85,
    height: SIZES.height * 0.6,
    marginTop: SIZES.margin,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  searchResultListContainer: {
    width: SIZES.width * 0.85,
    alignItems: 'center',
  },
  searchResultItemContainer: {
    width: SIZES.width * 0.85,
    marginTop: SIZES.margin,
    alignSelf: 'center',
  },
  searchResultImage: {
    alignSelf: 'center',
    width: SIZES.width * 0.5,
    height: SIZES.height * 0.4,
    borderRadius: SIZES.radius,
  },
  searchResultItemTitle: {
    height: SIZES.height * 0.05,
    marginTop: SIZES.margin,
    width: SIZES.width * 0.85,
    ...FONTS.h5,
    color: COLORS.yellow,
    textAlign: 'center',
  },
  subHeaderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  subHeaderText: {
    marginLeft: SIZES.width * 0.085,
    ...FONTS.h3,
    color: COLORS.white,
    height: SIZES.height * 0.05,
  },
  subHeaderLink: {
    ...FONTS.body4,
    color: COLORS.lightGray,
    height: SIZES.height * 0.05,
    marginRight: SIZES.width * 0.085,
  },
  categoryContainer: {
    height: SIZES.height * 0.13,
    marginTop: SIZES.margin * 2,
  },
  categoryListContainer: {
    paddingLeft: SIZES.width * 0.085,
    height: SIZES.height * 0.2,
  },
  categoryItemContainer: {
    minWidth: SIZES.width * 0.2,
    maxWidth: SIZES.width * 0.4,
    height: SIZES.height * 0.055,
    alignItems: 'center',
    borderRadius: SIZES.radius,
    justifyContent: 'center',
    marginRight: SIZES.margin * 1.6,
  },
  categoryText: {
    ...FONTS.h4,
    color: COLORS.white,
    paddingHorizontal: SIZES.margin,
  },
  popularContainer: {
    height: SIZES.height * 0.4,
    marginTop: SIZES.margin * 2,
  },
  movieListContainer: {
    paddingLeft: SIZES.width * 0.085,
    height: SIZES.height * 0.35,
  },
  movieItemContainer: {
    marginRight: SIZES.margin * 2,
  },
  movieImage: {
    width: SIZES.width * 0.55,
    height: SIZES.height * 0.35,
    borderRadius: SIZES.radius,
  },
  footerIndicator: {
    width: SIZES.width * 0.85,
    height: SIZES.height * 0.05,
    marginTop: SIZES.margin,
  },
});
export default styles;
