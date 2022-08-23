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
import { useContext, useState, useEffect } from 'react';
import {useNavigation} from '@react-navigation/core'
// import { RoutineContext } from '../../Home/RoutineContext.js';
import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';

const asset45 = require(`../assets/Asset45s.png`);
const asset25 = require(`../assets/Asset25s.png`);
const asset10 = require(`../assets/Asset10s.png`);
const asset5 = require(`../assets/Asset5s.png`);
const asset2 = require(`../assets/Asset2s.png`);


const PlateCalcView = () => {
  const navigation = useNavigation()
  const [barbell, setBarbell] = useState()
  const [target, setTarget] = useState()
  const [x45s, set45s] = useState()
  const [x25s, set25s] = useState()
  const [x10s, set10s] = useState()
  const [x5s, set5s] = useState()
  const [x2p5s, set2p5s] = useState()

  const barbellPlateCalculator = (targetWeight, barWeight) => {
    var weightToAdd = targetWeight - barWeight;
    var fortyFives = Math.floor(weightToAdd/(2*45));
      set45s(fortyFives)
    var twentyFives = Math.floor((weightToAdd - (fortyFives * 45 * 2)) / (2*25));
      set25s(twentyFives)
    var tens = Math.floor((weightToAdd - ((fortyFives * 45 * 2)) - ((twentyFives * 25 * 2))) / (2*10));
     set10s(tens)
    var fives = Math.floor((weightToAdd - ((fortyFives * 45 * 2)) - ((twentyFives * 25 * 2)) - ((tens * 10 * 2)))/ (2*5));
     set5s(fives)
    var twoAndHalf = Math.floor((weightToAdd - ((fortyFives * 45 * 2)) - ((twentyFives * 25 * 2)) - ((tens * 10 * 2)) - ((fives * 5 * 2))) / (2*2.5));
    set2p5s(twoAndHalf)
  }
  return (
    <View style={styles.plateCalcContainer}>
      <Text>Barbell Weight</Text>
      <Text>{`${barbell}`}lbs / {`${Math.floor(barbell / 2.2)}`}kgs</Text>
      <Slider
              selectedValue={barbell}
              style={styles.slider}
              step={1}
              minimumValue={0}
              maximumValue={100}
              minimumTrackTintColor='#1fb28a'
              maximumTrackTintColor='#d3d3d3'
              thumbTintColor='#b9e4c9'
              onValueChange={(value) => {
                setBarbell(value);
                barbellPlateCalculator(target,barbell)
              }}
            />
            <Text>Target Weight</Text>
            <Text>{`${target}`}lbs / {`${Math.floor(target / 2.2)}`}kgs</Text>
            <Slider
              selectedValue={target}
              style={styles.slider}
              step={1}
              minimumValue={0}
              maximumValue={1000}
              minimumTrackTintColor='#1fb28a'
              maximumTrackTintColor='#d3d3d3'
              thumbTintColor='#b9e4c9'
              onValueChange={(value) => {
                setTarget(value);
                barbellPlateCalculator(target,barbell)
              }}
            />
            <Text>
              45s: {x45s}
            </Text>
            <Text>
              25s: {x25s}
            </Text>
            <Text>
              10s: {x10s}
            </Text>
            <Text>
              5s: {x5s}
            </Text>
            <Text>
              2.5s: {x2p5s}
            </Text>
      <Pressable
          style={styles.button}
          onPress={() => {
            // routineContext.handlePageChange('Home');
            navigation.navigate("Home")
          }}
          accessibilityLabel='Click to go back home'>
          <Text style={styles.buttonText}>Done</Text>
          </Pressable>
    </View>
  )
};

export default PlateCalcView;

const styles = StyleSheet.create({
  plateCalcContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    // justifyContent: 'space-around',
    marginTop: 50,
    marginBottom: 30,
  },
  slider:{
    width: '90%',
  },
  button: {
    paddingTop: 30,
  },
  imageContainer: {
    display: 'flex',
    flexDirection: 'column',
  }
});
