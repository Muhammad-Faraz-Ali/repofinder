import {Text, StyleSheet, Image, Pressable, Linking} from 'react-native';
import React from 'react';

const User = ({user}) => {
  return (
    <Pressable
      style={({pressed}) => [styles.root, pressed && styles.pressed]}
      android_ripple={{color: 'gray'}}
      onPress={() => Linking.openURL(user.owner.html_url)}>
      <Image
        style={styles.img}
        source={{
          uri: user.owner.avatar_url,
        }}
      />
      <Text style={styles.user}>{user.owner.login}</Text>
    </Pressable>
  );
};

export default User;
const styles = StyleSheet.create({
  root: {
    margin: 12,
    backgroundColor: 'white',
    // borderRadius: 2,
    height: '30%',
    overflow: 'hidden',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  img: {
    width: '30%',
    height: '50%',
    borderRadius: 100,
    marginVertical: 12,
  },
  user: {
    textAlign: 'center',
    fontSize: 24,
    // fontWeight: 'bold',
    marginBottom: 12,
    color: 'black',
  },
  pressed: {
    opacity: 0.7,
  },
});
