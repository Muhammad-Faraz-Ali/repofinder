import {Linking} from 'react-native';
import React from 'react';

import {
  Card,
  CardTitle,
  CardContent,
  CardAction,
  CardButton,
} from 'react-native-material-cards';

const Repo = ({repo}) => {
  return (
    <Card>
      <CardTitle title={repo.name} />
      <CardContent text={repo.description} />
      <CardAction separator={true} inColumn={false}>
        <CardButton
          onPress={() => {
            Linking.openURL(repo.html_url);
          }}
          title="Repo Link"
          color="blue"
        />
      </CardAction>
    </Card>
  );
};

export default Repo;
