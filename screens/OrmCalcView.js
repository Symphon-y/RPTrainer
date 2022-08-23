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

const ORMCalcView = () => {
  // const routineContext = useContext(RoutineContext);
  const navigation = useNavigation()

  const [weight, setWeight] = useState();
  const [reps, setReps] = useState();

  // ORM Equations
  const [brzycki, setBrzycki] = useState();
  const [epley, setEpley] = useState();
  const [lander, setLander] = useState();
  const [lombardi, setLombardi] = useState();
  const [mayhewetal, setMayhewEtAl] = useState();
  const [oConnerEtAl, setOConnerEtAl] = useState();
  const [wathan, setWathan] = useState();
  const [average, setAvereage] = useState()
  useEffect(() => {
    const bry = weight*(36/(37-reps));
    setBrzycki(bry);
    const epl = weight*(1+0.0333*reps);
    setEpley(epl);
    const land = ((100*weight)/(101.3-2.67123*reps));
    setLander(land);
    const lomb = weight*(reps**0.1)
    setLombardi(lomb)
    const may = ((100*weight)/(52.2 +(41.9*2.71828**(-0.055*reps))))
    setMayhewEtAl(may)
    const oCon = (weight*(1+0.025*reps))
    setOConnerEtAl(oCon)
    const wat = ((100*weight)/(48.8+(53.8*2.71828**(-0.075*reps))))
    setWathan(wat)
    const ave = Math.round((bry+epl+land+lomb+may+oCon+wat) / 7)
    setAvereage(ave)
  }, [reps, weight])
  return (
    <View style={styles.addLiftFormContainer}>
      <Text>
      One Rep Max Calculator
      </Text>
      <Text style={styles.metrics}>
      Enter a weight, and the max number of reps you can accomplish at that weight.
      </Text>
      <Text style={styles.metrics}>
        {`${weight}`}lbs / {`${Math.floor(weight / 2.2)}`}kgs
      </Text>
      <Slider
        style={styles.slider}
        step={1}
        minimumValue={0}
        maximumValue={700}
        minimumTrackTintColor='#1fb28a'
        maximumTrackTintColor='#d3d3d3'
        thumbTintColor='#b9e4c9'
        onValueChange={(value) => {
          setWeight(value);
        }}
      />
      <Text style={styles.metrics}>
        {`${reps}`} Reps
      </Text>
      <Slider
        style={styles.slider}
        step={1}
        minimumValue={0}
        maximumValue={50}
        minimumTrackTintColor='#1fb28a'
        maximumTrackTintColor='#d3d3d3'
        thumbTintColor='#b9e4c9'
        onValueChange={(value) => {
          setReps(value);
        }}
      />
      <Text>
      Your One Rep Max is approximately
      </Text>
      <Text>
      {`${average}`}lbs / {`${Math.floor(average/2.2)}`} kgs
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

export default ORMCalcView;

const styles = StyleSheet.create({
  addLiftFormContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 50,
    marginBottom: 30,
  },
  slider:{
    width: '90%',
  }
});
