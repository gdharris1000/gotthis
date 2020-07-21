import React from 'react';
import Checkbox from './checkbox';
import {StyleSheet, Text, View} from 'react-native';
import {Card} from 'react-native-elements';

export default function Living(props) {
  const showCount = props.livingCount;

  return (
    <View style={styles.container}>
      <Card title="Living" style={styles.background}>
        <Checkbox
          label="Paid bills"
          incrementCount={props.incrementLivingCount}
        />
        <Checkbox
          label="Cleaned kitchen"
          incrementCount={props.incrementLivingCount}
        />
        <Checkbox
          label="Watered plants"
          incrementCount={props.incrementLivingCount}
        />
        <Checkbox
          label="Vaccumed house"
          incrementCount={props.incrementLivingCount}
        />
        <Checkbox
          label="Taken out rubbish"
          incrementCount={props.incrementLivingCount}
        />
        <Text style={styles.total}>Section total: {showCount}</Text>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fce5cd',
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
