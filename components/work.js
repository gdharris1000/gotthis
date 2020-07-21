import React from 'react';
import Checkbox from './checkbox';
import {StyleSheet, Text, View} from 'react-native';
import {Card} from 'react-native-elements';

export default function Work(props) {
  const showCount = props.workCount;

  return (
    <View style={styles.container}>
      <Card title="Work" style={styles.background}>
        <Checkbox
          label="Filed expenses"
          incrementCount={props.incrementWorkCount}
        />
        <Checkbox
          label="Set out of office email"
          incrementCount={props.incrementWorkCount}
        />
        <Checkbox
          label="Didn't steal any pens"
          incrementCount={props.incrementWorkCount}
        />
        <Checkbox
          label="Booked holiday"
          incrementCount={props.incrementWorkCount}
        />
        <Checkbox
          label="Won employee of the month"
          incrementCount={props.incrementWorkCount}
        />
        <Text style={styles.total}>Section total: {showCount}</Text>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c9daf8',
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
