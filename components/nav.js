import React from 'react';
import {StyleSheet} from 'react-native';
import {Header} from 'react-native-elements';

export default function Nav(props) {
  return (
    <Header
      style={styles.header}
      leftComponent={{icon: 'home', color: '#fff'}}
      centerComponent={{
        text: 'Got This',
        style: {color: '#fff', fontWeight: 'bold'},
      }}
      rightComponent={{icon: 'menu', color: '#fff'}}
    />
  );
}

const styles = StyleSheet.create({
  header: {
    paddingBottom: 10,
  },
});
