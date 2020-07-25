import React, {useState} from 'react';
import Nav from './components/nav';
import Total from './components/total';
import AddAchievement from './components/add-achievment';
import {StyleSheet, ScrollView, SafeAreaView, View} from 'react-native';
import Category from './components/category';
import uuid from 'uuid-random';

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

  const addAchievement = (achievement, categories, tags) => {
    setAchievements((prevItems) => {
      return [
        {id: uuid(), achievement, categories, tags, status: true},
        ...prevItems,
      ];
    });
    console.log(achievements);
  };

  const [achievements, setAchievements] = useState([
    {
      id: uuid(),
      achievement: 'I have gone for a walk today',
      categories: ['Self'],
      tags: ['Health, wellbeing, fitness'],
    },
    {
      id: uuid(),
      achievement: "Didn't steal any pens",
      categories: ['Work'],
      tags: ['Giving'],
    },
  ]);

  // const [achievements, setAchievements] = useState([
  //   {
  //     id: uuid(),
  //     achievement: 'I have gone for a walk today',
  //     category: 'Self',
  //     status: false,
  //   },
  //   {
  //     id: uuid(),
  //     achievement: 'I have done more than 30 mins exercise',
  //     category: 'Self',
  //     status: false,
  //   },
  //   {
  //     id: uuid(),
  //     achievement: 'I have done more than an hour exercise',
  //     category: 'Self',
  //     status: false,
  //   },
  //   {
  //     id: uuid(),
  //     achievement: 'I have meditated',
  //     category: 'Self',
  //     status: false,
  //   },
  //   {
  //     id: uuid(),
  //     achievement: 'I had a nice bath',
  //     category: 'Self',
  //     status: false,
  //   },
  //   {
  //     id: uuid(),
  //     achievement: 'Filed expenses',
  //     category: 'Work',
  //     status: false,
  //   },
  //   {
  //     id: uuid(),
  //     achievement: 'Set out of office email',
  //     category: 'Work',
  //     status: false,
  //   },
  //   {
  //     id: uuid(),
  //     achievement: "Didn't steal any pens",
  //     category: 'Work',
  //     status: false,
  //   },
  //   {
  //     id: uuid(),
  //     achievement: 'Booked holiday',
  //     category: 'Work',
  //     status: false,
  //   },
  //   {
  //     id: uuid(),
  //     achievement: 'Won employee of the month',
  //     category: 'Work',
  //     status: false,
  //   },
  //   {id: uuid(), achievement: 'Mario Kart', category: 'Play', status: false},
  //   {id: uuid(), achievement: 'Monopoly', category: 'Play', status: false},
  //   {id: uuid(), achievement: 'Chess', category: 'Play', status: false},
  //   {id: uuid(), achievement: 'Darts', category: 'Play', status: false},
  //   {
  //     id: uuid(),
  //     achievement: 'Lots and lots of television',
  //     category: 'Play',
  //     status: false,
  //   },
  //   {id: uuid(), achievement: 'Paid bills', category: 'Living', status: false},
  //   {
  //     id: uuid(),
  //     achievement: 'Cleaned kitchen',
  //     category: 'Living',
  //     status: false,
  //   },
  //   {
  //     id: uuid(),
  //     achievement: 'Waterd plants',
  //     category: 'Living',
  //     status: false,
  //   },
  //   {
  //     id: uuid(),
  //     achievement: 'Vaccumed house',
  //     category: 'Living',
  //     status: false,
  //   },
  //   {
  //     id: uuid(),
  //     achievement: 'Taken out rubbish',
  //     category: 'Living',
  //     status: false,
  //   },
  // ]);

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <Nav />
          <AddAchievement addAchievement={addAchievement} />
          <Category
            catName="Living"
            count={livingCount}
            incrementCount={incrementLivingCount}
            achievements={achievements}
          />
          <Category
            catName="Self"
            count={selfCount}
            incrementCount={incrementSelfCount}
            achievements={achievements}
          />
          <Category
            catName="Play"
            count={playCount}
            incrementCount={incrementPlayCount}
            achievements={achievements}
          />
          <Category
            catName="Work"
            count={workCount}
            incrementCount={incrementWorkCount}
            achievements={achievements}
          />
          <Total
            livingCount={livingCount}
            workCount={workCount}
            selfCount={selfCount}
            playCount={playCount}
          />
        </ScrollView>
      </SafeAreaView>
    </View>
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
