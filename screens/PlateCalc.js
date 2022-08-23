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

const PlateCalc = () => {
  const navigation = useNavigation()
    return (
    <Pressable style={styles.container} onPress={()=>{
      navigation.navigate("PlateCalc")
    }}>
      {/* <Image source={image} style={styles.plusIcon} /> */}
      <Text style={styles.heading}>Plate Calc</Text>
      <Text style={styles.subtext}>Dont lie, you cant math</Text>
    </Pressable>
  );
};

export default PlateCalc;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    margin: 6.5,
    alignSelf: 'flex-start',
    flexDirection: 'column',
    backgroundColor: '#B9AEF5',
    height: 80,
    width: 100,
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
