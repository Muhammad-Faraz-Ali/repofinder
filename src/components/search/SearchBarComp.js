import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {SearchBar} from 'react-native-elements';

const SearchBarComp = ({onPress}) => {
  const [userName, setUserName] = useState('');
  const handleInput = () => {
    onPress(userName);
    setUserName('');
  };

  return (
    <SearchBar
      round
      lightTheme
      searchIcon={{size: 24, color: 'red'}}
      clearIcon={{size: 24, color: 'red'}}
      value={userName}
      placeholder="Enter username"
      onChangeText={username => setUserName(username)}
      onClear={() => setUserName('')}
      onSubmitEditing={handleInput}
      containerStyle={styles.container}
      inputStyle={{color: 'black'}}
      underlineColorAndroid
    />
  );
};

export default SearchBarComp;
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 12,
    marginVertical: 8,
    padding: 0,
    borderRadius: 14,
    backgroundColor: 'white',
  },
});
