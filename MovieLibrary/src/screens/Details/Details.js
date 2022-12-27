import React, {memo, useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  Share,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {apiUrl} from 'constants/api';
import {COLORS} from 'constants/theme';
import {Header, Loading} from 'components';
import axios from 'axios';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/Entypo';
import LinearGradient from 'react-native-linear-gradient';
import styles from './Details.style';

const Details = memo(({navigation}) => {
  const [movie, setMovie] = useState(null);
  const movieId = useSelector(state => state.movieIdReducer.movieId);
  const shownMovies = useSelector(state =>
    state.shownMoviesReducer.movies.reverse(),
  );
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    getDetails();
  }, [movieId]);

  useEffect(() => {
    setShownMovies();
  }, [movie]);

  const getDetails = async () => {
    setLoading(true);
    await axios
      .get(`${apiUrl}i=${movieId}`)
      .then(response => {
        return setMovie(response.data);
      })
      .catch(err => {
        console.log(err);
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  const setShownMovies = () => {
    if (!error) {
      if (shownMovies.find(item => item.movieId === movieId)) {
        dispatch({type: 'REMOVE_MOVIE', payload: movieId});
        dispatch({type: 'ADD_SHOWN_MOVIE', payload: {movie, movieId}});
      } else {
        dispatch({type: 'ADD_SHOWN_MOVIE', payload: {movie, movieId}});
      }
    } else {
      return null;
    }
  };
  const handleGetDetailsShownMovie = id => {
    dispatch({type: 'SET_ID', payload: id});
    navigation.navigate('Details');
  };

  const renderMovieDetails = () => {
    if (error) {
      return (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>Something went wrong!</Text>
        </View>
      );
    } else {
      return (
        <>
          {movie?.Poster === 'N/A' ? (
            <Image
              source={require('assets/images/noPoster.png')}
              style={styles.image}
            />
          ) : (
            <Image source={{uri: movie?.Poster}} style={styles.image} />
          )}
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{movie?.Title}</Text>
            <View style={styles.ratingContainer}>
              <Text style={styles.rating}>
                {movie?.imdbRating <= 6 ? (
                  <Icon name="ios-star-half-sharp" style={styles.ratingIcon} />
                ) : (
                  <Icon name="star" style={styles.ratingIcon} />
                )}{' '}
                {movie?.imdbRating}
              </Text>
            </View>
          </View>
          <Text style={styles.plotText}>{movie?.Plot}</Text>
          <View style={styles.infoContainer}>
            <Text style={styles.directorText}>Director: {movie?.Director}</Text>
            <Text style={styles.actorText}>Actors: {movie?.Actors}</Text>
            <Text style={styles.tabText}>
              {' '}
              {movie?.Released}
              <Icon2 name="dot-single" size={20} />
              {movie?.Runtime} <Icon2 name="dot-single" size={20} />
              {movie?.Country}{' '}
            </Text>
          </View>
        </>
      );
    }
  };
  const renderShownMovies = () => {
    if (shownMovies.length > 0) {
      return (
        <FlatList
          horizontal
          data={shownMovies}
          keyExtractor={item => item?.movieId}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.movieListContainer}
          renderItem={({item}) => (
            <TouchableOpacity
              style={styles.movieItemContainer}
              onPress={() => handleGetDetailsShownMovie(item.movieId)}>
              {item?.movie?.Poster === 'N/A' ? (
                <Image
                  source={require('assets/images/noPoster.png')}
                  style={styles.movieImage}
                />
              ) : (
                <Image
                  source={{uri: item?.movie?.Poster}}
                  style={styles.movieImage}
                />
              )}
            </TouchableOpacity>
          )}
        />
      );
    } else {
      return (
        <View style={styles.noMoviesContainer}>
          <Text style={styles.noMoviesText}>No movies to show</Text>
        </View>
      );
    }
  };

  return (
    <LinearGradient
      colors={[COLORS.black, COLORS.darkGray]}
      style={styles.container}>
      <Header
        text="Details"
        leftIcon="chevron-back"
        rightIcon="share-social-outline"
        onPressLeft={() => navigation.goBack()}
        onPressRight={() => {
          Share.share({
            message: `Check out this movie: https://www.imdb.com/title/${movie.imdbID}`,
          });
        }}
      />
      {loading ? (
        <Loading />
      ) : (
        <ScrollView style={styles.scrollContainer}>
          {renderMovieDetails()}
          <Text style={styles.subText}>Recently reviewed movies</Text>
          {renderShownMovies()}
        </ScrollView>
      )}
    </LinearGradient>
  );
});
export default Details;
