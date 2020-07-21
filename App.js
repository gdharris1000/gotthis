import React, {useState} from 'react';
import Nav from './components/nav';
import Self from './components/self';
import Play from './components/play';
import Living from './components/living';
import Work from './components/work';
import Total from './components/total';
import AddAchievement from './components/add-achievment';
// import {achievements, setAchievements} from './components/achievements';
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

  const addAchievement = (achievement, category) => {
    setAchievements((prevItems) => {
      return [{achievement, category, status: true}, ...prevItems];
    });
    console.log(achievements);
  };

  const [achievements, setAchievements] = useState([
    {
      achievement: 'I have gone for a walk today',
      category: 'Self',
      status: false,
    },
    {
      achievement: 'I have done more than 30 mins exercise',
      category: 'Self',
      status: false,
    },
    {
      achievement: 'I have done more than an hour exercise',
      category: 'Self',
      status: false,
    },
    {achievement: 'I have meditated', category: 'Self', status: false},
    {achievement: 'I had a nice bath', category: 'Self', status: false},
    {achievement: 'Filed expenses', category: 'Work', status: false},
    {achievement: 'Set out of office email', category: 'Work', status: false},
    {achievement: "Didn't steal any pens", category: 'Work', status: false},
    {achievement: 'Booked holiday', category: 'Work', status: false},
    {achievement: 'Won employee of the month', category: 'Work', status: false},
    {achievement: 'Mario Kart', category: 'Play', status: false},
    {achievement: 'Monopoly', category: 'Play', status: false},
    {achievement: 'Chess', category: 'Play', status: false},
    {achievement: 'Darts', category: 'Play', status: false},
    {
      achievement: 'Lots and lots of television',
      category: 'Play',
      status: false,
    },
    {achievement: 'Paid bills', category: 'Living', status: false},
    {achievement: 'Cleaned kitchen', category: 'Living', status: false},
    {achievement: 'Waterd plants', category: 'Living', status: false},
    {achievement: 'Vaccumed house', category: 'Living', status: false},
    {achievement: 'Taken out rubbish', category: 'Living', status: false},
  ]);

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
        <AddAchievement addAchievement={addAchievement} />
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
