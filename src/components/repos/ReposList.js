import {StyleSheet, ScrollView, View} from 'react-native';
import React from 'react';
import Repo from './Repo';
import User from '../UI/User';
import Error from '../UI/Error';
const ReposList = ({repos, loading, validUserName}) => {
  let content = '';
  if (!loading && validUserName && repos.length !== 0) {
    content = (
      <>
        <User user={repos[0]} />
        <ScrollView style={styles.container}>
          {repos.map(repo => {
            return (
              <View key={repo.id}>
                <Repo repo={repo} />
              </View>
            );
          })}
        </ScrollView>
      </>
    );
  }
  if (!validUserName && !loading && repos.length !== 0) {
    content = <Error error="Please enter a valid username" />;
  }
  return <>{content}</>;
};

export default ReposList;
const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
});
