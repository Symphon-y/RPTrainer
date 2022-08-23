import {
  StyleSheet,
  Text,
  View,
  Button,
  Pressable,
  TextInput,
  ImageBackground,
  Image,
} from 'react-native';
import { useContext, useState } from 'react';
import {useNavigation} from '@react-navigation/core'

// import { RoutineContext } from '../../Home/RoutineContext.js';

const image = require('../assets/plusIcon.png');

const AddLift = () => {
  const navigation = useNavigation()
  // const routineState = useContext(RoutineContext);
  return (
    <Pressable
      style={styles.container}
      onPress={() => {
        navigation.navigate("AddLift")
      }}>
      <Image source={image} style={styles.plusIcon} />
      <Text style={styles.heading}>Add A Lift</Text>
      <Text style={styles.subtext}>Whats one more?</Text>
    </Pressable>
  );
};

export default AddLift;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    margin: 6.5,
    alignSelf: 'flex-end',
    flexDirection: 'column',
    backgroundColor: '#B9AEF5',
    height: 80,
    width: 100,
    borderRadius: 6,
  },
  plusIcon: {
    marginTop: 6,
    marginLeft: 6,
    width: 20,
    height: 20,
    overflow: 'visible',
  },
  heading: {
    marginTop: 10,
    marginLeft: 8,
    color: '#282828',
    fontWeight: 'bold',
  },
  subtext: {
    fontSize: 9,
    marginTop: 0.5,
    marginLeft: 8,
  },
});
