import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from 'constants/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  scrollContainer: {
    flex: 1,
    width: SIZES.width,
    marginTop: SIZES.padding,
    alignContent: 'center',
  },
  image: {
    alignSelf: 'center',
    width: SIZES.width * 0.85,
    height: SIZES.height * 0.5,
    borderRadius: SIZES.radius * 1.25,
  },
  titleContainer: {
    alignSelf: 'center',
    width: SIZES.width * 0.85,
    flexDirection: 'row',
    marginTop: SIZES.margin * 2,
    justifyContent: 'space-between',
  },
  title: {
    ...FONTS.h3,
    color: COLORS.white2,
    width: SIZES.width * 0.6,
  },
  ratingContainer: {
    width: SIZES.width * 0.25,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  ratingIcon: {
    color: COLORS.yellow,
    fontSize: SIZES.font * 2,
  },
  rating: {
    fontSize: SIZES.body2,
    color: COLORS.white2,
    marginLeft: SIZES.margin / 2,
    textAlign: 'center',
  },
  plotText: {
    alignSelf: 'center',
    width: SIZES.width * 0.85,
    ...FONTS.body3,
    color: COLORS.white2,
    marginTop: SIZES.margin,
  },
  infoContainer: {
    alignSelf: 'center',
    width: SIZES.width * 0.85,
    marginTop: SIZES.margin,
  },
  directorText: {
    ...FONTS.body3,
    color: COLORS.black,
  },
  actorText: {
    ...FONTS.body3,
    color: COLORS.black,
    alignSelf: 'flex-start',
  },
  tabText: {
    ...FONTS.body4,
    color: COLORS.black2,
    alignSelf: 'center',
  },
  subText: {
    marginTop: SIZES.margin,
    width: SIZES.width * 0.85,
    ...FONTS.h3,
    color: COLORS.yellow,
    alignSelf: 'center',
  },
  movieListContainer: {
    paddingLeft: SIZES.width * 0.085,
    marginTop: SIZES.margin,
    marginBottom: SIZES.margin * 2,
  },
  movieItemContainer: {
    marginRight: SIZES.margin * 2,
  },
  movieImage: {
    width: SIZES.width * 0.25,
    height: SIZES.height * 0.15,
    borderRadius: SIZES.radius,
  },
  noMoviesContainer: {
    width: SIZES.width * 0.85,
    alignSelf: 'center',
  },
  noMoviesText: {
    ...FONTS.body3,
    color: COLORS.black2,
  },
  errorContainer: {
    width: SIZES.width * 0.85,
    height: SIZES.height * 0.6,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  errorText: {
    color: COLORS.lightBrown,
    ...FONTS.h3,
    textAlign: 'center',
  },
});
export default styles;
