import React, {useState} from 'react';
import Nav from './components/nav';
import Self from './components/self';
import Play from './components/play';
import Living from './components/living';
import Work from './components/work';
import Total from './components/total';
import {StyleSheet, ScrollView, SafeAreaView} from 'react-native';

export default function App() {
  const [selfCount, setSelfCount] = useState(0);
  const [playCount, setPlayCount] = useState(0);
  const [livingCount, setLivingCount] = useState(0);
  const [workCount, setWorkCount] = useState(0);

  const incrementSelfCount = (isSelected) => {
    isSelected ? setSelfCount(selfCount - 1) : setSelfCount(selfCount + 1);
  };

  const incrementPlayCount = (isSelected) => {
    isSelected ? setPlayCount(playCount - 1) : setPlayCount(playCount + 1);
  };

  const incrementLivingCount = (isSelected) => {
    isSelected
      ? setLivingCount(livingCount - 1)
      : setLivingCount(livingCount + 1);
  };

  const incrementWorkCount = (isSelected) => {
    isSelected ? setWorkCount(workCount - 1) : setWorkCount(workCount + 1);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Nav />
        <Self incrementSelfCount={incrementSelfCount} selfCount={selfCount} />
        <Play incrementPlayCount={incrementPlayCount} playCount={playCount} />
        <Living
          incrementLivingCount={incrementLivingCount}
          livingCount={livingCount}
        />
        <Work incrementWorkCount={incrementWorkCount} workCount={workCount} />
        <Total
          livingCount={livingCount}
          workCount={workCount}
          selfCount={selfCount}
          playCount={playCount}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    backgroundColor: 'white',
  },
});
