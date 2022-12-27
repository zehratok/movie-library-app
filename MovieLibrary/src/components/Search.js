import React, {memo, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {TextInput} from 'components';

const Search = memo(({onSearchEnter}) => {
  const [search, setSearch] = useState('');
  return (
    <View style={styles.container}>
      <TextInput
        icon="search"
        placeholder="Search"
        value={search}
        onChangeText={newText => {
          setSearch(newText);
        }}
        onEndEditing={() => {
          onSearchEnter(search);
        }}
      />
    </View>
  );
});
export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
