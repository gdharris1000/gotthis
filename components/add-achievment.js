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
  const [catSelect, setCatSelect] = useState([
    {category: 'Work', selected: false},
    {category: 'Self', selected: false},
    {category: 'Living', selected: false},
    {category: 'Play', selected: false},
  ]);

  const updateValue = (index) => {
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

  const submitAchievement = () => {
    console.log('categoryies:' + category);
    props.addAchievement(achievement, category);
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
            onValueChange={() => updateValue(index)}
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
