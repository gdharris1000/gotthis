import React from 'react';
import Checkbox from './checkbox';
import {StyleSheet, Text, View} from 'react-native';
import {Card} from 'react-native-elements';

export default function Play(props) {
  const showCount = props.playCount;

  return (
    <View style={styles.container}>
      <Card title="Play" style={styles.background}>
        <Checkbox
          label="Mario Kart"
          incrementCount={props.incrementPlayCount}
        />
        <Checkbox label="Monopoly" incrementCount={props.incrementPlayCount} />
        <Checkbox label="Chess" incrementCount={props.incrementPlayCount} />
        <Checkbox label="Darts" incrementCount={props.incrementPlayCount} />
        <Checkbox
          label="Lots and lots of television"
          incrementCount={props.incrementPlayCount}
        />
        <Text style={styles.total}>Section total: {showCount}</Text>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ead1dc',
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
