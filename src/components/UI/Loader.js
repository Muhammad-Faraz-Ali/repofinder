import {View, ActivityIndicator, StyleSheet} from 'react-native';
import React from 'react';

const Loader = ({color, size}) => {
  return (
    <View style={styles.loader}>
      <ActivityIndicator size={size} color={color} />
    </View>
  );
};

export default Loader;
const styles = StyleSheet.create({
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
