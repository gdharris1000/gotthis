import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';

export default function AddAchievement(props) {
  const [achievement, setAchievement] = useState('');
  const [category, setCategory] = useState('');

  const onChangeAchievement = (text) => {
    setAchievement(text);
  };
  const onChangeCategory = (text) => {
    setCategory(text);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View>
        <TextInput
          placeholder="Enter achievement"
          onChangeText={onChangeAchievement}
          style={styles.txtInput}
          multiline
          numberOfLines={4}
        />
        <TextInput
          placeholder="Enter category"
          onChangeText={onChangeCategory}
          style={styles.txtInput}
        />
        <TouchableOpacity
          style={styles.btn}
          onPress={() => props.addAchievement(achievement, category)}>
          <Text style={styles.btnText}>Add Achievement</Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  txtInput: {
    borderColor: 'black',
    borderWidth: 2,
    borderStyle: 'solid',
    fontSize: 18,
    padding: 10,
    marginTop: 10,
  },
});
