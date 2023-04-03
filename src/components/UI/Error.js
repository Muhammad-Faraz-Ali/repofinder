import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const Error = ({error}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.error}>{error}</Text>
    </View>
  );
};

export default Error;
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    minWidth: '94%',
    minHeight: '4%',
    margin: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  error: {
    textAlign: 'center',
    fontSize: 18,
    padding: 12,
    color: 'red',
  },
});
