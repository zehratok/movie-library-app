import React, {useCallback, useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useDispatch} from 'react-redux';
import {Header, Loading} from 'components';
import {COLORS} from 'constants/theme';
import {apiUrl} from 'constants/api';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import styles from './Popular.style';

const Popular = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [moreLoading, setMoreLoading] = useState(false);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  useEffect(() => {
    getPopularMovies();
  }, []);

  const goBack = () => {
    dispatch({type: 'SELECT_TAB', payload: 'home'});
  };

  const getPopularMovies = useCallback(async () => {
    setLoading(true);
    await axios
      .get(`${apiUrl}s=batman&page=1`)
      .then(response => {
        setData(response.data.Search);
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const getPagination = useCallback(async () => {
    setMoreLoading(true);
    if (page === 1) {
      return null;
    }
    await axios
      .get(`${apiUrl}s=batman&page=${page}`)
      .then(response => {
        setData([...data, ...response.data.Search]);
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
        setMoreLoading(false);
      });
  }, [page]);
  const handleGetDetails = id => {
    dispatch({type: 'SET_ID', payload: id});
    navigation.navigate('Details');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header
        text="Popular Movies"
        leftIcon="chevron-back"
        onPressLeft={goBack}
      />
      <View style={styles.bodyContent}>
        {loading ? (
          <Loading />
        ) : (
          <FlatList
            data={data}
            style={styles.flatList}
            renderItem={({item}) => (
              <TouchableOpacity
                style={styles.itemContainer}
                onPress={() => handleGetDetails(item.imdbID)}>
                {item.Poster === 'N/A' ? (
                  <Image
                    source={require('assets/images/noPoster.png')}
                    style={styles.itemImage}
                  />
                ) : (
                  <Image
                    source={{uri: item.Poster}}
                    style={styles.itemImage}
                    resizeMode="cover"
                  />
                )}
                <Text style={styles.itemTitle}>{item.Title}</Text>
              </TouchableOpacity>
            )}
            keyExtractor={item => item.imdbID}
            showsVerticalScrollIndicator={false}
            onEndReached={() => {
              setPage(page + 1);
              getPagination();
            }}
            ListFooterComponent={() => {
              return moreLoading ? (
                <ActivityIndicator size="large" color={COLORS.white2} />
              ) : null;
            }}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default Popular;
