import React from 'react';
import {Text, View} from 'react-native';
import {Card} from 'react-native-elements';

export default function Total(props) {
  const livingCount = props.livingCount;
  const workCount = props.workCount;
  const playCount = props.playCount;
  const selfCount = props.selfCount;

  const totalArray = [livingCount, workCount, playCount, selfCount];

  const dailyTotal = () => {
    let total = 0;
    for (var i = 0; i < totalArray.length; i++) {
      total += totalArray[i];
    }
    return total;
  };

  return (
    <View>
      <Card title="Daily Score">
        <Text> Well Done! You have achieved {dailyTotal()} today!</Text>
      </Card>
    </View>
  );
}

// const styles = StyleSheet.create({});
