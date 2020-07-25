import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
// import {CheckBox} from 'react-native-elements';
import CheckBox from '@react-native-community/checkbox';

export default function AddAchievement(props) {
  const [achievement, setAchievement] = useState('');
  const [category, setCategory] = useState([]);
  const [isSelected, setSelection] = useState([
    {category: 'Work', selected: false},
    {category: 'Self', selected: false},
    {category: 'Living', selected: false},
    {category: 'Play', selected: false},
  ]);

  const updateValue = (index) => {
    let newArr = [...isSelected];
    newArr[index].selected = !isSelected[index].selected;
    setSelection(newArr);
    var cat = [];
    isSelected.map((item) => {
      if (item.selected === true) {
        cat.push(item.category);

        // setCategory((prevItems) => {
        //   console.log('item: ' + item.category);
        //   return [item.category, ...prevItems];
        // });
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

      {isSelected.map((item, index) => (
        <>
          <Text>{item.category}</Text>
          <CheckBox
            disabled={false}
            value={item.selected}
            onValueChange={() => updateValue(index)}
          />
        </>
      ))}

      {/* <View style={styles.btnView}>
        <RadioButton
          value="Self"
          status={category === 'Self' ? 'checked' : 'unchecked'}
          onPress={() => setCategory('Self')}
        />
        <Text style={styles.radioBtnText}>Self</Text>
      </View>gory('Work')}
        />
        <Text style={styles.radioBtnText}>Work</Text>
      </View>

      <View style={styles.btnView}>
        <RadioButton

      <View style={styles.btnView}>
        <RadioButton
          value="Work"
          status={category === 'Work' ? 'checked' : 'unchecked'}
          onPress={() => setCate
          value="Living"
          status={category === 'Living' ? 'checked' : 'unchecked'}
          onPress={() => setCategory('Living')}
        />
        <Text style={styles.radioBtnText}>Living</Text>
      </View>

      <View style={styles.btnView}>
        <RadioButton
          value="Play"
          status={category === 'Play' ? 'checked' : 'unchecked'}
          onPress={() => setCategory('Play')}
        />
        <Text style={styles.radioBtnText}>Play</Text>
      </View> */}
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
