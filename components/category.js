import React from 'react';
import Checkbox from './checkbox';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import {Card} from 'react-native-elements';

export default function Category(props) {
  const catName = props.catName;
  const count = props.count;
  const achievements = props.achievements;

  const setColour = () => {
    if (catName === 'Work') {
      return '#c9daf8';
    } else if (catName === 'Self') {
      return '#d9ead3';
    } else if (catName === 'Play') {
      return '#ead1dc';
    } else if (catName === 'Living') {
      return '#fce5cd';
    } else {
      return 'grey';
    }
  };

  return (
    <View style={[styles.container, {backgroundColor: setColour()}]}>
      <Card title={catName} style={styles.background}>
        <FlatList
          data={achievements}
          renderItem={({item, index}) => {
            if (item.category === catName) {
              return (
                <Checkbox
                  label={item.achievement}
                  incrementCount={props.incrementCount}
                />
              );
            }
          }}
        />
        <Text style={styles.total}>Section total: {count}</Text>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
