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
// import { RoutineContext } from './RoutineContext.js';
const image = require('../assets/dumbbellFist.png');

const TodaysRoutine = () => {
  return (
    <Pressable style={styles.container}>
      <Image source={image} style={styles.icon} />
      <Text style={styles.heading}>Workout</Text>
      <Text style={styles.subtext}>Put in work</Text>
    </Pressable>
  );
};

export default TodaysRoutine;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    margin: 6.5,
    alignSelf: 'flex-start',
    flexDirection: 'column',
    backgroundColor: '#B9AEF5',
    height: 80,
    width: 150,
    borderRadius: 6,
  },
  icon: {
    marginTop: 6,
    marginLeft: 6,
    width: 20,
    height: 20,
    overflow: 'visible',
  },
  heading: {
    marginTop: 10,
    marginLeft: 6,
    color: '#282828',
    fontWeight: 'bold',
  },
  subtext: {
    fontSize: 9,
    marginTop: 0.5,
    marginLeft: 8,
  },
});
