import React, {useEffect, useState} from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useDispatch, useSelector} from 'react-redux';
import {Header, Loading} from 'components';
import {useNavigation} from '@react-navigation/native';
import styles from './Reviewed.style';

const Reviewed = () => {
  const [loading, setLoading] = useState(true);
  const [sort, setSort] = useState(true);
  const shownMovies = useSelector(state =>
    state.shownMoviesReducer.movies.reverse(),
  );
  const dispatch = useDispatch();
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const goBack = () => {
    dispatch({type: 'SELECT_TAB', payload: 'home'});
  };
  const getDetails = id => {
    dispatch({type: 'SET_ID', payload: id});
    navigation.navigate('Details');
  };
  const renderShownMovies = ({item}) => {
    return sort ? (
      <TouchableOpacity
        style={styles.singleMovieContainer}
        onPress={() => getDetails(item?.movieId)}>
        {item?.Poster === 'N/A' ? (
          <Image
            style={styles.singleMovieImage}
            source={require('assets/images/noPoster.png')}
          />
        ) : (
          <Image
            source={{uri: item?.movie?.Poster}}
            style={styles.singleMovieImage}
          />
        )}
        <Text style={styles.singleMovieTitle}>{item?.movie?.Title}</Text>
      </TouchableOpacity>
    ) : (
      <TouchableOpacity
        style={styles.movieContainer}
        onPress={() => getDetails(item?.movieId)}>
        {item?.Poster === 'N/A' ? (
          <Image
            style={styles.movieImage}
            source={require('assets/images/noPoster.png')}
          />
        ) : (
          <Image
            source={{uri: item?.movie?.Poster}}
            style={styles.movieImage}
          />
        )}
        <Text style={styles.movieTitle}>{item?.movie?.Title}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <Header
        text="Recently Reviewed Movies"
        leftIcon="chevron-back"
        onPressLeft={goBack}
        rightIcon={sort ? 'ios-grid-outline' : 'square-outline'}
        onPressRight={() => setSort(!sort)}
      />
      <View style={styles.bodyContent}>
        {loading ? (
          <Loading />
        ) : shownMovies.length > 0 ? (
          <FlatList
            data={shownMovies}
            keyExtractor={item => item?.movieId}
            showsVerticalScrollIndicator={false}
            columnWrapperStyle={{flexWrap: 'wrap'}}
            numColumns={shownMovies.length + 1}
            contentContainerStyle={{
              alignSelf: 'center',
              alignItems: 'center',
            }}
            renderItem={item => renderShownMovies(item)}
            horizontal={false}
            key={1}
            style={styles.list}
          />
        ) : (
          <Text style={styles.noMovies}>No movies to show</Text>
        )}
      </View>
    </SafeAreaView>
  );
};

export default Reviewed;
