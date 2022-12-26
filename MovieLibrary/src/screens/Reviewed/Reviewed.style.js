import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from 'constants/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'center',
    width: SIZES.width * 0.85,
  },
  bodyContent: {
    width: SIZES.width * 0.85,
    height: SIZES.height * 0.75,
    marginBottom: SIZES.margin,
  },
  list: {
    flex: 1,
    width: SIZES.width * 0.85,
  },
  singleMovieContainer: {
    alignItems: 'center',
    marginVertical: SIZES.margin * 2,
  },
  singleMovieImage: {
    width: SIZES.width * 0.85,
    height: SIZES.height * 0.5,
    borderRadius: SIZES.radius,
  },
  singleMovieTitle: {
    textAlign: 'center',
    width: SIZES.width * 0.85,
    marginTop: SIZES.base,
    color: COLORS.white,
    ...FONTS.h3,
  },
  movieContainer: {
    marginVertical: SIZES.margin * 2.5,
    width: SIZES.width * 0.425,
    height: SIZES.height * 0.3,
  },
  movieImage: {
    alignSelf: 'center',
    width: SIZES.width * 0.4,
    height: SIZES.height * 0.25,
    borderRadius: SIZES.radius,
  },
  movieTitle: {
    textAlign: 'center',
    width: SIZES.width * 0.4,
    height: SIZES.height * 0.15,
    marginTop: SIZES.base,
    color: COLORS.white,
    ...FONTS.h4,
  },
  noMovies: {
    textAlign: 'center',
    color: COLORS.nude,
    marginVertical: SIZES.width * 0.6,
    ...FONTS.h2,
  },
});

export default styles;
