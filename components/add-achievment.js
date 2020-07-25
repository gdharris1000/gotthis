import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

export default function AddAchievement(props) {
  const [achievement, setAchievement] = useState('');
  const [category, setCategory] = useState([]);
  const [tags, setTags] = useState([]);
  const [catSelect, setCatSelect] = useState([
    {category: 'Work', selected: false},
    {category: 'Self', selected: false},
    {category: 'Living', selected: false},
    {category: 'Play', selected: false},
  ]);

  const [tagsSelect, setTagsSelect] = useState([
    {tag: 'Health, Wellbeing, Fitness', selected: false},
    {tag: 'Creating', selected: false},
    {tag: 'New Developments', selected: false},
    {tag: 'Giving', selected: false},
    {tag: 'Receiving', selected: false},
    {tag: 'Other', selected: false},
  ]);

  const updateCatValue = (index) => {
    let newArr = [...catSelect];
    newArr[index].selected = !catSelect[index].selected;
    setCatSelect(newArr);
    var cat = [];
    catSelect.map((item) => {
      if (item.selected === true) {
        cat.push(item.category);
      }
    });
    setCategory(cat);
  };

  const updateTagsValue = (index) => {
    let newArr = [...tagsSelect];
    newArr[index].selected = !tagsSelect[index].selected;
    setTagsSelect(newArr);
    var newTags = [];
    tagsSelect.map((item) => {
      if (item.selected === true) {
        newTags.push(item.tag);
      }
    });
    setTags(newTags);
  };

  const submitAchievement = () => {
    console.log('categoryies:' + category);
    props.addAchievement(achievement, category, tags);
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Enter achievement"
        onChangeText={setAchievement}
        style={styles.txtInput}
        multiline
        numberOfLines={6}
      />
      <Text>Where does it sit?</Text>

      {catSelect.map((item, index) => (
        <>
          <Text>{item.category}</Text>
          <CheckBox
            disabled={false}
            value={item.selected}
            onValueChange={() => updateCatValue(index)}
          />
        </>
      ))}

      <Text>What does it cover</Text>

      {tagsSelect.map((item, index) => (
        <>
          <Text>{item.tag}</Text>
          <CheckBox
            disabled={false}
            value={item.selected}
            onValueChange={() => updateTagsValue(index)}
          />
        </>
      ))}

      <TouchableOpacity style={styles.btn} onPress={() => submitAchievement()}>
        <Text style={styles.btnText}>Add Achievement</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  btn: {
    backgroundColor: '#c2bad8',
    padding: 10,
    marginTop: 10,
  },
  btnText: {
    color: 'darkslateblue',
    fontSize: 20,
    textAlign: 'center',
  },
  btnView: {
    flexDirection: 'row',
  },
  radioBtnText: {
    marginLeft: 10,
    marginTop: 10,
    fontWeight: 'bold',
  },
  txtInput: {
    borderColor: 'black',
    borderWidth: 2,
    borderStyle: 'solid',
    fontSize: 18,
    padding: 10,
    marginTop: 10,
  },
  checkbox: {
    alignSelf: 'center',
  },
});
