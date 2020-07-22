import {useState} from 'react';

export default function Achievements() {
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

  return {achievements, setAchievements};
}
