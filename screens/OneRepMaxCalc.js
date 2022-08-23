import {
  StyleSheet,
  Text,
  View,
  Button,
  Pressable,
  TextInput,
  ImageBackground,
} from 'react-native';
import { useContext, useState } from 'react';
import {useNavigation} from '@react-navigation/core'


// import { RoutineContext } from './RoutineContext.js';

const OneRepMaxCalc = () => {
  const navigation = useNavigation()
  // const routineState = useContext(RoutineContext);
  return (
    <Pressable
      style={styles.container}
      onPress={() => {
        navigation.navigate("ORMCalc")
      }}>
      {/* <Image source={image} style={styles.plusIcon} /> */}
      <Text style={styles.heading}>One Rep Max Calc</Text>
      <Text style={styles.subtext}>No Spotter? No Problem </Text>
    </Pressable>
  );
};

export default OneRepMaxCalc;

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
  plusIcon: {
    marginTop: 6,
    marginLeft: 6,
    width: 25,
    height: 25,
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
