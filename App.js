import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import SearchBarComp from './src/components/search/SearchBarComp';
import {fetchPublicRepos} from './src/network/http';

import ReposList from './src/components/repos/ReposList';
import Loader from './src/components/UI/Loader';
const App = () => {
  const [fetchedRepos, setFetchedRepos] = useState([]);
  const [validUserName, setValidUserName] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleInput = async username => {
    setLoading(true);

    let url = `https://api.github.com/users/${username}/repos`;
    const {repos, apiError: error} = await fetchPublicRepos(url);

    if (!error) {
      setValidUserName(true);
      setFetchedRepos(repos);
    } else {
      setValidUserName(false);
    }
    setLoading(false);
  };
  return (
    <View style={styles.root}>
      <SearchBarComp onPress={handleInput} />
      {loading && <Loader color="white" size="large" />}
      {!loading && (
        <ReposList
          repos={fetchedRepos}
          validUserName={validUserName}
          loading={loading}
        />
      )}
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#76511A',
    flexDirection: 'column',
  },
});
