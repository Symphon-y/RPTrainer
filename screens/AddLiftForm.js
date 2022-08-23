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
import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';

const AddLiftForm = () => {
  // const routineContext = useContext(RoutineContext);
  const navigation = useNavigation()
  const [newLift, setNewLift] = useState();
  const [ORM, setORM] = useState(0);
  const [isoVCmpnd, setisoVCmpnd] = useState();
  const [uprVLwr, setuprVLwr] = useState();
  const [pshVPull, setpshVPull] = useState();
  return (
    <View style={styles.addLiftFormContainer}>
      <TextInput
        placeholder={`Lift Name`}
        id='user_name'
        onChangeText={(value) => setNewLift(value)}
        style={styles.metrics}></TextInput>
      <Text style={styles.metrics}>
        {`1RM = ${ORM}`}lbs / {`${Math.floor(ORM / 2.2)}Kgs`}
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
          setORM(value);
        }}
      />
      <Picker
        style={styles.Picker}
        selectedValue={isoVCmpnd}
        onValueChange={(itemValue, itemIndex) => setisoVCmpnd(itemValue)}>
        <Picker.Item label='Isolated' value='Isolated' />
        <Picker.Item label='Compound' value='Compouned' />
      </Picker>
      <Picker
        style={styles.Picker}
        selectedValue={uprVLwr}
        onValueChange={(itemValue, itemIndex) => setuprVLwr(itemValue)}>
        <Picker.Item label='Upper' value='Upper' />
        <Picker.Item label='Lower' value='Lower' />
      </Picker>
      <Picker
        style={styles.Picker}
        selectedValue={pshVPull}
        onValueChange={(itemValue, itemIndex) => setpshVPull(itemValue)}>
        <Picker.Item label='Push' value='Push' />
        <Picker.Item label='Pull' value='Pull' />
      </Picker>
      <View style={styles.buttonContainer}>
        <Pressable
          style={styles.button}
          onPress={() => {
            console.log('hello');
          }}
          accessibilityLabel='Click here for the next onboarding question'>
          <Text style={styles.buttonText}>Add More</Text>
        </Pressable>
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
    </View>
  );
};

export default AddLiftForm;

const styles = StyleSheet.create({
  addLiftFormContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 50,
    marginBottom: 30,
  },
  Picker: { width: 300 },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  metrics: {
    paddingTop: 10,
    paddingBottom: 20,
    textAlign: 'center',
    overflow: 'visible',
    top: 10,
    color: '#282828',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 30,
    lineHeight: 35,
    textAlign: 'center',
  },
  slider: {
    width: '90%',
  },
  button: {
    marginLeft: 90,
    marginRight: 90,
  }
});
