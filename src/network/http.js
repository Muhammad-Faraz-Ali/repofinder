import axios from 'axios';

export const fetchPublicRepos = async url => {
  let repos = [],
    apiError;
  try {
    const res = await axios.get(url);
    const data = res.data;
    // console.log('Fetched data', data);
    repos = data;
  } catch (error) {
    apiError = error;
  }
  return {repos, apiError};
};
