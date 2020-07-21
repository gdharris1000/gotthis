import React from 'react';
import Checkbox from './checkbox';
import {StyleSheet, Text, View} from 'react-native';
import {Card} from 'react-native-elements';

export default function Self(props) {
  const showCount = props.selfCount;

  return (
    <View style={styles.container}>
      <Card title="Self" style={styles.background}>
        <Checkbox
          label="I have gone for a walk today"
          incrementCount={props.incrementSelfCount}
        />
        <Checkbox
          label="I have done more than 30 mins exercise"
          incrementCount={props.incrementSelfCount}
        />
        <Checkbox
          label="I have done more than an hour exercise"
          incrementCount={props.incrementSelfCount}
        />
        <Checkbox
          label="I have meditated"
          incrementCount={props.incrementSelfCount}
        />
        <Checkbox
          label="I had a nice bath"
          incrementCount={props.incrementSelfCount}
        />
        <Text style={styles.total}>Section total: {showCount}</Text>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d9ead3',
    marginTop: 15,
    paddingBottom: 15,
  },
  background: {
    marginHorizontal: 20,
  },
  total: {
    textAlign: 'center',
  },
  h2: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
